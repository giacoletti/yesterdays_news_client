import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Title = () => {
  const { t } = useTranslation();

  return (
    <Typography
      data-cy="title"
      variant="h2"
      component={Link}
      to="/"
      sx={{
        paddingLeft: 10,
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
