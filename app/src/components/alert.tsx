import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export default function Snackbars(props: any) {
  const [open, setOpen] = React.useState(props.open);

  const handleClose = (event: any, reason: any) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={props.type}>
        {props.msg}
      </Alert>
    </Snackbar>
  );
}
