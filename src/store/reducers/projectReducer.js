const initState = {
  projects: [
    { id: 1, title: "test", content: "just a first test" },
    { id: 2, title: "test 2", content: "just a second test" },
    { id: 3, title: "test 3", content: "just a third test" },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("Created Project", action.project);
  }
  return state;
};

export default projectReducer;
