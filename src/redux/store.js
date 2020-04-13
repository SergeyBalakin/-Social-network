import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are yoy", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
        { id: 3, message: "Sergey", likesCount: 30 },
        { id: 4, message: "Bob", likesCount: 5 }
      ],
      newPostText: "it-kamasutra"
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
      ],
      newMessageBody: ""
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
};

export default store;
