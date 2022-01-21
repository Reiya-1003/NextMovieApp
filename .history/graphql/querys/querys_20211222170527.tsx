import { gql } from "apollo-boost";

export const FAVO_LIST = gql`
  {
    favos {
      id
      title
      img
      movienumber
      user{
        name
      }
    }
  }
`;
export const USER_LIST = gql`
  {
    users {
      id
      name
      address
    }
  }
`;

export const ADD_FAVO = gql`
  mutation($title: String!, $img: String!, $movienumber: Int!, $userId: ID!) {
    addFavo(title: $title, img: $img, movienumber: $movienumber) {
      title
      img
      movienumber
    }
  }
`;

export const DELETE_FAVO = gql`
  mutation($id: ID!) {
    deleteFavo(id: $id) {
      id
    }
  }
`;
