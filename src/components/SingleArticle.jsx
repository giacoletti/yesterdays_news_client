import React, { useEffect, useState } from "react";
import Articles from "../modules/Articles";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const { id } = useParams();

  const fetchArticle = async () => {
    const data = await Articles.show(id);
    setArticle(data.article);
  };
  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <>
      <h1 data-cy="article-title">{article.title}</h1>
      <h1 data-cy="article-body">{article.body}</h1>
      <h1 data-cy="article-created">{article.created_at}</h1>
    </>
  );
};

export default SingleArticle;
