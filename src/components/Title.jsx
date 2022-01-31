import React from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Title = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Typography
      data-cy="title"
      variant="h2"
      component="div"
      onClick={() => navigate('/')}
      sx={{
        paddingLeft: "30px",
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
