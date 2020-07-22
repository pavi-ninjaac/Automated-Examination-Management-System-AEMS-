import React, { useState } from 'react';
import { useFormik } from 'formik';

import { Button, Container, Typography, InputLabel, MenuItem, FormControl, FormLabel, Select, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';

import InputField from '../../../components/FormField';
import FormController from '../../../tools/functions/formController';

import Module1 from './Module1';
import Module2 from './Module2';

import initialValues from './initialValues';
import validationSchema from './validationSchema';

export default function Registration() {
  const [status, setStatus] = useState('');
  const submitForm = (values) => {
    console.log(values);
    setStatus(FormController.register(values));
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: submitForm
  });

  function generateBunch({ field, label, helper }) {
    // let { field, label, helper } = value;
    return (
      <InputField field={field} label={label}
        helperText={(formik.touched[field] && formik.errors[field] !== undefined) ? formik.errors[field] : helper}
        error={formik.touched[field] && formik.errors[field] !== undefined}
        {...formik.getFieldProps(field)} />
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
        {[
          { field: 'motherTongue', label: 'Mother Tongue', helper: 'Seperate languages with comma' },
          { field: 'knownLanguages', label: 'Known Tongue', helper: 'Seperate languages with comma' }
        ].map(generateBunch)}
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
        <FormLabel component="legend">Is the applicant's father/ direct relation an ex-serviceman?</FormLabel>
        <RadioGroup row aria-label="isExServiceMan" name="isExServiceMan" defaultValue="yes">
          <FormControlLabel value={"yes"} control={<Radio color="primary" />} label="Yes" />
          <FormControlLabel value={"no"} control={<Radio color="primary" />} label="No" />
        </RadioGroup>
        {[
          { field: 'identificationMarks', label: 'Identification Mark' },
          { field: 'maxQualification', label: 'Maximum Qualification' }
        ].map(generateBunch)}
        <hr />
        <FormLabel component="legend">SSLC</FormLabel>
        {[
          { field: 'SSLC_institute', label: 'Institute' },
          { field: 'SSLC_address', label: 'Address' },
          { field: 'SSLC_percentage', label: 'Percentage' },
          { field: 'SSLC_dateOfPassing', label: 'Date of passing' },
        ].map(generateBunch)}
        <hr />
        <FormLabel component="legend">HSC</FormLabel>
        {[
          { field: 'HSC_institute', label: 'Institute' },
          { field: 'HSC_address', label: 'Address' },
          { field: 'HSC_percentage', label: 'Percentage' },
          { field: 'HSC_dateOfPassing', label: 'Date of passing' },
        ].map(generateBunch)}
        <hr />
        <FormLabel component="legend">College</FormLabel>
        {[
          { field: 'college_institute', label: 'Institute' },
          { field: 'college_address', label: 'Address' },
          { field: 'college_percentage', label: 'Percentage' },
          { field: 'college_dateOfPassing', label: 'Date of passing' },
        ].map(generateBunch)}
        <hr />
        <FormLabel component="legend">Documents</FormLabel>
        {[
          { field: 'documents_aadhar', label: 'Aadhar' },
          { field: 'documents_voter', label: 'Voter' },
          { field: 'documents_SSLC', label: 'SSLC' },
          { field: 'documents_HSC', label: 'HSC' },
          { field: 'documents_deg', label: 'Degree' },
          { field: 'documents_photo', label: 'Photo' },
          { field: 'documents_signature', label: 'Signature' }
        ].map(generateBunch)}

        <Button variant="contained" color="default" type='submit'>
          Submit
        </Button>
      </form>
    </Container>
  )
}


//             {...formik.getFieldProps("name")}
//             helperText={formik.touched.name && formik.errors.name}
//             error={formik.touched.name && formik.errors.name !== undefined}