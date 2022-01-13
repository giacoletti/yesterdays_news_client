import React from "react";
import ArticleCollection from "./components/ArticleCollection";

const App = () => {
  return (
    <div>
      <h1 data-cy="header">Yesterdays News</h1>
      <ArticleCollection />
    </div>
  );
};

export default App;
