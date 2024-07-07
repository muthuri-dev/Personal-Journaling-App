import { gql } from "@apollo/client";

export const UPDATE_PASSWORD = gql`
  mutation UpdateUserPassword($password: String!, $username: String!) {
    updateUserPassword(
      updateDto: { password: $password, username: $username }
    ) {
      id
    }
  }
`;
