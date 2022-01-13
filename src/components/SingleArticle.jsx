import React, { useEffect, useState } from "react";
import Articles from "../modules/Articles";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
  const [article, setArticle] = useState();
  const { id } = useParams();

  const fetchData = async () => {
    const data = await Articles.show(id);
    setArticle(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>blablabal</div>;
};

export default SingleArticle;
