import React from "react";
import Routing from "./pages/routing";
import token from "./apollo/my_token";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient } from "@apollo/client";
import { HttpLink } from "@apollo/client";
import { InMemoryCache } from "@apollo/client";

const httpLink = {
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer ${token}`,
  },
};

const client = new ApolloClient({
  link: new HttpLink(httpLink),
  cache: new InMemoryCache(),
});

const App: React.FunctionComponent = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Routing />
      </div>
    </ApolloProvider>
  );
};

export default App;
