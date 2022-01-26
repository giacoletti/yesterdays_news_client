import React from "react";
import ArticleCollection from "./components/ArticleCollection";
import SingleArticle from "./components/SingleArticle";
import NavigationBar from "./components/NavigationBar";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
const App = () => {
  const { i18n } = useTranslation();
  const handleLngChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <>
      <NavigationBar handleLngChange={handleLngChange} />
      <Routes>
        <Route path="/" element={<ArticleCollection />} />
        <Route path="/:category" element={<ArticleCollection />} />
        <Route path="articles/:id" element={<SingleArticle />} />
      </Routes>
    </>
  );
};

export default App;
