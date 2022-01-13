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
      setArticles(data.articles);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Container className={classes.cardGrid}>
        <Grid container spacing={4}>
          {articles.map((article) => (
            <Grid
              item
              key={article.id}
              xs={12}
              sm={12}
              md={12}
              data-cy="article-collection"
            >
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    data-cy="article-collection-title"
                  >
                    {article.title}
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
