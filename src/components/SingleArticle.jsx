import React, { useEffect, useState } from "react";
import Articles from "../modules/Articles";
import RandomPicturesArticle from "../modules/Image/RandomPicturesArticle";
import { useParams } from "react-router-dom";
import { Typography, CardMedia } from "@mui/material";
import Box from "@mui/material/Box";
import CommercialCardListRight from "./CommercialCardListRight";
import CommercialCardList from "./CommercialCardList";

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
    <Box class="main_page">
      <Box class="boxComLeftArt" id="Commercial_feed">
        Sponsored by:
        <CommercialCardList />
      </Box>
      <Box class="singleArt" sx={{ m: 10 }}>
        <Typography gutterBottom variant="h3" data-cy="article-title">
          {article.title}
        </Typography>
        <Typography gutterBottom variant="caption" data-cy="article-created">
          {article.published}
        </Typography>
        <CardMedia
          class="articleImage"
          component="img"
          image={RandomPicturesArticle.getPicture()}
        />
        <Typography gutterBottom variant="subtitle1" data-cy="article-body" sx={{ paddingTop: "20px", paddingBottom: "20px" }}>
          {article.body}
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
      <Box class="boxComRightArt" id="Commercial_feed">
        Sponsored by:
        <CommercialCardListRight />
      </Box>
    </Box>
  );
};

export default SingleArticle;
