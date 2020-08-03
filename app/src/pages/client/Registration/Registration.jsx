import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';

import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
  Button, Container, CircularProgress, Typography, Stepper, Step, StepLabel, StepContent, Paper
} from '@material-ui/core';

import InputField from '../../../components/FormField';
import FormController from '../../../tools/functions/formController';
import initialValues from './formik/initialValues';
import validationSchema from './formik/validationSchema';

import { AdditionalDetails, BasicDetails, ContactDetails, DocumentsSection, QualificationDetails } from './Fragments';

import Alert from "../../../components/Alert";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%"
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    actionsContainer: {
      marginBottom: theme.spacing(2)
    },
    resetContainer: {
      padding: theme.spacing(3)
    }
  })
);

function getSteps() {
  return [
    "Basic Details",
    "Contact Details",
    "Additional Details",
    "Educational Details",
    "Documents Section"
  ];
}

export default function Registration() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [status, setStatus] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const steps = getSteps();

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <BasicDetails controller={formik} generateBunch={generateBunch} />;

      case 1:
        return <ContactDetails controller={formik} generateBunch={generateBunch} />;

      case 2:
        return <AdditionalDetails controller={formik} generateBunch={generateBunch} />;

      case 3:
        return <QualificationDetails controller={formik} generateBunch={generateBunch} />;

      case 4:
        return <DocumentsSection controller={formik} generateBunch={generateBunch} />;

      default:
        return "Unknown step";
    }
  }

  const submitForm = async (values) => {
    setStatus('processing');
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

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

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
      <Typography variant="h2" component='h1' style={{ marginBottom: '1rem' }}>
        Register
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.root}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  {getStepContent(index)}
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}>
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}>
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <Typography>All steps completed - you&apos;re finished</Typography>
              <Button
                className={classes.button}
                onClick={() => {
                  setActiveStep(0);
                }}              >
                STEP 1
            </Button>
              <Button type="submit" onClick={() => {
                if (formik.errors !== {}) {
                  setAlertMessage('Please fill out all mandatory fields');
                }
              }}
                variant="contained" color="primary">
                {(status === 'processing') ?
                  <CircularProgress color='secondary' size={20} /> : 'Register'}
              </Button>
            </Paper>
          )}
        </div>

        {/* <BasicDetails controller={formik} generateBunch={generateBunch} />
        <ContactDetails controller={formik} generateBunch={generateBunch} />
        <AdditionalDetails controller={formik} generateBunch={generateBunch} />
        <QualificationDetails controller={formik} generateBunch={generateBunch} />
        <DocumentsSection controller={formik} generateBunch={generateBunch} />

        <Button type="submit"
          variant="contained" color="primary">
          {(status === 'processing') ?
            <CircularProgress color='secondary' size={20} /> : 'Register'}
        </Button> */}
      </form>
      {
        (alertMessage !== '') && <Alert msg={alertMessage} type="error" open={true} />
      }
    </Container>
  );
}
