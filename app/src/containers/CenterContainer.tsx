import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function CenterContainer({ outerStyle, innerStyle, children }: any) {
  const useStyles = makeStyles((theme) => ({
    centerContainer: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.getContrastText(theme.palette.background.paper),
      height: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto 0',
    }
  }));
  const classes = useStyles();
  return (
    <div className={classes.centerContainer} style={outerStyle}>
      <div className="centerContainer__inner" style={innerStyle}>
        {children}
      </div>
    </div>
  );
}

export default CenterContainer;
