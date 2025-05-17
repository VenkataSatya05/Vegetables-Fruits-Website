const Products = [
  {
    "name": "Organic Apples",
    "category": "Fresh Fruits",
    "description": "Crisp and sweet apples, grown organically.",
    "image": "https://img.freepik.com/free-photo/wicker-basket-red-juicy-apples-marble-surface_114579-43684.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 300,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["flash_deal"],
    "isOrganic": true,
    "season": "Fall",
    "origin": "Washington, USA",
    "originalPrice": 375,
    "discountPercentage": 20
  },
  {
    "name": "Golden Bananas",
    "category": "Fresh Fruits",
    "description": "Ripe and sweet bananas, perfect for smoothies.",
    "image": "https://img.freepik.com/free-photo/top-view-bunch-bananas-isolated-black-wood_141793-7454.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740&t=st=1746860698~exp=1746864298~hmac=0f1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1",
    "price": 180,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": false,
    "season": "All Seasons",
    "origin": "Ecuador",
    "originalPrice": 240,
    "discountPercentage": 25
  },
  {
    "name": "Red Grapes",
    "category": "Fresh Fruits",
    "description": "Juicy red grapes, ideal for snacking.",
    "image": "https://img.freepik.com/free-photo/view-sweet-delicious-red-grapes_23-2151538230.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740&t=st=1746860698~exp=1746864298~hmac=0f1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1",
    "price": 450,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["summer_specials"],
    "isOrganic": false,
    "season": "Summer",
    "origin": "Chile",
    "originalPrice": 529,
    "discountPercentage": 15
  },
  {
  "name": "Mango Alphonso",
  "category": "Fresh Fruits",
  "description": "Premium quality mangoes, naturally ripened.",
  "image": "https://img.freepik.com/free-photo/delicious-mango-still-life_23-2151542130.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740&t=st=1746860698~exp=1746864298~hmac=0f1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1",
  "price": 650,
  "quantity": {
    "value": "1",
    "unit": "kg"
  },
  "status": "Available",
  "specialTag": ["everyday_essentials"],
  "isOrganic": true,
  "season": "Summer",
  "origin": "India",
  "originalPrice": 765,
  "discountPercentage": 15
  },
  
  {
    "name": "Kiwi",
    "category": "Fresh Fruits",
    "description": "Imported kiwi, rich in vitamin C.",
    "image": "https://img.freepik.com/free-photo/close-up-tasty-kiwi-white-background_1112-453.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 320,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["flash_deal"],
    "isOrganic": false,
    "season": "Winter",
    "origin": "New Zealand",
    "originalPrice": 400,
    "discountPercentage": 20
  },
  {
    "name": "Dragon Fruit",
    "category": "Fresh Fruits",
    "description": "Exotic and vibrant fruit, a healthy treat.",
    "image": "https://img.freepik.com/free-photo/view-delicious-dragon-fruit-pitahaya_23-2151566292.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740&t=st=1746860698~exp=1746864298~hmac=0f1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1",
    "price": 580,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": true,
    "season": "Summer",
    "origin": "Vietnam",
    "originalPrice": 773,
    "discountPercentage": 25
  },
  {
    "name": "Pomegranate",
    "category": "Fresh Fruits",
    "description": "Rich in antioxidants, great for juicing.",
    "image": "https://img.freepik.com/free-photo/sliced-ripe-pomegranate-wooden-board_114579-55521.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740&t=st=1746860698~exp=1746864298~hmac=0f1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1",
    "price": 280,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["summer_specials"],
    "isOrganic": false,
    "season": "Fall",
    "origin": "Iran",
    "originalPrice": 350,
    "discountPercentage": 20
  },
  {
    "name": "Watermelon",
    "category": "Fresh Fruits",
    "description": "Sweet and refreshing, perfect for summer.",
    "image": "https://img.freepik.com/free-photo/green-striped-ripe-watermelon-with-slice-cross-section-isolated-white-background-with-copy-space-text-images-special-kind-berry-sweet-pink-flesh-with-black-seeds-side-view_639032-1254.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740&t=st=1746860698~exp=1746864298~hmac=0f1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1",
    "price": 420,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["everyday_essentials"],
    "isOrganic": false,
    "season": "Summer",
    "origin": "Georgia, USA",
    "originalPrice": 494,
    "discountPercentage": 15
  },
  {
    "name": "Oranges",
    "category": "Fresh Fruits",
    "description": "Juicy oranges, packed with vitamin C.",
    "image": "https://img.freepik.com/free-photo/fresh-orange-isolated-white-background_93675-131671.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740&t=st=1746860698~exp=1746864298~hmac=0f1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1",
    "price": 230,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["flash_deal"],
    "isOrganic": true,
    "season": "Winter",
    "origin": "Florida, USA",
    "originalPrice": 306,
    "discountPercentage": 25
  },
  {
    "name": "Strawberries",
    "category": "Fresh Fruits",
    "description": "Sweet and juicy strawberries, perfect for desserts.",
    "image": "https://img.freepik.com/free-photo/red-fresh-strawberries-with-green-leaves_114579-10506.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740&t=st=1746860698~exp=1746864298~hmac=0f1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1",
    "price": 380,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": true,
    "season": "Spring",
    "origin": "California, USA",
    "originalPrice": 475,
    "discountPercentage": 20
  },
  {
    "name": "Blueberries",
    "category": "Fresh Fruits",
    "description": "Antioxidant-rich blueberries, great for smoothies.",
    "image": "https://img.freepik.com/free-photo/closeup-vertical-shot-blueberries-with-water-droplets-leaves_181624-1166.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740&t=st=1746860698~exp=1746864298~hmac=0f1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1",
    "price": 520,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["summer_specials"],
    "isOrganic": true,
    "season": "Summer",
    "origin": "Maine, USA",
    "originalPrice": 693,
    "discountPercentage": 25
  },
  {
    "name": "Papaya",
    "category": "Fresh Fruits",
    "description": "Tropical papaya, rich in enzymes and vitamins.",
    "image": "https://img.freepik.com/free-photo/tasty-papaya-still-life_23-2151580898.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 290,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["everyday_essentials"],
    "isOrganic": false,
    "season": "Summer",
    "origin": "Hawaii, USA",
    "originalPrice": 341,
    "discountPercentage": 15
  },
  {
    "name": "Guava",
    "category": "Fresh Fruits",
    "description": "Sweet and tangy guava, packed with fiber.",
    "image": "https://img.freepik.com/free-photo/guava-fruit-still-life_23-2151551105.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_h Pronunciation: ['gwa-və']",
    "price": 210,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["flash_deal"],
    "isOrganic": false,
    "season": "Fall",
    "origin": "Mexico",
    "originalPrice": 280,
    "discountPercentage": 25
  },
  {
    "name": "Pear",
    "category": "Fresh Fruits",
    "description": "Juicy pears, perfect for a healthy snack.",
    "image": "https://img.freepik.com/free-photo/wooden-board-delicious-yellow-pears-black-surface_114579-88814.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 340,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": true,
    "season": "Fall",
    "origin": "Oregon, USA",
    "originalPrice": 425,
    "discountPercentage": 20
  },
  {
    "name": "Peach",
    "category": "Fresh Fruits",
    "description": "Sweet and fuzzy peaches, great for pies.",
    "image": "https://img.freepik.com/free-photo/peach-isolated-white-background_93675-131246.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 270,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["summer_specials"],
    "isOrganic": false,
    "season": "Summer",
    "origin": "Georgia, USA",
    "originalPrice": 318,
    "discountPercentage": 15
  },
  {
    "name": "Plum",
    "category": "Fresh Fruits",
    "description": "Tart and juicy plums, perfect for snacking.",
    "image": "https://img.freepik.com/free-photo/whole-half-cut-black-cherry-plum_114579-11759.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 310,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["everyday_essentials"],
    "isOrganic": true,
    "season": "Summer",
    "origin": "Chile",
    "originalPrice": 387,
    "discountPercentage": 20
  },
  {
    "name": "Apricot",
    "category": "Fresh Fruits",
    "description": "Sweet apricots, rich in vitamin A.",
    "image": "https://img.freepik.com/free-photo/fresh-yellow-apricots-with-green-leaf_250435-1110.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 390,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["flash_deal"],
    "isOrganic": false,
    "season": "Summer",
    "origin": "Turkey",
    "originalPrice": 520,
    "discountPercentage": 25
  },
  {
    "name": "Cherry",
    "category": "Fresh Fruits",
    "description": "Sweet cherries, perfect for a summer treat.",
    "image": "https://img.freepik.com/free-photo/cherry-drops-water-close-up-arrangement-berries-background-fresh-harvest-juicy-cherries-pie-juice-ingredient_166373-1607.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 480,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": true,
    "season": "Summer",
    "origin": "Washington, USA",
    "originalPrice": 565,
    "discountPercentage": 15
  },
  {
    "name": "Lychee",
    "category": "Fresh Fruits",
    "description": "Sweet and floral lychee, a tropical delight.",
    "image": "https://img.freepik.com/free-photo/lychee-fruit-close-up_1150-13616.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 620,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["summer_specials"],
    "isOrganic": false,
    "season": "Summer",
    "origin": "China",
    "originalPrice": 775,
    "discountPercentage": 20
  },
  {
    "name": "Mango Kesar",
    "category": "Fresh Fruits",
    "description": "Aromatic Kesar mangoes, sweet and juicy.",
    "image": "https://img.freepik.com/free-photo/delicious-mango-still-life_23-2151542130.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 550,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["everyday_essentials"],
    "isOrganic": true,
    "season": "Summer",
    "origin": "India",
    "originalPrice": 733,
    "discountPercentage": 25
  },
  {
    "name": "Avocado",
    "category": "Fresh Fruits",
    "description": "Creamy avocados, perfect for guacamole.",
    "image": "https://img.freepik.com/free-photo/avocado-fruit-background_23-2151932284.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 330,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["flash_deal"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "Mexico",
    "originalPrice": 388,
    "discountPercentage": 15
  },
  {
    "name": "Passion Fruit",
    "category": "Fresh Fruits",
    "description": "Tangy passion fruit, great for juices.",
    "image": "https://img.freepik.com/free-photo/fresh-maracuja-fruit-also-known-as-passion-fruit_23-2151554230.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 470,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": false,
    "season": "Summer",
    "origin": "Brazil",
    "originalPrice": 587,
    "discountPercentage": 20
  },
  {
    "name": "Blackberries",
    "category": "Fresh Fruits",
    "description": "Tart and sweet blackberries, rich in antioxidants.",
    "image": "https://img.freepik.com/free-photo/close-up-shiny-freshly-picked-blackberries_158595-6408.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 510,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["summer_specials"],
    "isOrganic": true,
    "season": "Summer",
    "origin": "Oregon, USA",
    "originalPrice": 680,
    "discountPercentage": 25
  },
  {
    "name": "Raspberries",
    "category": "Fresh Fruits",
    "description": "Delicate raspberries, perfect for desserts.",
    "image": "https://img.freepik.com/free-photo/fresh-raspberries-flat-lay-food-photography_53876-101552.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 530,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["everyday_essentials"],
    "isOrganic": true,
    "season": "Summer",
    "origin": "California, USA",
    "originalPrice": 624,
    "discountPercentage": 15
  },
  {
    "name": "Coconut",
    "category": "Fresh Fruits",
    "description": "Fresh coconut, ideal for water and flesh.",
    "image": "https://img.freepik.com/free-photo/coconut-still-life_23-2151526884.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 190,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["flash_deal"],
    "isOrganic": false,
    "season": "All Seasons",
    "origin": "Philippines",
    "originalPrice": 253,
    "discountPercentage": 25
  },
  {
    "name": "Star Fruit",
    "category": "Fresh Fruits",
    "description": "Unique star-shaped fruit, sweet and tangy.",
    "image": "https://img.freepik.com/free-vector/starfruit-isolated-vector-realistic-exotic-carambola-fruit-sliced_1268-18122.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 720,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": false,
    "season": "Summer",
    "origin": "Malaysia",
    "originalPrice": 847,
    "discountPercentage": 15
  },
  {
    "name": "Mangosteen",
    "category": "Fresh Fruits",
    "description": "Sweet and tangy mangosteen, a tropical gem.",
    "image": "https://img.freepik.com/free-photo/mangosteen-thai-popular-fruits-tropical-fruit-with-sweet-juicy-white-segments-flesh-inside-thick-reddish-brown-rind_1150-13553.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 680,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["summer_specials"],
    "isOrganic": true,
    "season": "Summer",
    "origin": "Thailand",
    "originalPrice": 850,
    "discountPercentage": 20
  },
  {
    "name": "Rambutan",
    "category": "Fresh Fruits",
    "description": "Exotic rambutan, sweet and juicy.",
    "image": "https://img.freepik.com/free-photo/rambutan_1388-573.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 590,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["everyday_essentials"],
    "isOrganic": false,
    "season": "Summer",
    "origin": "Indonesia",
    "originalPrice": 786,
    "discountPercentage": 25
  },
  {
    "name": "Jackfruit",
    "category": "Fresh Fruits",
    "description": "Large and sweet jackfruit, perfect for vegan recipes.",
    "image": "https://img.freepik.com/free-photo/yellow-jackfruit_74190-4803.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 630,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["flash_deal"],
    "isOrganic": false,
    "season": "Summer",
    "origin": "India",
    "originalPrice": 741,
    "discountPercentage": 15
  },
  {
    "name": "Custard Apple",
    "category": "Fresh Fruits",
    "description": "Creamy and sweet custard apple, a tropical treat.",
    "image": "https://img.freepik.com/free-photo/custard-apple_1150-11054.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 570,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": true,
    "season": "Fall",
    "origin": "India",
    "originalPrice": 713,
    "discountPercentage": 20
  },
  {
    "name": "Fig",
    "category": "Fresh Fruits",
    "description": "Sweet figs, great for salads and desserts.",
    "image": "https://img.freepik.com/free-photo/mission-figs-bowl-white-table-with-dark-background-side-view-space-text_176474-7055.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 410,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["summer_specials"],
    "isOrganic": true,
    "season": "Summer",
    "origin": "Turkey",
    "originalPrice": 546,
    "discountPercentage": 25
  },
  {
    "name": "Grapefruit",
    "category": "Fresh Fruits",
    "description": "Tangy grapefruit, perfect for breakfast.",
    "image": "https://img.freepik.com/free-photo/grapefruit-isolated-whole-sliced_114579-85884.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 260,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["everyday_essentials"],
    "isOrganic": false,
    "season": "Winter",
    "origin": "Florida, USA",
    "originalPrice": 306,
    "discountPercentage": 15
  },
  {
    "name": "Nectarine",
    "category": "Fresh Fruits",
    "description": "Juicy nectarines, a summer favorite.",
    "image": "https://img.freepik.com/free-photo/peach-isolated-white-background_93675-131246.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 290,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["flash_deal"],
    "isOrganic": false,
    "season": "Summer",
    "origin": "California, USA",
    "originalPrice": 363,
    "discountPercentage": 20
  },
  {
    "name": "Tangerine",
    "category": "Fresh Fruits",
    "description": "Easy-to-peel tangerines, sweet and tangy.",
    "image": "https://img.freepik.com/free-photo/tangerine-slices-white-surface_140725-10011.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 240,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": true,
    "season": "Winter",
    "origin": "Morocco",
    "originalPrice": 320,
    "discountPercentage": 25
  },
  {
    "name": "Cantaloupe",
    "category": "Fresh Fruits",
    "description": "Sweet cantaloupe, perfect for summer salads.",
    "image": "https://img.freepik.com/free-photo/view-delicious-healthy-cantaloupe-melon_23-2151659016.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 370,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["summer_specials"],
    "isOrganic": false,
    "season": "Summer",
    "origin": "Arizona, USA",
    "originalPrice": 435,
    "discountPercentage": 15
  },
  {
    "name": "Honeydew Melon",
    "category": "Fresh Fruits",
    "description": "Refreshing honeydew, great for smoothies.",
    "image": "https://img.freepik.com/free-photo/watermelon-healthy-orange-white-yellow_1203-5846.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 390,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["everyday_essentials"],
    "isOrganic": false,
    "season": "Summer",
    "origin": "California, USA",
    "originalPrice": 488,
    "discountPercentage": 20
  },
  {
    "name": "Persimmon",
    "category": "Fresh Fruits",
    "description": "Sweet persimmons, a fall favorite.",
    "image": "https://img.freepik.com/free-photo/three-delicious-fuyu-persimmons-placed-wooden-table_114579-88874.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 350,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["flash_deal"],
    "isOrganic": true,
    "season": "Fall",
    "origin": "Japan",
    "originalPrice": 467,
    "discountPercentage": 25
  },
  {
    "name": "Pomelo",
    "category": "Fresh Fruits",
    "description": "Large and tangy pomelo, a citrus delight.",
    "image": "https://img.freepik.com/free-photo/cutted-half-fresh-grapefruit-put-dark-background_1150-28082.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 440,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": false,
    "season": "Winter",
    "origin": "Thailand",
    "originalPrice": 518,
    "discountPercentage": 15
  },
  {
    "name": "Durian",
    "category": "Fresh Fruits",
    "description": "King of fruits, creamy and pungent.",
    "image": "https://img.freepik.com/free-photo/whole-durian-white-background_1203-1875.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 750,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["summer_specials"],
    "isOrganic": false,
    "season": "Summer",
    "origin": "Malaysia",
    "originalPrice": 938,
    "discountPercentage": 20
  },

  {
    "name": "Baby Spinach",
    "category": "Fresh Vegetables",
    "description": "Tender spinach leaves, perfect for salads.",
    "image": "https://img.freepik.com/free-photo/close-up-leaves-fresh-swiss-chard_23-2148585793.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 220,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["flash_deal"],
    "isOrganic": false,
    "season": "Spring",
    "origin": "Florida, USA",
    "originalPrice": 275,
    "discountPercentage": 20
  },
  {
    "name": "Desi Tomato",
    "category": "Fresh Vegetables",
    "description": "Locally grown tomatoes, ideal for cooking.",
    "image": "https://img.freepik.com/free-photo/side-view-tomatoes-basket-wooden-table_141793-10947.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 180,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": false,
    "season": "Summer",
    "origin": "Texas, USA",
    "originalPrice": 240,
    "discountPercentage": 25
  },
  {
    "name": "Carrot Orange",
    "category": "Fresh Vegetables",
    "description": "Crunchy orange carrots, perfect for juicing.",
    "image": "https://img.freepik.com/free-photo/fresh-carrots-white-background_1127-244.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 190,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["summer_specials"],
    "isOrganic": true,
    "season": "Fall",
    "origin": "California, USA",
    "originalPrice": 224,
    "discountPercentage": 15
  },
  {
    "name": "Okra (Bhindi)",
    "category": "Fresh Vegetables",
    "description": "Fresh okra, great for stir-fries.",
    "image": "https://img.freepik.com/free-photo/close-up-fresh-green-okra_1127-246.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 250,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["everyday_essentials"],
    "isOrganic": false,
    "season": "Summer",
    "origin": "India",
    "originalPrice": 313,
    "discountPercentage": 20
  },
  {
    "name": "Broccoli",
    "category": "Fresh Vegetables",
    "description": "Fresh broccoli, ideal for steaming.",
    "image": "https://img.freepik.com/free-photo/freshness-organic-vegetables-healthy-eating-nature-green-gourmet-salad-generated-by-artificial-intelligence_188544-150294.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 320,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["flash_deal"],
    "isOrganic": true,
    "season": "Winter",
    "origin": "Mexico",
    "originalPrice": 376,
    "discountPercentage": 15
  },
  {
    "name": "Red Bell Pepper",
    "category": "Fresh Vegetables",
    "description": "Sweet red bell peppers, perfect for salads.",
    "image": "https://img.freepik.com/free-photo/pack-four-colorful-peppers_1203-1842.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 280,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": false,
    "season": "Summer",
    "origin": "Spain",
    "originalPrice": 373,
    "discountPercentage": 25
  },
  {
    "name": "Potato",
    "category": "Fresh Vegetables",
    "description": "Versatile potatoes, great for baking.",
    "image": "https://img.freepik.com/free-photo/top-view-potatoes-burlap-sack_23-2148599922.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 150,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["summer_specials"],
    "isOrganic": false,
    "season": "All Seasons",
    "origin": "Idaho, USA",
    "originalPrice": 188,
    "discountPercentage": 20
  },
  {
    "name": "Cauliflower",
    "category": "Fresh Vegetables",
    "description": "Fresh cauliflower, perfect for roasting.",
    "image": "https://img.freepik.com/free-photo/cauliflowers-isolated_74190-3389.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 290,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["everyday_essentials"],
    "isOrganic": true,
    "season": "Winter",
    "origin": "India",
    "originalPrice": 341,
    "discountPercentage": 15
  },
  {
    "name": "Ginger Root",
    "category": "Fresh Vegetables",
    "description": "Fresh ginger, ideal for teas and cooking.",
    "image": "https://img.freepik.com/free-photo/honey-lemon-ginger-juice-food-beverage-products-from-ginger-extract-food-nutrition-concept_1150-26377.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 210,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["flash_deal"],
    "isOrganic": false,
    "season": "All Seasons",
    "origin": "China",
    "originalPrice": 280,
    "discountPercentage": 25
  },
  {
    "name": "Zucchini",
    "category": "Fresh Vegetables",
    "description": "Fresh zucchini, great for grilling.",
    "image": "https://img.freepik.com/free-photo/high-angle-arrangement-with-zucchinis_23-2148917717.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 230,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": true,
    "season": "Summer",
    "origin": "Italy",
    "originalPrice": 287,
    "discountPercentage": 20
  },
  {
    "name": "Eggplant",
    "category": "Fresh Vegetables",
    "description": "Fresh eggplant, perfect for curries.",
    "image": "https://img.freepik.com/free-photo/top-view-fresh-vegetables-composition-with-eggplants-white-background_140725-140117.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 260,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["summer_specials"],
    "isOrganic": false,
    "season": "Summer",
    "origin": "India",
    "originalPrice": 306,
    "discountPercentage": 15
  },
  {
    "name": "Cucumber",
    "category": "Fresh Vegetables",
    "description": "Crisp cucumbers, ideal for salads.",
    "image": "https://img.freepik.com/free-photo/fresh-cucumbers-sliced-dark-background_1150-45035.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 170,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["everyday_essentials"],
    "isOrganic": true,
    "season": "Summer",
    "origin": "California, USA",
    "originalPrice": 226,
    "discountPercentage": 25
  },
  {
    "name": "Green Peas",
    "category": "Fresh Vegetables",
    "description": "Sweet green peas, perfect for cooking.",
    "image": "https://img.freepik.com/free-photo/peas-white-bowl-top-view-white-wall_176474-5765.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 240,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["flash_deal"],
    "isOrganic": false,
    "season": "Spring",
    "origin": "Oregon, USA",
    "originalPrice": 300,
    "discountPercentage": 20
  },
  {
    "name": "Onion",
    "category": "Fresh Vegetables",
    "description": "Red onions, great for cooking and salads.",
    "image": "https://img.freepik.com/free-photo/red-onion-whole-isolated-white_146671-19174.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 160,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": false,
    "season": "All Seasons",
    "origin": "Texas, USA",
    "originalPrice": 188,
    "discountPercentage": 15
  },
  {
    "name": "Garlic",
    "category": "Fresh Vegetables",
    "description": "Fresh garlic, essential for cooking.",
    "image": "https://img.freepik.com/free-photo/fresh-raw-garlic-ready-cook_1150-42636.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 200,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["summer_specials"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "China",
    "originalPrice": 267,
    "discountPercentage": 25
  },
  {
    "name": "Beetroot",
    "category": "Fresh Vegetables",
    "description": "Sweet beetroot, great for juicing.",
    "image": "https://img.freepik.com/free-photo/top-view-basket-full-beetroots-sackcloth-surface-maroon-background-with-copy-space_141793-5886.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 270,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["everyday_essentials"],
    "isOrganic": true,
    "season": "Fall",
    "origin": "Michigan, USA",
    "originalPrice": 338,
    "discountPercentage": 20
  },
  {
    "name": "Sweet Potato",
    "category": "Fresh Vegetables",
    "description": "Nutritious sweet potatoes, perfect for baking.",
    "image": "https://img.freepik.com/free-photo/wooden-plate-ripe-sweet-potatoes-blue-surface_114579-55203.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 230,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["flash_deal"],
    "isOrganic": false,
    "season": "Fall",
    "origin": "North Carolina, USA",
    "originalPrice": 271,
    "discountPercentage": 15
  },
  {
    "name": "Radish",
    "category": "Fresh Vegetables",
    "description": "Crisp radishes, great for salads.",
    "image": "https://img.freepik.com/free-photo/white-radish-carrot-vegetable-food_53876-23431.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 190,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": true,
    "season": "Spring",
    "origin": "California, USA",
    "originalPrice": 253,
    "discountPercentage": 25
  },
  {
    "name": "Brussels Sprouts",
    "category": "Fresh Vegetables",
    "description": "Fresh Brussels sprouts, perfect for roasting.",
    "image": "https://img.freepik.com/free-photo/brussels-sprouts-preparation-roasting-brussels-sprouts-with-bacon_2829-11265.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 340,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["summer_specials"],
    "isOrganic": false,
    "season": "Winter",
    "origin": "Belgium",
    "originalPrice": 400,
    "discountPercentage": 15
  },
  {
    "name": "Asparagus",
    "category": "Fresh Vegetables",
    "description": "Tender asparagus, great for grilling.",
    "image": "https://img.freepik.com/free-photo/top-view-asparagus-with-salad_23-2148622386.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 420,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["everyday_essentials"],
    "isOrganic": true,
    "season": "Spring",
    "origin": "Peru",
    "originalPrice": 525,
    "discountPercentage": 20
  },
  {
    "name": "Green Beans",
    "category": "Fresh Vegetables",
    "description": "Fresh green beans, perfect for stir-fries.",
    "image": "https://img.freepik.com/free-photo/fresh-raw-green-beans_181624-6071.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 280,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["flash_deal"],
    "isOrganic": false,
    "season": "Summer",
    "origin": "France",
    "originalPrice": 373,
    "discountPercentage": 25
  },
  {
    "name": "Corn",
    "category": "Fresh Vegetables",
    "description": "Sweet corn, great for grilling.",
    "image": "https://img.freepik.com/free-photo/seeds-sweet-corn-wooden-table_1150-9483.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 250,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": true,
    "season": "Summer",
    "origin": "Iowa, USA",
    "originalPrice": 294,
    "discountPercentage": 15
  },
  {
    "name": "Pumpkin",
    "category": "Fresh Vegetables",
    "description": "Fresh pumpkin, perfect for soups and pies.",
    "image": "https://img.freepik.com/free-photo/fresh-pumpkin_1339-283.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 380,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["summer_specials"],
    "isOrganic": false,
    "season": "Fall",
    "origin": "Illinois, USA",
    "originalPrice": 475,
    "discountPercentage": 20
  },
  {
    "name": "Artichoke",
    "category": "Fresh Vegetables",
    "description": "Fresh artichokes, great for steaming.",
    "image": "https://img.freepik.com/free-photo/side-view-3-artichokes-horizontal_176474-2342.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 450,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["everyday_essentials"],
    "isOrganic": true,
    "season": "Spring",
    "origin": "Italy",
    "originalPrice": 600,
    "discountPercentage": 25
  },
  {
    "name": "Leek",
    "category": "Fresh Vegetables",
    "description": "Mild-flavored leeks, perfect for soups.",
    "image": "https://img.freepik.com/free-photo/raw-green-leek-supermarket_53876-63413.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 290,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["flash_deal"],
    "isOrganic": false,
    "season": "Winter",
    "origin": "France",
    "originalPrice": 341,
    "discountPercentage": 15
  },
  {
    "name": "Celery",
    "category": "Fresh Vegetables",
    "description": "Crisp celery, great for snacking.",
    "image": "https://img.freepik.com/free-photo/close-up-texture-celery_23-2149392399.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 230,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "California, USA",
    "originalPrice": 287,
    "discountPercentage": 20
  },
  {
    "name": "Parsnip",
    "category": "Fresh Vegetables",
    "description": "Sweet parsnips, perfect for roasting.",
    "image": "https://img.freepik.com/free-photo/coriander-isolated_1203-6812.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 310,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["summer_specials"],
    "isOrganic": false,
    "season": "Winter",
    "origin": "Canada",
    "originalPrice": 413,
    "discountPercentage": 25
  },
  {
    "name": "Turnip",
    "category": "Fresh Vegetables",
    "description": "Fresh turnips, great for stews.",
    "image": "https://img.freepik.com/free-photo/close-up-harvested-turnips-soil_23-2148181206.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 270,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["everyday_essentials"],
    "isOrganic": true,
    "season": "Fall",
    "origin": "Scotland",
    "originalPrice": 318,
    "discountPercentage": 15
  },
  {
    "name": "Kale",
    "category": "Fresh Vegetables",
    "description": "Nutrient-dense kale, perfect for smoothies.",
    "image": "https://img.freepik.com/free-photo/fresh-lettuce_1339-2072.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 350,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["flash_deal"],
    "isOrganic": true,
    "season": "Winter",
    "origin": "California, USA",
    "originalPrice": 438,
    "discountPercentage": 20
  },
  {
    "name": "Cabbage",
    "category": "Fresh Vegetables",
    "description": "Fresh cabbage, ideal for salads and stir-fries.",
    "image": "https://www.allthatgrows.in/cdn/shop/products/Fennel.jpg?v=1598076636",
    "price": 220,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": false,
    "season": "Winter",
    "origin": "Germany",
    "originalPrice": 293,
    "discountPercentage": 25
  },
  {
    "name": "Red Cabbage",
    "category": "Fresh Vegetables",
    "description": "Vibrant red cabbage, great for coleslaw.",
    "image": "https://img.freepik.com/free-photo/fiber-whole-tasty-crunchy-healthy_1172-208.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 280,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["summer_specials"],
    "isOrganic": true,
    "season": "Winter",
    "origin": "Netherlands",
    "originalPrice": 329,
    "discountPercentage": 15
  },
  {
    "name": "Bitter Gourd",
    "category": "Fresh Vegetables",
    "description": "Fresh bitter gourd, great for Asian dishes.",
    "image": "https://img.freepik.com/free-photo/chopped-bitter-gourd-put-dark-floor_1150-35345.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 310,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["everyday_essentials"],
    "isOrganic": false,
    "season": "Summer",
    "origin": "India",
    "originalPrice": 387,
    "discountPercentage": 20
  },
  {
    "name": "Mushroom",
    "category": "Fresh Vegetables",
    "description": "Fresh mushrooms, perfect for soups.",
    "image": "https://img.freepik.com/free-photo/champignon-mushroom_1398-718.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 380,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["flash_deal"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "Pennsylvania, USA",
    "originalPrice": 447,
    "discountPercentage": 15
  },
  {
    "name": "Romanesco Broccoli",
    "category": "Fresh Vegetables",
    "description": "Unique fractal-shaped broccoli, mild flavor.",
    "image": "https://img.freepik.com/free-photo/side-view-broccoli-broccoli-leaves-cutting-board-wooden-background_141793-49460.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 520,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": true,
    "season": "Winter",
    "origin": "Italy",
    "originalPrice": 693,
    "discountPercentage": 25
  },
  {
    "name": "Purple Cauliflower",
    "category": "Fresh Vegetables",
    "description": "Vibrant purple cauliflower, rich in antioxidants.",
    "image": "https://img.freepik.com/free-photo/high-angle-pink-cauliflower-close-up_23-2148917751.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 490,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["summer_specials"],
    "isOrganic": true,
    "season": "Winter",
    "origin": "Australia",
    "originalPrice": 612,
    "discountPercentage": 20
  },
  {
    "name": "Fennel",
    "category": "Fresh Vegetables",
    "description": "Fresh fennel, great for salads and soups.",
    "image": "https://img.freepik.com/free-photo/fresh-organic-fennel-wooden-white-table_1212-931.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 330,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["everyday_essentials"],
    "isOrganic": false,
    "season": "Winter",
    "origin": "Italy",
    "originalPrice": 388,
    "discountPercentage": 15
  },
  {
    "name": "Daikon Radish",
    "category": "Fresh Vegetables",
    "description": "Mild-flavored daikon, great for pickling.",
    "image": "https://img.freepik.com/free-photo/toothsome-radishes-wooden-plate-marble-table_114579-74957.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 290,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["flash_deal"],
    "isOrganic": true,
    "season": "Winter",
    "origin": "Japan",
    "originalPrice": 363,
    "discountPercentage": 20
  },
  {
    "name": "Bok Choy",
    "category": "Fresh Vegetables",
    "description": "Fresh bok choy, perfect for stir-fries.",
    "image": "https://img.freepik.com/free-photo/chinese-kale-vegetable_1203-6811.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 310,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": false,
    "season": "Spring",
    "origin": "China",
    "originalPrice": 413,
    "discountPercentage": 25
  },
  {
    "name": "Spinach",
    "category": "Leafy Greens",
    "description": "Fresh spinach, ideal for salads and smoothies.",
    "image": "https://img.freepik.com/free-photo/fresh-green-baby-spinach-leaves-natural-background_169016-27889.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 220,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["flash_deal"],
    "isOrganic": true,
    "season": "Spring",
    "origin": "California, USA",
    "originalPrice": 275,
    "discountPercentage": 20
  },
  {
    "name": "Kale",
    "category": "Leafy Greens",
    "description": "Nutrient-dense kale, perfect for smoothies.",
    "image": "https://img.freepik.com/premium-photo/fresh-organic-green-kale-leaves-isolated-white-background_33736-3694.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 280,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": true,
    "season": "Winter",
    "origin": "California, USA",
    "originalPrice": 373,
    "discountPercentage": 25
  },
  {
    "name": "Arugula",
    "category": "Leafy Greens",
    "description": "Peppery arugula, great for salads.",
    "image": "https://img.freepik.com/free-photo/salad-mix-with-rucola-frisee-radicchio-lamb-s-lettuce_1339-4524.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 320,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["summer_specials"],
    "isOrganic": true,
    "season": "Spring",
    "origin": "Italy",
    "originalPrice": 376,
    "discountPercentage": 15
  },
  {
    "name": "Swiss Chard",
    "category": "Leafy Greens",
    "description": "Colorful Swiss chard, perfect for sautéing.",
    "image": "https://img.freepik.com/free-photo/chinese-broccoli-vegetables_1203-6831.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 290,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["everyday_essentials"],
    "isOrganic": false,
    "season": "Summer",
    "origin": "Switzerland",
    "originalPrice": 363,
    "discountPercentage": 20
  },
  {
    "name": "Lettuce",
    "category": "Leafy Greens",
    "description": "Crisp lettuce, ideal for salads.",
    "image": "https://img.freepik.com/free-photo/white-vegetable-healthy-fresh-natural_1203-5946.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 190,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["flash_deal"],
    "isOrganic": true,
    "season": "Spring",
    "origin": "California, USA",
    "originalPrice": 224,
    "discountPercentage": 15
  },
  {
    "name": "Collard Greens",
    "category": "Leafy Greens",
    "description": "Hearty collard greens, great for Southern dishes.",
    "image": "https://img.freepik.com/free-photo/kale-leaves-flat-lay-food-photography_53876-106101.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 250,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": false,
    "season": "Winter",
    "origin": "Georgia, USA",
    "originalPrice": 333,
    "discountPercentage": 25
  },
  {
    "name": "Mustard Greens",
    "category": "Leafy Greens",
    "description": "Spicy mustard greens, perfect for cooking.",
    "image": "https://img.freepik.com/premium-photo/mustard-greens-isolated-transparent-white-background-hyperrealistic-highly-detailed-rich-details_971975-19682.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 270,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["summer_specials"],
    "isOrganic": true,
    "season": "Winter",
    "origin": "India",
    "originalPrice": 318,
    "discountPercentage": 15
  },
  {
    "name": "Watercress",
    "category": "Leafy Greens",
    "description": "Peppery watercress, great for salads.",
    "image": "https://img.freepik.com/free-photo/tray-fresh-watercress-marble-background_114579-67007.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 310,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["everyday_essentials"],
    "isOrganic": true,
    "season": "Spring",
    "origin": "England",
    "originalPrice": 388,
    "discountPercentage": 20
  },
  {
    "name": "Pudina",
    "category": "Leafy Greens",
    "description": "Crisp romaine, perfect for Caesar salads.",
    "image": "https://img.freepik.com/free-photo/fresh-organic-mint-garden_158595-6930.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 210,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["flash_deal"],
    "isOrganic": false,
    "season": "Spring",
    "origin": "California, USA",
    "originalPrice": 280,
    "discountPercentage": 25
  },
  {
    "name": "Endive",
    "category": "Leafy Greens",
    "description": "Bitter endive, great for salads.",
    "image": "https://img.freepik.com/free-photo/fresh-lettuce_1339-2072.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 350,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": true,
    "season": "Winter",
    "origin": "Belgium",
    "originalPrice": 412,
    "discountPercentage": 15
  },
  {
    "name": "Dandelion Greens",
    "category": "Leafy Greens",
    "description": "Bitter d delineation greens, great for detox salads.",
    "image": "https://img.freepik.com/free-photo/selective-focus-shot-beautiful-yellow-flowers-grass-covered-field_181624-19161.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 290,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["summer_specials"],
    "isOrganic": true,
    "season": "Spring",
    "origin": "California, USA",
    "originalPrice": 363,
    "discountPercentage": 20
  },
  {
    "name": "Beet Greens",
    "category": "Leafy Greens",
    "description": "Nutritious beet greens, perfect for sautéing.",
    "image": "https://img.freepik.com/premium-photo/fresh-rhubarb-isolated-white_436608-1051.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 230,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["everyday_essentials"],
    "isOrganic": true,
    "season": "Summer",
    "origin": "Michigan, USA",
    "originalPrice": 271,
    "discountPercentage": 15
  },
  {
    "name": "Turnip Greens",
    "category": "Leafy Greens",
    "description": "Hearty turnip greens, great for cooking.",
    "image": "https://img.freepik.com/free-photo/chinese-kale-vegetable_1203-6811.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 260,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["flash_deal"],
    "isOrganic": false,
    "season": "Fall",
    "origin": "Scotland",
    "originalPrice": 347,
    "discountPercentage": 25
  },
  {
    "name": "Mizuna",
    "category": "Leafy Greens",
    "description": "Mildly peppery mizuna, ideal for salads.",
    "image": "https://img.freepik.com/premium-photo/mizuna-le batch-isolated-japanese-mustard-vegetable-salad-good-health-white-background_55883-503.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 330,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": true,
    "season": "Spring",
    "origin": "Japan",
    "originalPrice": 388,
    "discountPercentage": 15
  },
  {
    "name": "Chicory",
    "category": "Leafy Greens",
    "description": "Bitter chicory leaves, great for salads.",
    "image": "https://img.freepik.com/free-photo/closeup-common-chicory-garden_181624-12212.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 370,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["summer_specials"],
    "isOrganic": false,
    "season": "Winter",
    "origin": "Italy",
    "originalPrice": 463,
    "discountPercentage": 20
  },
  {
    "name": "Radicchio",
    "category": "Leafy Greens",
    "description": "Vibrant radicchio, perfect for grilled salads.",
    "image": "https://img.freepik.com/free-photo/fresh-green-salad-healthy-organic-vegetarian-meal-generated-by-artificial-intelligence_188544-127692.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 390,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["everyday_essentials"],
    "isOrganic": true,
    "season": "Winter",
    "origin": "Italy",
    "originalPrice": 520,
    "discountPercentage": 25
  },
  {
    "name": "Tatsoi",
    "category": "Leafy Greens",
    "description": "Mild tatsoi, great for stir-fries.",
    "image": "https://img.freepik.com/free-photo/chinese-broccoli-vegetables_1203-6831.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 310,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["flash_deal"],
    "isOrganic": true,
    "season": "Winter",
    "origin": "China",
    "originalPrice": 365,
    "discountPercentage": 15
  },
  {
    "name": "Sorrel",
    "category": "Leafy Greens",
    "description": "Tangy sorrel leaves, perfect for soups.",
    "image": "https://img.freepik.com/free-photo/water-convolvulus_1339-570.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 340,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": false,
    "season": "Spring",
    "origin": "France",
    "originalPrice": 425,
    "discountPercentage": 20
  },
  {
    "name": "Curry Leaves",
    "category": "Leafy Greens",
    "description": "Add me for Better Taste.",
    "image": "https://img.freepik.com/premium-photo/fresh-curry-leaves-wood_100801-408.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 280,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["summer_specials"],
    "isOrganic": true,
    "season": "Winter",
    "origin": "Germany",
    "originalPrice": 329,
    "discountPercentage": 15
  },
  {
    "name": "Cress",
    "category": "Leafy Greens",
    "description": "Spicy cress, great for garnishing.",
    "image": "https://img.freepik.com/free-photo/plant-gourmet-nature-vegetarian-seedling_1203-5533.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 260,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["everyday_essentials"],
    "isOrganic": true,
    "season": "Spring",
    "origin": "England",
    "originalPrice": 347,
    "discountPercentage": 25
  },
  {
    "name": "Turmeric",
    "category": "Spices",
    "description": "Fresh turmeric root, great for curries.",
    "image": "https://img.freepik.com/free-photo/turmeric-powder_1323-401.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 250,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["flash_deal"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "India",
    "originalPrice": 313,
    "discountPercentage": 20
  },
  {
    "name": "Ginger",
    "category": "Spices",
    "description": "Fresh ginger, perfect for teas and cooking.",
    "image": "https://img.freepik.com/free-photo/assortment-ginger-wooden-board_23-2148799547.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 180,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": false,
    "season": "All Seasons",
    "origin": "China",
    "originalPrice": 240,
    "discountPercentage": 25
  },
  {
    "name": "Garlic",
    "category": "Spices",
    "description": "Fresh garlic bulbs, essential for cooking.",
    "image": "https://img.freepik.com/free-photo/fresh-raw-garlic-ready-cook_1150-42636.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 320,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["summer_specials"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "Spain",
    "originalPrice": 376,
    "discountPercentage": 15
  },
  {
    "name": "Chili Pepper",
    "category": "Spices",
    "description": "Fresh chili peppers, perfect for adding heat.",
    "image": "https://img.freepik.com/free-photo/red-hot-pepper-levitates-white-background_485709-27.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 450,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["everyday_essentials"],
    "isOrganic": false,
    "season": "Summer",
    "origin": "Mexico",
    "originalPrice": 600,
    "discountPercentage": 25
  },
  {
    "name": "Coriander",
    "category": "Spices",
    "description": "Fresh coriander leaves, great for garnishing.",
    "image": "https://img.freepik.com/free-photo/coriander-isolated_1203-6812.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 150,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["everyday_essentials"],
    "isOrganic": true,
    "season": "Spring",
    "origin": "India",
    "originalPrice": 176,
    "discountPercentage": 15
  },
  {
    "name": "Almonds",
    "category": "Dry Fruits",
    "description": "Whole almonds, perfect for snacking.",
    "image": "https://img.freepik.com/free-photo/organic-almonds-background_158595-6289.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 450,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["flash_deal"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "California, USA",
    "originalPrice": 563,
    "discountPercentage": 20
  },
  {
    "name": "Cashews",
    "category": "Dry Fruits",
    "description": "Whole cashews, great for cooking.",
    "image": "https://img.freepik.com/free-photo/cashew-nuts_1339-244.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 500,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": false,
    "season": "All Seasons",
    "origin": "India",
    "originalPrice": 667,
    "discountPercentage": 25
  },
  {
    "name": "Walnuts",
    "category": "Dry Fruits",
    "description": "Whole walnuts, rich in omega-3s.",
    "image": "https://img.freepik.com/free-photo/walnuts-bowl_1127-119.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 400,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["summer_specials"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "California, USA",
    "originalPrice": 471,
    "discountPercentage": 15
  },
  {
    "name": "Raisins",
    "category": "Dry Fruits",
    "description": "Sweet raisins, perfect for baking.",
    "image": "https://img.freepik.com/free-photo/golden-raisins_2829-9427.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 250,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["everyday_essentials"],
    "isOrganic": false,
    "season": "All Seasons",
    "origin": "Turkey",
    "originalPrice": 313,
    "discountPercentage": 20
  },
  {
    "name": "Pistachios",
    "category": "Dry Fruits",
    "description": "Whole pistachios, great for snacking.",
    "image": "https://img.freepik.com/free-photo/pile-pistachios_1308-41523.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 550,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["flash_deal"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "Iran",
    "originalPrice": 733,
    "discountPercentage": 25
  },
  {
    "name": "Pumpkin Seeds",
    "category": "Dry Fruits",
    "description": "Roasted pumpkin seeds, perfect for snacking.",
    "image": "https://img.freepik.com/free-photo/organic-pumpkin-seeds-background_158595-6290.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 300,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "China",
    "originalPrice": 353,
    "discountPercentage": 15
  },
  {
    "name": "Chia Seeds",
    "category": "Dry Fruits",
    "description": "Nutritious chia seeds, great for smoothies.",
    "image": "https://img.freepik.com/free-photo/black-sesame_1368-9412.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 280,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["summer_specials"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "Mexico",
    "originalPrice": 350,
    "discountPercentage": 20
  },
  {
    "name": "Sunflower Seeds",
    "category": "Dry Fruits",
    "description": "Roasted sunflower seeds, ideal for snacking.",
    "image": "https://img.freepik.com/free-photo/sunflower-seed_1368-9161.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 220,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["everyday_essentials"],
    "isOrganic": false,
    "season": "All Seasons",
    "origin": "USA",
    "originalPrice": 244,
    "discountPercentage": 10
  },
  {
    "name": "Flax Seeds",
    "category": "Dry Fruits",
    "description": "Nutritious flax seeds, perfect for baking.",
    "image": "https://img.freepik.com/free-photo/brown-flax_1368-8880.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 200,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["flash_deal"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "Canada",
    "originalPrice": 267,
    "discountPercentage": 25
  },
  {
    "name": "Dried Apricots",
    "category": "Dry Fruits",
    "description": "Sweet dried apricots, great for snacking.",
    "image": "https://img.freepik.com/free-photo/rambutan-dried_1368-9191.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 350,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["summer_specials"],
    "isOrganic": false,
    "season": "All Seasons",
    "origin": "Turkey",
    "originalPrice": 412,
    "discountPercentage": 15
  },
  {
    "name": "Basmati Rice",
    "category": "Grains",
    "description": "Aromatic basmati rice, perfect for biryani.",
    "image": "https://img.freepik.com/free-photo/top-view-raw-rice-inside-brown-plate-grey-surface_140725-90609.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 450,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["flash_deal"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "India",
    "originalPrice": 563,
    "discountPercentage": 20
  },
  {
    "name": "Brown Rice",
    "category": "Grains",
    "description": "Nutritious brown rice, great for healthy meals.",
    "image": "https://img.freepik.com/free-photo/yellow-rice-seeds-wooden-cup-concrete_114579-24768.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 380,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "Thailand",
    "originalPrice": 507,
    "discountPercentage": 25
  },
  {
    "name": "Quinoa",
    "category": "Grains",
    "description": "Protein-rich quinoa, perfect for salads.",
    "image": "https://img.freepik.com/free-photo/top-view-quinoa-with-wooden-spoon_140725-9086.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 520,
    "quantity": {
      "value": "500",
      "unit": "g"
    },
    "status": "Available",
    "specialTag": ["summer_specials"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "Peru",
    "originalPrice": 612,
    "discountPercentage": 15
  },
  {
    "name": "Red Lentils",
    "category": "Grains",
    "description": "Red lentils, ideal for soups and dals.",
    "image": "https://img.freepik.com/free-photo/top-view-rich-vitamins-lentils-bowl-with-lentils-isolated-white-wall-with-copy-space_141793-75992.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 280,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["everyday_essentials"],
    "isOrganic": false,
    "season": "All Seasons",
    "origin": "India",
    "originalPrice": 350,
    "discountPercentage": 20
  },
  {
    "name": "Chickpeas",
    "category": "Grains",
    "description": "Whole chickpeas, great for hummus.",
    "image": "https://img.freepik.com/free-photo/chickpea_1368-6565.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 320,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Available",
    "specialTag": ["flash_deal"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "Turkey",
    "originalPrice": 376,
    "discountPercentage": 15
  },
  {
    "name": "Black Beans",
    "category": "Grains",
    "description": "Black beans, perfect for Mexican dishes.",
    "image": "https://img.freepik.com/free-photo/black-bean-small-wooden-plate-place-sack-fabric_1150-35414.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 290,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": false,
    "season": "All Seasons",
    "origin": "Brazil",
    "originalPrice": 387,
    "discountPercentage": 25
  },
  {
    "name": "Whole Wheat Flour",
    "category": "Grains",
    "description": "Whole wheat flour, ideal for baking bread.",
    "image": "https://img.freepik.com/free-photo/flour-wheat-flat-lay-wooden_176474-7337.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 250,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["summer_specials"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "USA",
    "originalPrice": 294,
    "discountPercentage": 15
  },
  {
    "name": "Oats",
    "category": "Grains",
    "description": "Rolled oats, perfect for breakfast.",
    "image": "https://img.freepik.com/free-photo/rolled-oats-healthy-breakfast-cereal-oat-flakes-bowl-isolated-white-background_123827-35208.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 350,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["everyday_essentials"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "Canada",
    "originalPrice": 438,
    "discountPercentage": 20
  },
  {
    "name": "Millet",
    "category": "Grains",
    "description": "Nutritious millet, great for porridges.",
    "image": "https://img.freepik.com/free-photo/delicious-couscous-bowl_1127-221.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 310,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["flash_deal"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "India",
    "originalPrice": 365,
    "discountPercentage": 15
  },
  {
    "name": "Barley",
    "category": "Grains",
    "description": "Whole barley, ideal for soups.",
    "image": "https://img.freepik.com/free-photo/cereal-grains-wooden-table-close-up-rye-ear-wheat_1268-27812.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 270,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Sold Out",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": false,
    "season": "All Seasons",
    "origin": "Germany",
    "originalPrice": 338,
    "discountPercentage": 20
  },
  {
    "name": "Green Moong Dal",
    "category": "Grains",
    "description": "Whole green moong dal, perfect for sprouts.",
    "image": "https://img.freepik.com/free-photo/mung-beans-isolated-white-background_93675-132357.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 340,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["summer_specials"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "India",
    "originalPrice": 453,
    "discountPercentage": 25
  },
  {
    "name": "Jasmine Rice",
    "category": "Grains",
    "description": "Fragrant jasmine rice, great for Asian dishes.",
    "image": "https://img.freepik.com/free-photo/small-white-plate-with-unprepared-vermicelli-marble-background_114579-20104.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 420,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["everyday_essentials"],
    "isOrganic": false,
    "season": "All Seasons",
    "origin": "Thailand",
    "originalPrice": 494,
    "discountPercentage": 15
  },
  {
    "name": "Buckwheat",
    "category": "Grains",
    "description": "Gluten-free buckwheat, ideal for pancakes.",
    "image": "https://img.freepik.com/free-photo/buckwheat_1368-9436.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 480,
    "quantity": {
      "value": "500",
      "unit": "g"
    },
    "status": "Coming Soon",
    "specialTag": ["flash_deal"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "Russia",
    "originalPrice": 600,
    "discountPercentage": 20
  },
  {
    "name": "Kidney Beans",
    "category": "Grains",
    "description": "Red kidney beans, perfect for chili.",
    "image": "https://img.freepik.com/free-photo/red-kidney-beans-background_1150-35285.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 330,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": false,
    "season": "All Seasons",
    "origin": "USA",
    "originalPrice": 388,
    "discountPercentage": 15
  },
  {
    "name": "Cornmeal",
    "category": "Grains",
    "description": "Fine cornmeal, great for polenta.",
    "image": "https://img.freepik.com/free-photo/corn-flour-white-background_1268-30051.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 260,
    "quantity": {
      "value": "1",
      "unit": "kg"
    },
    "status": "Coming Soon",
    "specialTag": ["summer_specials"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "USA",
    "originalPrice": 347,
    "discountPercentage": 25
  },
 {
    "name": "Extra Virgin Olive Oil",
    "category": "Oils & Sauces",
    "description": "Cold-pressed olive oil, perfect for salads.",
    "image": "https://img.freepik.com/free-photo/tasty-looking-olives-extra-virgin-olive-oil-olive-leafs-dark-wooden-background_181624-43771.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 450,
    "quantity": {
      "value": "1",
      "unit": "L"
    },
    "status": "Available",
    "specialTag": ["flash_deal"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "Italy",
    "originalPrice": 563,
    "discountPercentage": 20
  },
  {
    "name": "Coconut Oil",
    "category": "Oils & Sauces",
    "description": "Organic coconut oil, great for cooking.",
    "image": "https://img.freepik.com/free-photo/jug-coconut-oil-whit-coconut-put-dark-background_1150-28252.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 300,
    "quantity": {
      "value": "500",
      "unit": "ml"
    },
    "status": "Available",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "Philippines",
    "originalPrice": 400,
    "discountPercentage": 25
  },
  {
    "name": "Sunflower Oil",
    "category": "Oils & Sauces",
    "description": "Light sunflower oil, ideal for frying.",
    "image": "https://img.freepik.com/free-photo/png-oil-jars-bottles-seeds-sunflowers-isolated-white-background_185193-164227.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 250,
    "quantity": {
      "value": "1",
      "unit": "L"
    },
    "status": "Available",
    "specialTag": ["summer_specials"],
    "isOrganic": false,
    "season": "All Seasons",
    "origin": "Ukraine",
    "originalPrice": 294,
    "discountPercentage": 15
  },
  {
    "name": "Mustard Oil",
    "category": "Oils & Sauces",
    "description": "Pungent mustard oil, perfect for Indian cooking.",
    "image": "https://img.freepik.com/free-photo/soybean-oil-soybean-food-beverage-products-food-nutrition-concept_1150-26351.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 200,
    "quantity": {
      "value": "500",
      "unit": "ml"
    },
    "status": "Available",
    "specialTag": ["everyday_essentials"],
    "isOrganic": false,
    "season": "All Seasons",
    "origin": "India",
    "originalPrice": 250,
    "discountPercentage": 20
  },
  {
    "name": "Sesame Oil",
    "category": "Oils & Sauces",
    "description": "Toasted sesame oil, great for Asian dishes.",
    "image": "https://img.freepik.com/free-photo/sesame-oil-sesame-seeds-dark-background_1150-45340.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 350,
    "quantity": {
      "value": "250",
      "unit": "ml"
    },
    "status": "Sold Out",
    "specialTag": ["flash_deal"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "Japan",
    "originalPrice": 412,
    "discountPercentage": 15
  },
  {
    "name": "Mango Pickle",
    "category": "Oils & Sauces",
    "description": "Spicy mango pickle, perfect for Indian meals.",
    "image": "https://img.freepik.com/free-photo/fresh-green-mango-with-sweet-fish-sauce-dipping-dark-surface_1150-42013.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 180,
    "quantity": {
      "value": "1",
      "unit": "unit"
    },
    "status": "Sold Out",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": false,
    "season": "All Seasons",
    "origin": "India",
    "originalPrice": 240,
    "discountPercentage": 25
  },
  {
    "name": "Pickle Combo",
    "category": "Oils & Sauces",
    "description": "Tangy pickles, great with rice.",
    "image": "https://img.freepik.com/free-photo/fresh-vegetable-salad-with-organic-ingredients-healthy-delicious-generated-by-artificial-intelligence_188544-127635.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 170,
    "quantity": {
      "value": "1",
      "unit": "unit"
    },
    "status": "Sold Out",
    "specialTag": ["summer_specials"],
    "isOrganic": false,
    "season": "All Seasons",
    "origin": "India",
    "originalPrice": 200,
    "discountPercentage": 15
  },
  {
    "name": "Soy Sauce",
    "category": "Oils & Sauces",
    "description": "Rich soy sauce, ideal for stir-fries.",
    "image": "https://img.freepik.com/free-photo/soybean-sauce-soybean-wooden-floor-soy-sauce-food-nutrition-concept_1150-26326.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 220,
    "quantity": {
      "value": "500",
      "unit": "ml"
    },
    "status": "Coming Soon",
    "specialTag": ["everyday_essentials"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "China",
    "originalPrice": 275,
    "discountPercentage": 20
  },
  {
    "name": "Hot Chili Sauce",
    "category": "Oils & Sauces",
    "description": "Spicy chili sauce, perfect for dipping.",
    "image": "https://img.freepik.com/free-photo/condiment-flavor-based-chili-pepper_23-2151011122.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 190,
    "quantity": {
      "value": "250",
      "unit": "ml"
    },
    "status": "Coming Soon",
    "specialTag": ["flash_deal"],
    "isOrganic": false,
    "season": "All Seasons",
    "origin": "Thailand",
    "originalPrice": 211,
    "discountPercentage": 10
  },
  {
    "name": "Vinegar",
    "category": "Oils & Sauces",
    "description": "White vinegar, great for pickling.",
    "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhUIBwgVFhUWGBoZGBgXGCIbIBgbIx8aHhgXGBkkHyghHhsxHyMjKTEiJSsrLjEuISE4RDMvNygtLisBCgoKDg0OGxAQGjclHyMzNTcyNzE1NjUrNTcwLTc3Ly4rLzA3NDItLS0yLTctLy0tLjArMC81Ly01Ny01LSstLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAwEBAQEBAAAAAAAAAAAABQYHBAMCAQj/xAA/EAACAgEDAQYCBwQHCQAAAAAAAQIDEQQFIRIGIjFBUWETgQcycZGhscEjQmLRFBUWNVKi0zNEY4OSssPh8f/EABgBAQADAQAAAAAAAAAAAAAAAAABAgQD/8QAKREBAQABAgQFAwUAAAAAAAAAAAECAxEEEiExUWGhsdETkeEyQlJxgf/aAAwDAQACEQMRAD8A3EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4paiz+kOCawvA7Sv6id+j1s+K8OWU5TUeHz4ASV2otjHMZfgdlcuutS9UmV23W33roiqX7RtWSf0tbp00apP6sUvuWAPUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfF91dFLuuliMVlv2K/HcJXahzaw3zj/AAryT98eI3bXPVar4Nb/AGcHz/FP+Sf45fkiPobeZ+vIElqtX3O8+CV2zWrWU4k+9HiS/KS/hfivmvJlbszKOGfml1N2mcb6vGPDj5Sj5x/k/LjyzkLiDzouhqKVdVLKayj0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGdoNdLRbf+yeJzahH2by3L5RTfyRJlU7V2Oe5wq8oQb+cnj8ov7wOWmGNPhLx/wDi/U66quDyqcXFQj7fln8ySqr48AOWdXBy/D77j6/rx/L7iWlDqjlI4NQuh5afgwPbszrHDVS0Nng05R9msda/FP8A6iyFIjZ8HeIXV+Vkfuk+mXyxJv5F3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAABX9xshVvU7LZJJVQbb4SWZ5bLAUntLqbn2oW3Qr7tsIKbePqt2Jxj74558k/Mi77dEyb1119oZXPp23Ryml+/PMY48mlhycfdpL3PxdobJ7h/Vstz00L+f2XVBy4Tk+78SUuEm+V5FJ3vT7huOmq22rURUdTXdpbFNOUVbBu2E4wUko2OUbEp/wAMcp4RK9m6t9W+T3G3a9Soauuic4pVwhC10xhd8VTatzFxTSj45fByxx5pzW3r/nstldrtIslO+X2KLp3KifXW7YpdPerXjYszj3Pc+7N91NMVLWaFuLxiVTznPhhPHV69xyM73HsX2lltdUqNNKFlWho0uFKMk+v49epWIyeelTjLPtxnBK0z0ut7SXayuD0q00XF1YlG3UpJVK2+L7joSx0rlvCeVjBN09usys9fdEvks+4a2jW6KOo0lqlHrjyvJ9SymvFP2Zbii10Sp2Gr4kcSnKNkvtnPqa+WcfIvRfC24y1GUktkAAWQAAAAAAAAAAAAAAAAAAAAAAAAAAAUDftNTrvpAemuX+71NPlNYlf4NNeiL+Z7v1sNN9JkbZywnpq0/bFlnP3NlNTbbar4S9dvBNU2aXs9XDTVQcnY54WeW0nLHPLy+PPls6dZuulhp67rtK38aEmsvGFFdUVJ+XVwvtaRWr+2ehjdKnW7bGXhjzTx1cuTj4eOOOMyOn+1e3z03RbtMemGMQai8dObI9K8OHHK9H0/LPOL0e0vpTLTzl6rBTumz/ExXLH1cSalhtzlDGX5qSxz6x9T41Ou0O7x/oVbclNPPdcemPr3lzykse/PoVye/wCyQSUthq5ykvhx5xhvwz9v/tHk+2O2rUKel2iMbJPmWFlx/exLCectC8Xo4zrfSk08rejl7T6eOySpjpLJNytrjzKTwnLHCcmvD9DUDLe0+qp3HcNLOSTw4NpN4U8xeM8Zx1GpHXSyx3yxxnb4M5eloADsoAAAAAAAAAAAAAAAAAAAAAAAAAAAZH9JsHb2wlp8f7TRSgvdtXpL78GuGSfSJe6/pFpcl3VVVn2zO1HLW/Tu0cNObKzyvspmn01+h66VuXWq6lbFulSzU5011uGZ4SfXnHlh+qLZoqN3jqo0W7mmpufRONcOmcYxcupPCaeVhxfKaefA49u+jPfoQ+JVu8e9XCD6q0+4ulxhzJ91OMePZE3oewvaHSvrju9fEpPw4UpcTaWWk2uODHqcPjvvMGDP6t7b/f8AKN3K3dqaU46+T6lY4pVRn9T6zlhPC6srKyuG+FyQf9X71r9XVpp6tQd1PxYTjXiS76i6/GOJeGfZr1LnqewnaKyvoW514w19VcJx6ZJeiceGljKIy36PO1CTUd7jHLm+7XHOZtOxp5TTbS8MeC9Culw0/dgjT+rO9v3/ACrXZ2qyGn0tdMlJdUpSaz3s3uKkuM4xHzP6GMJ6LdLvcKb7XKSdEHJLClLqjKcnjhd6Wce5uxq4fvl/bVcrtMfAABpVAAAAAAAAAAAAAAAAAAAAAAAAAAAMa+lmco9sVCGcumh8e1lrRspSO0G06e7tpHdL78OFUIxWM8qVjz9vJTUx5ps0cNq46WfNfBYthtVm3wm/8KX3cFA3bauvSa+inYpTq1Ntarb0jXwpv4kbrlSo5l0Q5VuMzlLxaw1Ydv2/U0VKqneo9MVhLpmuPlaln5ErXpNZj+84/wCf/UKzPLbrjfT5cbjPEW56zT0yro2uxxhGHw3LqzNYhnqxFtSWcNNZ4fo8d1WrlboHfqKehpy7rznCbSbyl4pZ+fn4nHLSazH95R/z/wCocOr0mrlFqW7xx6dNj/8AKTz3+N9Pk5fNmE7rP7S9T5TvX/fGP6I3kyvU9nKqroW061SlGUXLutZxJSk/H7TVCmhhljOqL3oADugAAAAAAAAAAAAAAAAAAAAAAAAAAAq3aitx3BWesFj5OWfzRaSN37QWa3Sp0JOcXlJ8ZX70c+Xr9qQFf0ciWps4IWWg3qh4q21S/wCYl+jOaWo7SqXTDaorHHKnL8UlkCzTs4I7VzyiK/pPahfX22L+yFi/me1dW/aiPVZtCSf/ABP0cU0B+UQdurjBLxlFfe0n+BeivbFtWpp1nx9bUo9K7qynmT4zx5Jfn7FhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z",
    "price": 150,
    "quantity": {
      "value": "250",
      "unit": "ml"
    },
    "status": "Coming Soon",
    "specialTag": ["summer_specials"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "USA",
    "originalPrice": 200,
    "discountPercentage": 25
  },
  {
    "name": "Sourdough Bread",
    "category": "Breads & Cheeses",
    "description": "Artisanal sourdough, perfect for sandwiches.",
    "image": "https://img.freepik.com/free-photo/high-angle-sliced-bread-with-kitchen-towel_23-2148695537.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 350,
    "quantity": {
      "value": "1",
      "unit": "unit"
    },
    "status": "Available",
    "specialTag": ["flash_deal"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "USA",
    "originalPrice": 438,
    "discountPercentage": 20
  },
  {
    "name": "Whole Wheat Bread",
    "category": "Breads & Cheeses",
    "description": "Healthy whole wheat bread, great for toasting.",
    "image": "https://img.freepik.com/free-photo/top-view-black-bread-slices-flour-oatmeal-light-ice-blue-pattern-background-with-free-space_179666-47495.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 250,
    "quantity": {
      "value": "1",
      "unit": "unit"
    },
    "status": "Available",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "USA",
    "originalPrice": 333,
    "discountPercentage": 25
  },
  {
    "name": "Ciabatta",
    "category": "Breads & Cheeses",
    "description": "Rustic ciabatta, ideal for paninis.",
    "image": "https://img.freepik.com/free-photo/rustic-baguette-wooden-table-freshly-baked-generated-by-ai_188544-10724.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 300,
    "quantity": {
      "value": "1",
      "unit": "unit"
    },
    "status": "Available",
    "specialTag": ["summer_specials"],
    "isOrganic": false,
    "season": "All Seasons",
    "origin": "Italy",
    "originalPrice": 353,
    "discountPercentage": 15
  },
  {
    "name": "Naan Bread",
    "category": "Breads & Cheeses",
    "description": "Soft naan bread, perfect with curries.",
    "image": "https://img.freepik.com/free-photo/top-view-pakistani-meal-arrangement_23-2148825100.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 200,
    "quantity": {
      "value": "1",
      "unit": "unit"
    },
    "status": "Available",
    "specialTag": ["everyday_essentials"],
    "isOrganic": false,
    "season": "All Seasons",
    "origin": "India",
    "originalPrice": 250,
    "discountPercentage": 20
  },
  {
    "name": "Pita Bread",
    "category": "Breads & Cheeses",
    "description": "Fresh pita bread, great for wraps.",
    "image": "https://img.freepik.com/free-photo/delicious-pita-bread-arrangement_23-2148814481.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 180,
    "quantity": {
      "value": "1",
      "unit": "unit"
    },
    "status": "Available",
    "specialTag": ["flash_deal"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "Greece",
    "originalPrice": 200,
    "discountPercentage": 10
  },
  {
    "name": "Baguette",
    "category": "Breads & Cheeses",
    "description": "Crisp baguette, ideal for sandwiches.",
    "image": "https://img.freepik.com/free-photo/delicious-baguette-with-seasoning-board_23-2147761383.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 270,
    "quantity": {
      "value": "1",
      "unit": "unit"
    },
    "status": "Sold Out",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": false,
    "season": "All Seasons",
    "origin": "France",
    "originalPrice": 338,
    "discountPercentage": 20
  },
  {
    "name": "Rye Bread",
    "category": "Breads & Cheeses",
    "description": "Dense rye bread, perfect for deli sandwiches.",
    "image": "https://img.freepik.com/free-photo/slices-whole-grain-brown-bread-with-sunflower-seed-chopping-board_23-2147906733.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 320,
    "quantity": {
      "value": "1",
      "unit": "unit"
    },
    "status": "Sold Out",
    "specialTag": ["summer_specials"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "Germany",
    "originalPrice": 376,
    "discountPercentage": 15
  },
  {
    "name": "Cheddar Cheese",
    "category": "Breads & Cheeses",
    "description": "Sharp cheddar cheese, great for melting.",
    "image": "https://img.freepik.com/free-vector/cheese-slices-3d-realistic-vector-illustration_107791-12115.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 400,
    "quantity": {
      "value": "500",
      "unit": "gms"
    },
    "status": "Sold Out",
    "specialTag": ["everyday_essentials"],
    "isOrganic": false,
    "season": "All Seasons",
    "origin": "England",
    "originalPrice": 533,
    "discountPercentage": 25
  },
  {
    "name": "Mozzarella Cheese",
    "category": "Breads & Cheeses",
    "description": "Fresh mozzarella, perfect for pizzas.",
    "image": "https://img.freepik.com/free-photo/isometric-cheese-composition_23-2148161915.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 350,
    "quantity": {
      "value": "500",
      "unit": "gms"
    },
    "status": "Sold Out",
    "specialTag": ["flash_deal"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "Italy",
    "originalPrice": 412,
    "discountPercentage": 15
  },
  {
    "name": "Parmesan Cheese",
    "category": "Breads & Cheeses",
    "description": "Aged parmesan, ideal for grating.",
    "image": "https://img.freepik.com/free-photo/grated-triangular-chunk-cheese-wooden-table_23-2148166461.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 500,
    "quantity": {
      "value": "250",
      "unit": "gms"
    },
    "status": "Sold Out",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": false,
    "season": "All Seasons",
    "origin": "Italy",
    "originalPrice": 625,
    "discountPercentage": 20
  },
  {
    "name": "Brie Cheese",
    "category": "Breads & Cheeses",
    "description": "Creamy brie cheese, perfect for pairing with fruits.",
    "image": "https://img.freepik.com/free-photo/high-angle-camembert-grapes-wooden-cutting-board_23-2148376003.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 450,
    "quantity": {
      "value": "250",
      "unit": "gms"
    },
    "status": "Coming Soon",
    "specialTag": ["summer_specials"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "France",
    "originalPrice": 600,
    "discountPercentage": 25
  },
  {
    "name": "Feta Cheese",
    "category": "Breads & Cheeses",
    "description": "Tangy feta cheese, great for salads.",
    "image": "https://img.freepik.com/free-photo/pngcubes-tofu-bowl-with-leaves-isolated-white-background_185193-163134.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 380,
    "quantity": {
      "value": "250",
      "unit": "gms"
    },
    "status": "Coming Soon",
    "specialTag": ["everyday_essentials"],
    "isOrganic": false,
    "season": "All Seasons",
    "origin": "Greece",
    "originalPrice": 447,
    "discountPercentage": 15
  },
  {
    "name": "Multigrain Bread",
    "category": "Breads & Cheeses",
    "description": "Nutty multigrain bread, perfect for breakfast.",
    "image": "https://img.freepik.com/free-photo/homemade-crispbread-cookies-with-sesame-oatmeal-pumpkin-sunflower-seeds-healthy-snack-seed-crackers_114579-10286.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 160,
    "quantity": {
      "value": "1",
      "unit": "unit"
    },
    "status": "Coming Soon",
    "specialTag": ["flash_deal"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "USA",
    "originalPrice": 200,
    "discountPercentage": 20
  },
  {
    "name": "Gouda Cheese",
    "category": "Breads & Cheeses",
    "description": "Mild gouda cheese, great for sandwiches.",
    "image": "https://img.freepik.com/free-photo/yellow-cheese-knife-laying-white-cloth_74855-6118.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 420,
    "quantity": {
      "value": "500",
      "unit": "gms"
    },
    "status": "Coming Soon",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": false,
    "season": "All Seasons",
    "origin": "Netherlands",
    "originalPrice": 467,
    "discountPercentage": 10
  },
  {
    "name": "Focaccia Bread",
    "category": "Breads & Cheeses",
    "description": "Herb-infused focaccia, ideal for dipping.",
    "image": "https://img.freepik.com/free-photo/pizza-slices-wooden-board-marble-background_114579-51064.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 310,
    "quantity": {
      "value": "1",
      "unit": "unit"
    },
    "status": "Coming Soon",
    "specialTag": ["summer_specials"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "Italy",
    "originalPrice": 413,
    "discountPercentage": 25
  },
  {
    "name": "Whole Milk",
    "category": "Dairy Products",
    "description": "Fresh whole milk, perfect for drinking.",
    "image": "https://img.freepik.com/free-vector/milk-advertising-realistic-poster_1284-26187.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 200,
    "quantity": {
      "value": "1",
      "unit": "L"
    },
    "status": "Available",
    "specialTag": ["flash_deal"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "USA",
    "originalPrice": 250,
    "discountPercentage": 20
  },
  {
    "name": "Greek Yogurt",
    "category": "Dairy Products",
    "description": "Thick Greek yogurt, great for smoothies.",
    "image": "https://img.freepik.com/free-vector/container-surrounded-by-flowing-yogurt-from-natural-milk_1268-15510.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 220,
    "quantity": {
      "value": "500",
      "unit": "gms"
    },
    "status": "Available",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "Greece",
    "originalPrice": 293,
    "discountPercentage": 25
  },
  {
    "name": "Butter",
    "category": "Dairy Products",
    "description": "Creamy butter, perfect for baking.",
    "image": "https://img.freepik.com/free-vector/realistic-yellow-stick-butter-cutting-board-with-metal-knife_1441-2016.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 135,
    "quantity": {
      "value": "250",
      "unit": "gms"
    },
    "status": "Available",
    "specialTag": ["summer_specials"],
    "isOrganic": false,
    "season": "All Seasons",
    "origin": "USA",
    "originalPrice": 159,
    "discountPercentage": 15
  },
  {
    "name": "Cottage Cheese",
    "category": "Dairy Products",
    "description": "Fresh cottage cheese, great for salads.",
    "image": "https://img.freepik.com/free-photo/high-angle-tasty-food-arrangement_23-2150062676.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 680,
    "quantity": {
      "value": "500",
      "unit": "gms"
    },
    "status": "Available",
    "specialTag": ["everyday_essentials"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "USA",
    "originalPrice": 850,
    "discountPercentage": 20
  },
  {
    "name": "Heavy Cream",
    "category": "Dairy Products",
    "description": "Rich heavy cream, ideal for desserts.",
    "image": "https://img.freepik.com/free-photo/avocado-avocado-yogurt-products-made-from-avocado-food-nutrition-concept_1150-26287.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 550,
    "quantity": {
      "value": "500",
      "unit": "gms"
    },
    "status": "Sold Out",
    "specialTag": ["flash_deal"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "USA",
    "originalPrice": 733,
    "discountPercentage": 25
  },
  {
    "name": "Sour Cream",
    "category": "Dairy Products",
    "description": "Tangy sour cream, perfect for dips.",
    "image": "https://img.freepik.com/free-photo/food-flavor-based-sour-cream_23-2151011163.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 750,
    "quantity": {
      "value": "250",
      "unit": "gms"
    },
    "status": "Sold Out",
    "specialTag": ["deal_of_the_day"],
    "isOrganic": false,
    "season": "All Seasons",
    "origin": "USA",
    "originalPrice": 882,
    "discountPercentage": 15
  },
  {
    "name": "Ghee",
    "category": "Dairy Products",
    "description": "Clarified butter, great for Indian cooking.",
    "image": "https://img.freepik.com/free-photo/delicious-pineapple-still-life_23-2151605460.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 450,
    "quantity": {
      "value": "500",
      "unit": "gms"
    },
    "status": "Sold Out",
    "specialTag": ["summer_specials"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "India",
    "originalPrice": 563,
    "discountPercentage": 20
  },
  {
    "name": "Paneer",
    "category": "Dairy Products",
    "description": "Fresh paneer, perfect for curries.",
    "image": "https://img.freepik.com/free-photo/tofu-made-from-soybeans-food-nutrition-concept_1150-26361.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 420,
    "quantity": {
      "value": "500",
      "unit": "gms"
    },
    "status": "Coming Soon",
    "specialTag": ["everyday_essentials"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "India",
    "originalPrice": 494,
    "discountPercentage": 15
  },
  {
    "name": "Buttermilk",
    "category": "Dairy Products",
    "description": "Fresh buttermilk, great for baking.",
    "image": "https://img.freepik.com/free-vector/farm-milk-poster_1284-74094.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 70,
    "quantity": {
      "value": "1",
      "unit": "L"
    },
    "status": "Coming Soon",
    "specialTag": ["flash_deal"],
    "isOrganic": false,
    "season": "All Seasons",
    "origin": "USA",
    "originalPrice": 78,
    "discountPercentage": 10
  },
  {
    "name": "Cream Cheese",
    "category": "Dairy Products",
    "description": "Smooth cream cheese, ideal for spreads.",
    "image": "https://img.freepik.com/free-vector/cream-cheese-concept-illustration_114360-23779.jpg?ga=GA1.1.1371566466.1740245435&semt=ais_hybrid&w=740",
    "price": 430,
    "quantity": {
      "value": "250",
      "unit": "gms"
    },
    "status": "Coming Soon",
    "specialTag": ["summer_specials"],
    "isOrganic": true,
    "season": "All Seasons",
    "origin": "USA",
    "originalPrice": 573,
    "discountPercentage": 25
  }
];

const Categories = [
    "Fresh Vegetables",
    "Fresh Fruits",
    "Leafy Greens",
    "Dry Fruits",
    "Spices",
    "Grains",
    "Oils & Sauces",
    "Breads & Cheeses",
    "Dairy Products",
];
const admins = [
  {
    email: "admin@vitafresh.com",
    password: "admin123",  // In production, this should be hashed
    isAdmin: true
  }
];


module.exports = {
  Products,
  Categories
};
