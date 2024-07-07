import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://personal-journaling-app.onrender.com/graphql",
  cache: new InMemoryCache(),
});
