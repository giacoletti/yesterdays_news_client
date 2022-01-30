import React, { useEffect, useState } from "react";
import Articles from "../modules/Articles";
import RandomPicturesArticle from "../modules/Image/RandomPicturesArticle";
import { useParams } from "react-router-dom";
import { Typography, CardMedia } from "@mui/material";
import Box from "@mui/material/Box";
import ArticleCss from "../styles/ArticleCss.css";

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
    <Box sx={{ m: 10 }}>
      <Typography gutterBottom variant="h3" data-cy="article-title">
        {article.title}
      </Typography>
      <Typography gutterBottom variant="subtitle1" data-cy="article-body">
        {article.body}
      </Typography>
      <CardMedia
        class="articleImage"
        component="img"
        image={RandomPicturesArticle.getPicture()}
      />
      <Typography gutterBottom variant="caption" data-cy="article-created">
        {article.published}
      </Typography>
      <Typography
        gutterBottom
        variant="caption"
        data-cy="article-author"
        alignRight
      >
        {article.author}
      </Typography>
    </Box>
  );
};

export default SingleArticle;
