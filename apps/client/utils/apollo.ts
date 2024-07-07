import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useAuthStore } from "@/store/useAuthStore";

const httpLink = createHttpLink({
  uri: "https://journaling-app-api.zeabur.app/graphql",
});

const authLink = setContext((_, { headers }) => {
  // Get the authentication token from Zustand store
  const token = useAuthStore.getState().token;

  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
