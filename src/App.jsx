import React, { useEffect } from "react";
import ArticleCollection from "./components/ArticleCollection";
import SingleArticle from "./components/SingleArticle";
import NavigationBar from "./components/NavigationBar";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Title from "./components/Title"

const App = () => {
  const { locale } = useSelector(state => state);
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <>
      <Title class="title" />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<ArticleCollection />} />
        <Route path="/:category" element={<ArticleCollection />} />
        <Route path="articles/:id" element={<SingleArticle />} />
      </Routes>
    </>
  );
};

export default App;
