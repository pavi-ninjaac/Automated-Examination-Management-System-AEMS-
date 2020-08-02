import React, { useEffect } from 'react';
import CenterContainer from '../../containers/CenterContainer';
import { Typography } from '@material-ui/core';

import AuthFunctions from '../../tools/functions/auth';

export default function Verify() {
  useEffect(() => {
    AuthFunctions.sendVerificationEmail();
  }, [])
  return (
    <CenterContainer>
      <img style={{ width: '3rem', height: '3rem', objectFit: 'cover', objectPosition: 'center' }} src={'../../assets/images/verify.png'} alt='verify'></img>
      <Typography variant='h2'>
        Verify
      </Typography>
      <Typography variant='body2'>
        Check your email and click the link to verify.
      </Typography>
    </CenterContainer>
  )
}
