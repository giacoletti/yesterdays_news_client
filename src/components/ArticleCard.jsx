import React from 'react';
import useStyles from '../styles/styles';
import { Typography, CardContent, Card } from '@material-ui/core';

const ArticleCard = ({ article }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography
          gutterBottom
          variant="h2"
          data-cy="article-title"
        >
          {article.title}
        </Typography>
        <Typography gutterBottom variant="h5" data-cy="article-body">
          {article.body}
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          data-cy="article-created"
        >
          {article.created_at}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
