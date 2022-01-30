import React from "react";
import {
  Typography,
  CardContent,
  Card,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import RandomPicturesArticle from "../modules/Image/RandomPicturesArticle";
import { FormatAlignJustify } from "@mui/icons-material";

const ArticleCard = ({ article }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ width: "100%", maxWidth: 700 }}>
      <CardActionArea onClick={() => navigate(`/articles/${article.id}`)}>
        <CardMedia
          component="img"
          height={FormatAlignJustify}
          image={RandomPicturesArticle.getPicture()}
        />
        <CardContent>
          <Typography gutterBottom variant="h3" data-cy="article-title">
            {article.title}
          </Typography>
          <Typography gutterBottom variant="subtitle1" data-cy="article-teaser">
            {article.teaser}
          </Typography>
          <Typography gutterBottom variant="caption" data-cy="article-created">
            {article.published}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ArticleCard;
