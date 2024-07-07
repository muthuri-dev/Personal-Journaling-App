import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation Register($password: String!, $username: String!) {
    register(authDto: { password: $password, username: $username }) {
      id
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($password: String!, $username: String!) {
    login(authDto: { username: $username, password: $password }) {
      access_token
      user {
        username
      }
    }
  }
`;
