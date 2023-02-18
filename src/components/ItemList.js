import React from "react";
import "../styles/header.css";
import { useTodoDispatchContext } from "./Context";
import { gql, useMutation } from "@apollo/client";

const MARK_TODO_UNCOMPLETED = gql`
  mutation markTodoUncompleted($id: Int!) {
    markTodoUncompleted(id: $id) {
      id
      completed
    }
  }
`;

const MARK_TODO_COMPLETED = gql`
  mutation markTodoCompleted($id: Int!) {
    markTodoCompleted(id: $id) {
      id
      completed
    }
  }
`;

const DELETE_TODO = gql`
  mutation deleteTodo($id: Int!) {
    deleteTodo(id: $id)
  }
`;

function ItemList({ item }) {
  const todoDispatch = useTodoDispatchContext();
  const [markTodoCompleted] = useMutation(MARK_TODO_COMPLETED);
  const [markTodoUncompleted] = useMutation(MARK_TODO_UNCOMPLETED);
  const [deleteTodo] = useMutation(DELETE_TODO);

  const onDeleteItem = (id) => {
    deleteTodo({
      variables: {
        id,
      },
    }).then((result) => {
      todoDispatch({
        type: "UPDATE_TODO_ITEMS",
        args: { updatedItem: { id, deleted: result } },
      });
    });
  };

  const onMarkTodo = (id, completed) => {
    if (completed) {
      markTodoCompleted({
        variables: {
          id,
        },
      }).then((result) => {
        todoDispatch({
          type: "UPDATE_TODO_ITEMS",
          args: {
            updatedItem: {
              id: result.data.markTodoCompleted.id,
              completed: result.data.markTodoCompleted.completed,
            },
          },
        });
      });
    } else {
      markTodoUncompleted({
        variables: {
          id,
        },
      }).then((result) => {
        todoDispatch({
          type: "UPDATE_TODO_ITEMS",
          args: {
            updatedItem: {
              id: result.data.markTodoUncompleted.id,
              completed: result.data.markTodoUncompleted.completed,
            },
          },
        });
      });
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={item.completed}
        onClick={() => onMarkTodo(item.id, !item.completed)}
      />
      <div className="itemName">{item.title}</div>
      <div className="deleteItem" onClick={() => onDeleteItem(item.id)}></div>
    </div>
  );
}

export default ItemList;
