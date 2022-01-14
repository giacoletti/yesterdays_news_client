import React from "react";
import ArticleCollection from "./components/ArticleCollection";
import SingleArticle from "./components/SingleArticle";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1 data-cy="header">Yesterdays News</h1>
      <Routes>
        <Route path="/" element={<ArticleCollection />} />
        <Route path="articles/:id" element={<SingleArticle />} />
      </Routes>
    </>
  );
};

export default App;
