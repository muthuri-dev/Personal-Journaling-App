import { gql } from "@apollo/client";

export const CREATE_JOURNAL = gql`
  mutation CreateJournal(
    $user_name: String!
    $title: String!
    $content: String!
    $category: String!
    $feeling: String!
    $date: String!
  ) {
    createJournal(
      createDto: {
        username: $user_name
        title: $title
        content: $content
        category: $category
        feeling: $feeling
        date: $date
      }
    ) {
      id
    }
  }
`;
