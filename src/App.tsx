import React from "react";
import Routing from "./pages/routing";
import { ApolloProvider } from "@apollo/client";
import { client } from "./Apollo";

const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Routing />
      </div>
    </ApolloProvider>
  );
};

export default App;
