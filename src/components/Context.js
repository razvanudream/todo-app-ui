import { createContext, useContext } from "react";

export const TodoStateContext = createContext({
  items: [],
  user: {},
  filteredItems: [],
});
export const TodoDispatchContext = createContext(undefined);

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TODO_ITEMS": {
      return {
        ...state,
        items: action.args.items,
        filteredItems: action.args.items,
      };
    }

    case "SET_USER": {
      return {
        ...state,
        user: state.user,
      };
    }

    case "UPDATE_TODO_ITEMS": {
      const { items } = state;
      const { updatedItem } = action.args;

      let newTodos = items.filter(
        (item) => updatedItem.deleted && item.id !== updatedItem.id
      );

      newTodos = items.map((item) => {
        return {
          ...item,
          completed:
            updatedItem.id === item.id ? updatedItem.completed : item.completed,
        };
      });

      return {
        ...state,
        items: [...newTodos],
        filteredItems: [...newTodos],
      };
    }

    case "FILTER_TODO_ITEMS": {
      const { items } = state;
      const { filter } = action.args;

      switch (filter) {
        case "All": {
          return {
            ...state,
            filteredItems: items,
          };
        }

        case "Completed": {
          const newTodos = items.filter((item) => item.completed);

          return {
            ...state,
            filteredItems: [...newTodos],
          };
        }

        case "Incompleted": {
          const newTodos = items.filter((item) => !item.completed);

          return {
            ...state,
            filteredItems: [...newTodos],
          };
        }

        default: {
          return state;
        }
      }
    }

    default: {
      return state;
    }
  }
};

export function useTodoStateContext() {
  const context = useContext(TodoStateContext);

  return context;
}

export function useTodoDispatchContext() {
  const context = useContext(TodoDispatchContext);

  if (context === undefined) {
    throw new Error(
      "useTodoDispatchContext must be used within a TodoContextProvider"
    );
  }

  return context;
}
