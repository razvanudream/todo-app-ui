import React from "react";
import "../styles/header.css";
import { useTodoDispatchContext } from "./Context";
import { useMutation } from "@apollo/client";
import {
  DELETE_TODO,
  MARK_TODO_COMPLETED,
  MARK_TODO_UNCOMPLETED,
} from "../graphql/queries";

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
        args: { updatedItem: { id, deleted: result.data.deleteTodo } },
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
