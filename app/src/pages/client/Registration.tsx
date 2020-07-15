import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export default function Registration() {
  const [formData, setFormData] = useState({});

  const updateForm = (event: any) => {
    const changedValue = event.target.value;
    setFormData(prevVal => {
      return ({...prevVal, changedValue});
    })
  }

  const submit = () => {
    FormController.register(formData);
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h1">
        Register
      </Typography>
      <form onSubmit={submit}>

      </form>
    </Container>
  )
}
