import React, { useEffect } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import {
  useTodoDispatchContext,
  useTodoStateContext,
} from "../components/Context";
import "../styles/home.css";
import PageTitle from "../components/PageTitle";
import ItemList from "../components/ItemList";
import FilterItems from "../components/FilterItems";

const LIST_TODOS = gql`
  query listTodos($userId: Int!) {
    listTodos(userId: $userId) {
      id
      completed
      title
      userId
      createdAt
      updatedAt
    }
  }
`;

const CREATE_TODO = gql`
  mutation createTodo($title: String!, $userId: Int!) {
    createTodo(title: $title, userId: $userId) {
      id
      completed
      title
      userId
      createdAt
      updatedAt
    }
  }
`;

function Home() {
  const todoState = useTodoStateContext();
  const todoDispatch = useTodoDispatchContext();

  const { loading, error, data } = useQuery(LIST_TODOS, {
    variables: {
      userId: 1,
    },
  });

  const [createTodo] = useMutation(CREATE_TODO);

  const onFormSubmit = async (evt) => {
    evt.preventDefault();
    const newTitle = evt.target[0].value;

    if (newTitle) {
      createTodo({
        variables: {
          title: newTitle,
          userId: 1,
        },
      }).then((result) => {
        todoDispatch({
          type: "SET_TODO_ITEMS",
          args: { items: [result.data.createTodo, ...todoState.items] },
        });
      });
    }
  };

  useEffect(() => {
    if (loading || error || !data) return;

    todoDispatch({
      type: "SET_TODO_ITEMS",
      args: { items: data.listTodos },
    });
  }, [data, loading, error, todoDispatch]);

  return (
    <div className="home">
      <PageTitle text="Todo List" />
      <form onSubmit={onFormSubmit}>
        <label>
          <input type="text" name="name" placeholder="Add a new todo" />
        </label>
      </form>
      <div className="itemList">
        {todoState.filteredItems.map((item) => (
          <ItemList key={item.id} item={item} />
        ))}
      </div>
      <FilterItems />
    </div>
  );
}

export default Home;
