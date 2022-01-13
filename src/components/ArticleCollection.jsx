import React, { useState, useEffect } from "react";
import Articles from "../modules/Articles";
import useStyles from "../styles/styles";
import {
  Typography,
  Container,
  CardContent,
  Grid,
  Card,
} from "@material-ui/core";

const ArticleCollection = () => {
  const [articles, setArticles] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const data = await Articles.index();
      setArticles(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Container className={classes.cardGrid}>
        <Grid container spacing={4}>
          {articles.map((article) => (
            <Grid item key={article.id} md={12} data-cy="article-collection">
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h2"
                    data-cy="article-collection-title"
                  >
                    {article.title}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    data-cy="article-collection-body"
                  >
                    {article.body}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    data-cy="article-collection-created"
                  >
                    {article.created_at}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ArticleCollection;
