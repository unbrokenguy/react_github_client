import React from "react";
import Routing from "./pages/routing";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo";

function App() {
  return (
    <ApolloProvider client={client}>
      <Routing />
    </ApolloProvider>
  );
}

export default App;
