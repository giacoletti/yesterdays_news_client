import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";

const NavigationBar = ({handleLngChange}) => {
  const { i18n, t } = useTranslation();
  // const handleLngChange = (event) => {
  //   i18n.changeLanguage(event.target.value);
  // };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            data-cy="header"
            variant="h6"
            component={Link}
            to="/"
            sx={{ flexGrow: 1, textDecoration: "none", color: "white" }}
          >
            {t("appName")}
          </Typography>
          <Button
            data-cy="sports-view"
            component={Link}
            to="/sports"
            color="inherit"
          >
            {t("categories.sports")}
          </Button>
          <Button
            data-cy="politics-view"
            component={Link}
            to="/politics"
            color="inherit"
          >
            {t("categories.politics")}
          </Button>
          <Button
            data-cy="economy-view"
            component={Link}
            to="/economy"
            color="inherit"
          >
            {t("categories.economy")}
          </Button>
          <FormControl sx={{ width: "130px" }}>
            <Select
              style={{ color: "white" }}
              data-cy="language-dropdown"
              onChange={handleLngChange}
              defaultValue={i18n.language} 
            >
              <MenuItem value={"sv"}>{t('controls.swedish')}</MenuItem>
              <MenuItem value={"en"}>{t('controls.english')}</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
