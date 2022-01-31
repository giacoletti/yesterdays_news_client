import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Select,
  MenuItem,
  FormControl
} from "@mui/material";

const NavigationBar = () => {
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
  const handleLngChange = (event) => {
    dispatch({ type: "SET_LANGUAGE", payload: event.target.value });
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "white", color: "black", borderBottom: "solid black 5px" }}
      >
        <Toolbar>
          <Button data-cy="latest-view" component={Link} to="/" color="inherit">
            {t("categories.latest")}
          </Button>

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
          <FormControl sx={{ width: "140px", position: "absolute", right: 10 }}>
            <Select
              data-cy="language-dropdown"
              onChange={handleLngChange}
              defaultValue={i18n.language}
            >
              <MenuItem value={"sv"}>{t("controls.swedish")}</MenuItem>
              <MenuItem value={"en"}>{t("controls.english")}</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
