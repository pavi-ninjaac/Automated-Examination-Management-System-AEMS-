import React from 'react';

import { Radio, RadioGroup, FormControlLabel, FormLabel } from '@material-ui/core';

export default function AdditionalDetails({ controller: formik, generateBunch }: any) {
  const additional = [
    { field: 'aadhaarNo', label: 'Aadhaar ID' },
    { field: 'voterId', label: 'Voter ID' }
  ];

  return (
    <>
      {additional.map(generateBunch)}
      {[
        { field: 'motherTongue', label: 'Mother Tongue', helper: 'Separate languages with comma' },
        { field: 'knownLanguages', label: 'Known Tongue', helper: 'Separate languages with comma' }
      ].map(generateBunch)}
      <FormLabel component="legend">Is the applicant different-abled?</FormLabel>
      <RadioGroup row aria-label="isDisabled" name="isDisabled" defaultValue="yes" {...formik.getFieldProps("isDisabled")}>
        <FormControlLabel value={"yes"} control={<Radio color="primary" />} label="Yes" />
        <FormControlLabel value={"no"} control={<Radio color="primary" />} label="No" />
      </RadioGroup>
      <FormLabel component="legend">Does the applicant has any criminal records?</FormLabel>
      <RadioGroup row aria-label="isCriminal" name="isCriminal" defaultValue="yes" {...formik.getFieldProps("isCriminal")}>
        <FormControlLabel value={"yes"} control={<Radio color="primary" />} label="Yes" />
        <FormControlLabel value={"no"} control={<Radio color="primary" />} label="No" />
      </RadioGroup>
      <FormLabel component="legend">Is the applicant's father/ direct relation an ex-serviceman?</FormLabel>
      <RadioGroup row aria-label="isExServiceMan" defaultValue="yes" {...formik.getFieldProps("isExServiceMan")}>
        <FormControlLabel value={"yes"} control={<Radio color="primary" />} label="Yes" />
        <FormControlLabel value={"no"} control={<Radio color="primary" />} label="No" />
      </RadioGroup>
      {[
        { field: 'identificationMarks', label: 'Identification Mark' },
        { field: 'maxQualification', label: 'Maximum Qualification' }
      ].map(generateBunch)}
    </>
  );
}
