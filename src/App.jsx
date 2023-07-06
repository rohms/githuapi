import "./App.css";
import React, { useState } from "react";
import { SearchBox } from "./components/SearchBox";
import { List } from "./components/List";
import Fuse from "fuse.js";

const App = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const fuseOptions = {
    keys: [{ name: "name", weight: 2 }, "description", "languages.nodes.name"],
  };
  const fuse = new Fuse(data, fuseOptions);

  const results = fuse.search(searchTerm);
  const filteredRepos = searchTerm
    ? results.map((result) => result.item)
    : data;

  return (
    <div className="app">
      <div>
        <h1>GitHub Repo Search</h1>
        <SearchBox setSearchTerm={setSearchTerm} />
      </div>
      {filteredRepos.length === 0 ? (
        <h2>No results found</h2>
      ) : (
        <List data={filteredRepos} />
      )}
      <a className="go-up" href="#">
        Go up ⬆
      </a>
    </div>
  );
};

export { App };
