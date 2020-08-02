import React from "react";
import { Link } from "react-router-dom";
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../assets/images/logo.png';

const useStyles = makeStyles((theme) => ({
  nav: {
    boxShadow: theme.shadows[3],
    height: '4rem',
    padding: '.5rem 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    height: '3rem',
    width: '3rem',
    objectFit: 'cover',
    objectPosition: 'center',
    marginRight: '1rem'
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    "&:hover": {
      color: theme.palette.primary.main
    }
  },
  list: {
    display: "flex", justifyContent: "flex-end"
  },
  listItem: {
    listStyle: "none",
    display: "inline-block",
    marginLeft: "1rem"
  }
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <div className="container">
      <nav className={classes.nav}>
        <div className={classes.brand}>
          <img src={Logo} alt="logo" className={classes.image}></img>
          <Typography variant='h5' component='div'>STET Exam Portal</Typography>
        </div>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <Link to="/materials" className={classes.link}>
              Materials
            </Link>
          </li>
          <li className={classes.listItem}>
            <Link to="/auth/logout" className={classes.link}>
              Sign Out
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
