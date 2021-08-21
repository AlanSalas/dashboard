import React from "react";
import { Container, List, ListItemIcon, ListItemText } from "@material-ui/core";
import { Home, Category, Class, Person } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import useStyles, { ListItem } from "./style";

const Sidebar = () => {
  const classes = useStyles();
  const { pathname } = useLocation();

  const items = [
    {
      icon: <Home />,
      text: "Dashboard",
      path: "/",
    },
    {
      icon: <Category />,
      text: "Courses",
      path: "/courses",
    },
    {
      icon: <Class />,
      text: "Lessons",
      path: "/lessons",
    },
    {
      icon: <Person />,
      text: "Students",
      path: "/students",
    },
  ];

  return (
    <Container className={classes.root}>
      <List>
        {items.map((item) => (
          <Link to={item.path} className={classes.link}>
            <ListItem
              button
              className={
                pathname == item.path ? classes.active : classes.link__item
              }
            >
              <ListItemIcon className={classes.link__icon}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                className={classes.link__text}
                primary={item.text}
              />
            </ListItem>
          </Link>
        ))}
      </List>
    </Container>
  );
};

export default Sidebar;
