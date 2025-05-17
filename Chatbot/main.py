
from fastapi import FastAPI, HTTPException, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import speech_recognition as sr
from langchain_core.prompts import PromptTemplate
from langchain_google_genai import GoogleGenerativeAI
from langchain_core.runnables import RunnableSequence
import uuid
import os

app = FastAPI()
# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Initialize Gemini Model
GEMINI_API_KEY = "AIzaSyDOc57VVboRw3FZUKh95yehTjOW0whzZNw"
llm = GoogleGenerativeAI(model="gemini-1.5-flash", api_key=GEMINI_API_KEY)

# Updated VitaBot Prompt Template
prompt_template = PromptTemplate(
    input_variables=["query"],
    template="""You are VitaBot, the friendly AI shopping assistant for VitaFresh, an online store specializing in fresh fruits, vegetables, and organic produce. Your goal is to provide helpful, accurate, and engaging responses to customer queries.

STORE INFORMATION:
- Name: VitaFresh
- Specialties: Fresh fruits, vegetables, organic produce, dairy products, and healthy food items
- Special tags: flash_deal, deal_of_the_day, summer_specials, everyday_essentials
- Delivery: Cash  delivery on orders over 2000Rs
- Organic options: Available for most produce items

RESPONSE GUIDELINES:
1. Be friendly, enthusiastic, and conversational
2. Recommend specific products when appropriate
3. Mention seasonal items and special deals when relevant
4. Provide brief information about nutritional benefits when appropriate
5. Suggest complementary products (e.g., if someone asks about apples, mention cinnamon or caramel dip)
6. If you don't know specific inventory or prices, provide general information and offer to check
7. Always encourage healthy eating habits

User Query: {query}

VitaBot Response:"""
)

# Create LangChain Runnable Sequence
chain = RunnableSequence(prompt_template | llm)

# Pydantic model for text query input
class ShoppingQuery(BaseModel):
    query: str

# Endpoint for text-based shopping assistant
@app.post("/shop")
async def shop(shopping_query: ShoppingQuery):
    try:
        response = chain.invoke({"query": shopping_query.query})
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Endpoint for voice-based shopping assistant
@app.post("/voice-shop")
async def voice_shop(file: UploadFile = File(...)):
    recognizer = sr.Recognizer()
    unique_filename = f"temp_audio_{uuid.uuid4()}.wav"

    try:
        # Save uploaded audio to a temporary file
        with open(unique_filename, "wb") as f:
            f.write(await file.read())

        # Use SpeechRecognition to transcribe the audio
        with sr.AudioFile(unique_filename) as source:
            audio = recognizer.record(source)

        try:
            text = recognizer.recognize_google(audio)
        except sr.UnknownValueError:
            os.remove(unique_filename)
            return {"error": "Could not understand the audio"}
        except sr.RequestError:
            os.remove(unique_filename)
            return {"error": "Could not request results from Google Speech API"}

        # Clean up temporary audio file
        os.remove(unique_filename)

        # Get response from Gemini using transcribed text
        response = chain.invoke({"query": text})
        return {"text_input": text, "response": response}

    except Exception as e:
        if os.path.exists(unique_filename):
            os.remove(unique_filename)
        raise HTTPException(status_code=500, detail=str(e))
