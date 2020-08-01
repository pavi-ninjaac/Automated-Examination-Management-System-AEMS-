import React, { useEffect } from 'react'
import { Typography } from '@material-ui/core';
import AuthFunctions from '../../tools/functions/auth';

export default function LogOut() {
  useEffect(() => {
    console.log('logging out...');
    AuthFunctions.logout();
    window.open('/', '_self');
  }, [])

  return (
    <Typography>
      Logging out...
    </Typography>
  )
}
