const projects = [
  {
    id: "4",
    Title: "myFlix API",
    Description: `RESTful API that allows a client to register, login and access movie data stored in a MongoDB database.
    The database includes a 'Movies' collection and a 'Users' collection. 
    The API uses basic HTTP authentication for initial login requests and JWT authorization for subsequent requests.`,
    Github_Repo: ["https://github.com/cladg92/movie_api"],
    Live_Site: ["https://myflixapi92.herokuapp.com/documentation/#/"],
    img: [
      "https://raw.githubusercontent.com/cladg92/portfolio/main/src/assets/myFlixAPI_screen/Capture.PNG",
      "https://raw.githubusercontent.com/cladg92/portfolio/main/src/assets/myFlixAPI_screen/Capture1.PNG",
    ],
    pic: [
      "https://raw.githubusercontent.com/cladg92/portfolio/main/src/assets/api1.jpg",
    ],
    tech: [
      "MongoDB",
      "Mongoose",
      "Express",
      "Node",
      "Heroku",
      "Swagger",
      "Postman",
    ],
  },
  {
    id: "5",
    Title: "myFlix App - React",
    Description: `Web application that provides users with access to information about different movies, directors, and genres.
    Users can register, login, browse movies, add them to their favourites' list, update and delete their profile.
    The app is built as a single-page application (SPA) using React and fetches data from the myFlix API.`,
    Github_Repo: ["https://github.com/cladg92/myFlix-client"],
    Live_Site: ["https://myflixapp92.netlify.app/"],
    img: [
      "https://raw.githubusercontent.com/cladg92/portfolio/main/src/assets/myFlixclient_screens/Capture.PNG",
      "https://raw.githubusercontent.com/cladg92/portfolio/main/src/assets/myFlixclient_screens/Capture1.PNG",
      "https://raw.githubusercontent.com/cladg92/portfolio/main/src/assets/myFlixclient_screens/Capture2.PNG",
      "https://raw.githubusercontent.com/cladg92/portfolio/main/src/assets/myFlixclient_screens/Capture3.PNG",
      "https://raw.githubusercontent.com/cladg92/portfolio/main/src/assets/myFlixclient_screens/Capture4.PNG",
      "https://raw.githubusercontent.com/cladg92/portfolio/main/src/assets/myFlixclient_screens/Capture5.PNG",
    ],
    pic: [
      "https://raw.githubusercontent.com/cladg92/portfolio/main/src/assets/myFlix1.jpg",
    ],
    tech: ["React", "React-Bootstrap", "Parcel", "Axios", "Redux"],
  },

  {
    id: "6",
    Title: "myFlix App - Angular",
    Description: `Web application that provides users with access to information about different movies, directors, and genres.
    Users can register, login, browse movies, add them to their favourites' list, update and delete their profile.
    The app is built as a single-page application (SPA) using Angular and fetches data from the myFlix API.`,
    Github_Repo: ["https://github.com/cladg92/myFlix-Angular-client"],
    Live_Site: ["https://cladg92.github.io/myFlix-Angular-client/welcome"],
    img: [
      "https://raw.githubusercontent.com/cladg92/portfolio/main/src/assets/Angular_screens/Capture.PNG",
      "https://raw.githubusercontent.com/cladg92/portfolio/main/src/assets/Angular_screens/Capture2.PNG",
      "https://raw.githubusercontent.com/cladg92/portfolio/main/src/assets/Angular_screens/Capture3.PNG",
    ],
    pic: [
      "https://raw.githubusercontent.com/cladg92/portfolio/main/src/assets/angular1.jpg",
    ],
    tech: ["Angular", "TypeScript", "Angular-Material", "TypeDoc"],
  },
  {
    id: "1",
    Title: "Pokedex App",
    Description: `This was my first JavaScript project. It's a web application that loads data from an external API and displays a list of Pokemons.
    Users can filter the Pokemons by name and view their details on demand through modals. 
    The application was built using basic HTML and CSS, JavaScript and Bootstrap.`,
    Github_Repo: ["https://github.com/cladg92/Pokedex_app"],
    Live_Site: ["https://cladg92.github.io/Pokedex_app/"],
    img: [
      "https://raw.githubusercontent.com/cladg92/portfolio/main/src/assets/pokedex_screen/pokepo1.PNG",
      "https://raw.githubusercontent.com/cladg92/portfolio/main/src/assets/pokedex_screen/pokepo2.PNG",
    ],
    pic: [
      "https://raw.githubusercontent.com/cladg92/portfolio/main/src/assets/pokedex1.jpg",
    ],
    tech: ["JavaScript", "Bootstrap", "JQuery"],
  },
  {
    id: "2",
    Title: "Meet App",
    Description: `Web application that uses the Google Calendar API to display upcoming programming events for web developers. 
    Users can filter events by city, specify the number of visible events, view the details of each event and view a summary of the events using charts.
    Since the app was built as a progressive web application (PWA), users can also add the app shortcut to the home screen of their device.
    The app was built with React using a test-driven development (TDD) approach; an authorization server set up on AWS Lambda for issuing OAuth2 
    tokens allows the app to fetch data from the Google Calendar API.`,
    Github_Repo: ["https://github.com/cladg92/meet"],
    Live_Site: ["https://cladg92.github.io/meet/"],
    img: [
      "https://raw.githubusercontent.com/cladg92/portfolio/main/src/assets/meet_screen/Capture.PNG",
      "https://raw.githubusercontent.com/cladg92/portfolio/main/src/assets/meet_screen/Capture1.PNG",
      "https://raw.githubusercontent.com/cladg92/portfolio/main/src/assets/meet_screen/Capture2.PNG",
    ],
    pic: [
      "https://raw.githubusercontent.com/cladg92/portfolio/main/src/assets/meet1.jpg",
    ],
    tech: [
      "React",
      "Axios",
      "AWS Lambda",
      "OAuth2",
      "Jest",
      "Cucumber",
      "Puppeteer",
      "Atatus",
    ],
  },
  {
    id: "3",
    Title: "Chat App",
    Description: `Simple chat app for mobile devices that provides users with a chat interface and options to share images and their location. 
    The app was built using React Native and uses Firebase’s Cloud Firestore to store data and ensure real-time 
    transfer to the user. `,
    Github_Repo: ["https://github.com/cladg92/chat-app"],
    Live_Site: ["https://youtube.com/shorts/bTCtS5YFaGk?feature=share"],

    img: [
      "https://raw.githubusercontent.com/cladg92/portfolio/main/src/assets/Chatapp_screens/chat.PNG",
    ],
    pic: [
      "https://raw.githubusercontent.com/cladg92/portfolio/main/src/assets/chat1.jpg",
    ],
    tech: ["React Native", "Expo", "Google Firebase", "Gifted Chat"],
  },
];

export { projects };
