import React from 'react';
import { TextField, FormLabel } from '@material-ui/core';

export default function QualificationDetails({ controller: formik, generateBunch }: any) {
  return (
    <>
      <hr />

      <FormLabel component="legend">SSLC</FormLabel>
      {[
        { field: 'SSLC_institute', label: 'Institute' },
        { field: 'SSLC_address', label: 'Address' },
        { field: 'SSLC_percentage', label: 'Percentage' },
      ].map(generateBunch)}
      <TextField
        label="Date of Passing"
        type="date"
        variant="outlined"
        {...formik.getFieldProps('SSLC_dateOfPassing')}
      />
      <hr />
      <FormLabel component="legend">HSC</FormLabel>
      {[
        { field: 'HSC_institute', label: 'Institute' },
        { field: 'HSC_address', label: 'Address' },
        { field: 'HSC_percentage', label: 'Percentage' },
      ].map(generateBunch)}
      <TextField
        label="Date of Passing"
        type="date"
        variant="outlined"
        {...formik.getFieldProps('HSC_dateOfPassing')}
      />
      <hr />
      <FormLabel component="legend">College</FormLabel>
      {[
        { field: 'college_degree', label: 'Degree' },
        { field: 'college_department', label: 'Department' },
        { field: 'college_institute', label: 'Institute' },
        { field: 'college_university', label: 'University' },
        { field: 'college_address', label: 'Address' },
        { field: 'college_percentage', label: 'Percentage' },
      ].map(generateBunch)}
      <TextField
        label="Date of Passing"
        type="date"
        variant="outlined"
        {...formik.getFieldProps('college_dateOfPassing')}
      />
      <hr />
    </>
  );
}
