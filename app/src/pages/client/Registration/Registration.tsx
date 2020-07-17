import React, { useState } from 'react';
import { useFormik } from 'formik';

import { TextField, Container, Typography, InputLabel, MenuItem, FormControl, FormLabel, Select, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';

import InputField from '../../../components/FormField';
import FormController from '../../../tools/functions/formController';

import Module1 from './Module1';
import Module2 from './Module2';

import initialValues from './initialValues';
import validationSchema from './validationSchema';

export default function Registration() {
  const [status, setStatus] = useState('');
  const submitForm = (values: object) => {
    setStatus(FormController.register(values));
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: submitForm
  });

  function generateBunch(value: any) {
    const { field, label, helper } = value;
    return (
      <InputField field={field} label={label} helperText={helper}
        {...formik.getFieldProps(field)}
      />
    );
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h1">
        Register
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Module1 controller={formik} generateBunch={generateBunch} />
        <Module2 controller={formik} generateBunch={generateBunch} />

        <FormLabel component="legend">Is the applicant different-abled?</FormLabel>
        <RadioGroup row aria-label="isDisabled" name="isDisabled" defaultValue="yes">
          <FormControlLabel value={"yes"} control={<Radio color="primary" />} label="Yes" />
          <FormControlLabel value={"no"} control={<Radio color="primary" />} label="No" />
        </RadioGroup>
        <FormLabel component="legend">Does the applicant has any criminal records?</FormLabel>
        <RadioGroup row aria-label="isCriminal" name="isCriminal" defaultValue="yes">
          <FormControlLabel value={"yes"} control={<Radio color="primary" />} label="Yes" />
          <FormControlLabel value={"no"} control={<Radio color="primary" />} label="No" />
        </RadioGroup>
      </form>
    </Container>
  )
}
