import { gql } from "@apollo/client";

export const CREATE_JOURNAL = gql`
  mutation CreateJournal(
    $category: String!
    $content: String!
    $date: String!
    $feeling: String!
    $title: String!
    $user_name: String!
  ) {
    createJournal(
      createDto: {
        category: $category
        content: $content
        date: $date
        feeling: $feeling
        title: $title
        user_name: $user_name
      }
    ) {
      id
    }
  }
`;

export const GET_USER_JOURNALS = gql`
  query Journals($username: String!) {
    journals(username: $username) {
      category
      content
      date
      feeling
      id
      title
    }
  }
`;

export const REMOVE_JOURNAL = gql`
  mutation RemoveJournal($id: String!) {
    removeJournal(id: $id) {
      id
    }
  }
`;
