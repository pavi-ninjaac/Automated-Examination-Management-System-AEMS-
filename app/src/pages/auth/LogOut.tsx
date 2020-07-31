import React from 'react'
import { Typography } from '@material-ui/core';
import AuthFunctions from '../../tools/functions/auth';

export default function LogOut() {
  AuthFunctions.logout();

  return (
    <Typography>
      Logging out
    </Typography>
  )
}
