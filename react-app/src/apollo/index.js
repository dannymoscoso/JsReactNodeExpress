import ApolloClient from "apollo-boost";

const uri = "https://spotify-graphql-server.herokuapp.com/graphql";

export const client = new ApolloClient({
  uri,
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
  }
});
// import {client} from "./apollo"
