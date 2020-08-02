import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';

import { Button, Container, CircularProgress, Typography } from '@material-ui/core';

import InputField from '../../../components/FormField';
import FormController from '../../../tools/functions/formController';
import initialValues from './formik/initialValues';
import validationSchema from './formik/validationSchema';

import { AdditionalDetails, BasicDetails, ContactDetails, DocumentsSection, QualificationDetails } from './Fragments';

import Alert from "../../../components/Alert";

export default function Registration() {
  const [status, setStatus] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const submitForm = async (values) => {
    setStatus('processing');
    if (formik.errors) {
      setAlertMessage(formik.errors);
    }
    setStatus(await FormController.register(values));
  }

  useEffect(() => {
    if (status === 'submitted') {
      window.open('/', '_self');
    }
  }, [status]);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: submitForm
  });

  function generateBunch({ field, label, helper }) {
    return (
      <InputField field={field} label={label} key={field}
        helperText={(formik.touched[field] && formik.errors[field] !== undefined) ? formik.errors[field] : helper}
        error={formik.touched[field] && formik.errors[field] !== undefined}
        {...formik.getFieldProps(field)} />
    );
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h2" component='h1'>
        Register
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <BasicDetails controller={formik} generateBunch={generateBunch} />
        <ContactDetails controller={formik} generateBunch={generateBunch} />
        <AdditionalDetails controller={formik} generateBunch={generateBunch} />
        <QualificationDetails controller={formik} generateBunch={generateBunch} />
        <DocumentsSection controller={formik} generateBunch={generateBunch} />

        <Button type="submit"
          variant="contained" color="primary">
          {(status === 'processing') ?
            <CircularProgress color='secondary' size={20} /> : 'Register'}
        </Button>
      </form>
      {
        (alertMessage !== '') && <Alert msg={alertMessage} type="error" open={true} />
      }
    </Container>
  );
}
