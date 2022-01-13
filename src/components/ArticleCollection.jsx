import React, { useState, useEffect } from "react";
import Articles from "../modules/Articles";

import ArticleCard from "./ArticleCard";

const ArticleCollection = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = async () => {
    const data = await Articles.index();
    setArticles(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const collectionOfArticles = articles.map((article) => {
    return <ArticleCard article={article} />;
  });

  return <div>{collectionOfArticles}</div>;
};

export default ArticleCollection;
