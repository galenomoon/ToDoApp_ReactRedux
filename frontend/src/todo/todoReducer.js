const INITIAL_STATE = {
  description: "Read a Book",
  list: [
    {
      _id: 1,
      description: "Subscribe in Guilherme Galeno's YouTube channel",
      done: true,
    },
    {
      _id: 2,
      description: "Share Guilherme Galeno's YouTube channel",
      done: false,
    },
    {
      _id: 3,
      description: "Listen Guilherme Galeno in Spotify",
      done: false,
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DESCRIPTION_CHANGED":
      return { ...state, description: action.payload };
    default:
      return state;
  }
};
