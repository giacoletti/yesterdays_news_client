import React from "react";
import ArticleCollection from "./components/ArticleCollection";
import SingleArticle from "./components/SingleArticle";
import NavigationBar from "./components/NavigationBar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<ArticleCollection />} />
        <Route path="/:category" element={<ArticleCollection />} />
        <Route path="articles/:id" element={<SingleArticle />} />
      </Routes>
    </>
  );
};

export default App;
