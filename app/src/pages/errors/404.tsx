import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import Button from '@material-ui/core/Button';

import CenterContainer from '../../containers/CenterContainer';

function Error404() {
  return (
    <Fragment>
      <CenterContainer outerStyle={{ textAlign: 'center', alignItems: 'center' }}>
        <span style={{ fontSize: "5rem" }}>4</span><LanguageOutlinedIcon style={{ fontSize: "4.2rem", color: "#ff1744", verticalAlign: "text-bottom" }} /><span style={{ fontSize: "5rem" }}>4</span>
        <h1>PAGE DOES NOT EXIST</h1>
        <p style={{ display: "block" }}>The page you're looking for does not exist.</p>
        <Link to='/'>
          <Button>GO HOME</Button>
        </Link>
      </CenterContainer>
    </Fragment >
  );
}

export default Error404;
