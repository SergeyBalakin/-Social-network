let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are yoy", likesCount: 12 },
      { id: 2, message: "It's my first post", likesCount: 11 },
      { id: 3, message: "Sergey", likesCount: 30 },
      { id: 4, message: "Bob", likesCount: 5 }
    ]
  },
  dialogsPage: {
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How is your IT-Kamasutra" },
      { id: 3, message: "YO" },
      { id: 4, message: "Hello world" },
      { id: 5, message: "Hello" },
      { id: 6, message: "Sergey" }
    ],
    dialogs: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Andrey" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Sasha" },
      { id: 5, name: "Victor" },
      { id: 6, name: "Valera" }
    ]
  }
};

export default state;
