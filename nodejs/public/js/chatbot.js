document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const chatButton = document.getElementById('chat-button');
  const chatWindow = document.getElementById('chat-window');
  const closeChat = document.getElementById('close-chat');
  const chatInput = document.getElementById('chat-input');
  const sendMessage = document.getElementById('send-message');
  const chatMessages = document.getElementById('chat-messages');
  const voiceChat = document.getElementById('voice-chat');
  
  // API endpoint - update with your actual server address
  const API_URL = 'http://192.168.145.207:8000';
  
  // Toggle chat window
  chatButton.addEventListener('click', () => {
    chatWindow.classList.toggle('hidden');
    chatButton.classList.toggle('hidden');
    if (!chatWindow.classList.contains('hidden')) {
      chatInput.focus();
    }
  });
  
  // Close chat window
  closeChat.addEventListener('click', () => {
    chatWindow.classList.add('hidden');
    chatButton.classList.remove('hidden');
  });
  
  // Send message on Enter key
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendUserMessage();
    }
  });
  
  // Send message on button click
  sendMessage.addEventListener('click', sendUserMessage);
  
  // Voice chat functionality
  voiceChat.addEventListener('click', startVoiceRecognition);
  
  // Function to send user message
  function sendUserMessage() {
    const message = chatInput.value.trim();
    if (message === '') return;
    
    // Add user message to chat
    addMessageToChat(message, 'user');
    chatInput.value = '';
    
    // Show loading indicator
    const loadingId = showLoadingIndicator();
    
    // Send to API
    fetch(`${API_URL}/shop`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: message }),
    })
    .then(response => response.json())
    .then(data => {
      // Remove loading indicator
      removeLoadingIndicator(loadingId);
      
      // Add bot response to chat
      addMessageToChat(data.response, 'bot');
    })
    .catch(error => {
      // Remove loading indicator
      removeLoadingIndicator(loadingId);
      
      console.error('Error:', error);
      addMessageToChat('Sorry, I encountered an error. Please try again later.', 'bot');
    });
  }
  
  // Function to start voice recognition
  function startVoiceRecognition() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      addMessageToChat('Voice recognition is not supported in your browser.', 'bot');
      return;
    }
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    
    // Visual feedback
    voiceChat.classList.add('text-green-200');
    addMessageToChat('Listening...', 'system');
    
    recognition.onresult = function(event) {
      const transcript = event.results[0][0].transcript;
      
      // Update the last message instead of adding a new one
      updateLastMessage(transcript, 'user');
      
      // Show loading indicator
      const loadingId = showLoadingIndicator();
      
      // Send to API
      fetch(`${API_URL}/shop`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: transcript }),
      })
      .then(response => response.json())
      .then(data => {
        // Remove loading indicator
        removeLoadingIndicator(loadingId);
        
        // Add bot response to chat
        addMessageToChat(data.response, 'bot');
      })
      .catch(error => {
        // Remove loading indicator
        removeLoadingIndicator(loadingId);
        
        console.error('Error:', error);
        addMessageToChat('Sorry, I encountered an error. Please try again later.', 'bot');
      });
    };
    
    recognition.onerror = function(event) {
      voiceChat.classList.remove('text-green-200');
      updateLastMessage('Voice recognition failed. Please try again.', 'system');
    };
    
    recognition.onend = function() {
      voiceChat.classList.remove('text-green-200');
    };
    
    recognition.start();
  }
  
  // Function to add message to chat
  function addMessageToChat(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'flex items-start mb-4';
    
    if (sender === 'user') {
      messageDiv.className += ' justify-end';
      messageDiv.innerHTML = `
        <div class="bg-blue-100 rounded-lg p-3 max-w-3/4">
          <p class="text-sm">${message}</p>
        </div>
      `;
    } else if (sender === 'bot') {
      messageDiv.innerHTML = `
        <div class="bg-green-100 rounded-lg p-3 max-w-3/4">
          <p class="text-sm">${message}</p>
        </div>
      `;
    } else {
      // System message
      messageDiv.className += ' justify-center';
      messageDiv.innerHTML = `
        <div class="bg-gray-200 rounded-lg p-2 max-w-3/4">
          <p class="text-xs text-gray-600">${message}</p>
        </div>
      `;
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    return messageDiv;
  }
  
  // Function to update the last message
  function updateLastMessage(message, sender) {
    const lastMessage = chatMessages.lastChild;
    
    if (lastMessage && lastMessage.querySelector('p')) {
      lastMessage.querySelector('p').textContent = message;
    } else {
      addMessageToChat(message, sender);
    }
  }
  
  // Function to show loading indicator
  function showLoadingIndicator() {
    const loadingId = 'loading-' + Date.now();
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'flex items-start mb-4';
    loadingDiv.id = loadingId;
    loadingDiv.innerHTML = `
      <div class="bg-gray-100 rounded-lg p-3 max-w-3/4">
        <p class="text-sm">
          <span class="typing-indicator">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </span>
        </p>
      </div>
    `;
    
    chatMessages.appendChild(loadingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    return loadingId;
  }
  
  // Function to remove loading indicator
  function removeLoadingIndicator(loadingId) {
    const loadingElement = document.getElementById(loadingId);
    if (loadingElement) {
      loadingElement.remove();
    }
  }
});