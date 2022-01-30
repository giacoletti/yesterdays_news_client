import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

const Title = () => {
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
  const handleLngChange = (event) => {
    dispatch({ type: "SET_LANGUAGE", payload: event.target.value });
  };

  return (
    <Typography
      data-cy="title"
      variant="h2"
      component={Link}
      to="/"
      sx={{
        flexGrow: 1,
        textDecoration: "none",
        color: "black",
        fontFamily: "'PT Serif', serif",
      }}
    >
      {t("appName")}
    </Typography>
  );
};

export default Title;
