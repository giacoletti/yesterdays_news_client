import React from "react";
import { Typography, CardContent, Card } from "@mui/material";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <Link to={"/articles/" + article.id}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h2" data-cy="article-title">
            {article.title}
          </Typography>
          <Typography gutterBottom variant="h5" data-cy="article-body">
            {article.body}
          </Typography>
          <Typography gutterBottom variant="h6" data-cy="article-created">
            {article.created_at}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ArticleCard;
