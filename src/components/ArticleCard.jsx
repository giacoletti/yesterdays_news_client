import React from "react";
import useStyles from "../styles/styles";
import {
  Typography,
  CardContent,
  Grid,
  Card,
  Container,
} from "@material-ui/core";

const ArticleCard = ({ article }) => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.cardGrid}>
        <Grid container spacing={4}>
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
        </Grid>
      </Container>
    </div>
  );
};

export default ArticleCard;
