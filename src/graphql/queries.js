import { gql } from "@apollo/client";

export const LIST_TODOS = gql`
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

export const CREATE_TODO = gql`
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

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation signUp($name: String!, $email: String!, $password: String!) {
    signUp(name: $name, email: $email, password: $password) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`;

export const MARK_TODO_UNCOMPLETED = gql`
  mutation markTodoUncompleted($id: Int!) {
    markTodoUncompleted(id: $id) {
      id
      completed
    }
  }
`;

export const MARK_TODO_COMPLETED = gql`
  mutation markTodoCompleted($id: Int!) {
    markTodoCompleted(id: $id) {
      id
      completed
    }
  }
`;

export const DELETE_TODO = gql`
  mutation deleteTodo($id: Int!) {
    deleteTodo(id: $id)
  }
`;
