import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  ssrMode: true,
  credentials: "same-origin",
  link: createHttpLink({
    // uri: "http://localhost:3010",
    uri: " https://adamrasheedwp.com/graphql",
    credentials: "same-origin",
    // headers: {
    //   cookie: req.header("Cookie"),
    // },
  }),
  // uri: " https://adamrasheedwp.com/graphql",
  cache: new InMemoryCache(),
});
