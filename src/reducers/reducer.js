export const todos = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589,
  },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "AddTask":
      return [
        ...state,
        {
          item: action.payload,
          id: Date.now(),
          completed: false,
        },
      ];

    case "ToggleTask":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });

    case "ClearTask":
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};
