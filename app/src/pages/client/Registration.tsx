import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import FormController from '../../tools/functions/formController';
import TextField from '@material-ui/core/TextField';

export default function Registration() {
  const [formData, setFormData] = useState({});
  const [submissionStatus, setStatus] = useState('');

  const updateForm = (event: any) => {
    const changedValue = event.target.value;
    setFormData(prevVal => {
      return ({ ...prevVal, changedValue });
    });
  }

  const submit = () => {
    setStatus(FormController.register(formData));
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h1">
        Register
      </Typography>
      <form onSubmit={submit}>
        <TextField
          id="name"
          name="name"
          label="Full Name"
          helperText="Format: FirstName MiddleName LastName Initial"
          fullWidth
          variant="outlined"
        />
        <TextField
          id="fatherName"
          label="Father Name"
          helperText="Format: FirstName MiddleName LastName Initial"
          fullWidth
          size="small"
          variant="outlined"
        />
        <TextField
          id="motherName"
          label="Mother Name"
          helperText="Format: FirstName MiddleName LastName Initial"
          fullWidth
          size="small"
          variant="outlined"
        />
        <TextField
          id="spouseName"
          label="Spouse Name"
          helperText="Format: FirstName MiddleName LastName Initial"
          fullWidth
          size="small"
          variant="outlined"
        />
      </form>
    </Container>
  )
}
