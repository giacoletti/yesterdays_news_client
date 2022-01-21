import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Articles from "../modules/Articles";
import ArticleCard from "./ArticleCard";
import useStyles from "../styles/styles";
import { Grid, Container } from "@material-ui/core";

const ArticleCollection = () => {
  const { category } = useParams();
  const classes = useStyles();
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const data = await Articles.index(category);
    setArticles(data);
  };
  useEffect(() => {
    fetchArticles();
  }, [category]);

  const collectionOfArticles = articles.map((article) => {
    return (
      <Grid item key={article.id} md={12}>
        <ArticleCard article={article} />
      </Grid>
    );
  });

  return (
    <Container className={classes.cardGrid}>
      <Grid container spacing={4} data-cy="article-collection">
        {collectionOfArticles}
      </Grid>
    </Container>
  );
};

export default ArticleCollection;
