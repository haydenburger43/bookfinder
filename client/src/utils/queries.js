import gql from "graphql-tag";

export const GET_ME = gql`
  {
    me {
      username
      id
      email
      savedBooks {
        title
        description
        bookID
        authors
        image
      }
    }
  }
`;