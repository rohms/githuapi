import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RepoPage } from "./components/RepoPage";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { useQuery } from "@apollo/client";
import { GET_REPOS } from "./graphql/queries";
import { Header } from "./components/Header.jsx";
import { Loading } from "./components/Loading.jsx";

const MyApp = () => {
  const { loading, error, data } = useQuery(GET_REPOS);

  if (loading) return <Loading />;
  if (error) return <p>There was an error...</p>;

  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route
            path="/repo/:name"
            element={<RepoPage repos={data.user.repositories.nodes} />}
          />
          <Route
            path="/"
            element={<App data={data.user.repositories.nodes} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

const GITHUB_API = "https://api.github.com/graphql";

const httpLink = createHttpLink({
  uri: GITHUB_API,
  headers: {
    authorization: `Bearer ${import.meta.env.VITE_REACT_APP_GITHUB_TOKEN}`,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MyApp />
    </ApolloProvider>
  </React.StrictMode>
);
