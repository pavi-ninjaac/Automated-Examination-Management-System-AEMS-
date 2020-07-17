import React from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

export default function Module2({ controller: formik, generateBunch }: any) {
  const placeGroup = [
    { field: "placeOfBirth", label: "Place of Birth" },
    { field: "native", label: "Native" }
  ];
  const group2 = [
    { field: 'nationality', label: 'Nationality', helper: 'Your main citizenship' },
    { field: 'mobileNumber', label: 'Mobile Number', helper: 'without +91' },
    { field: 'email', label: 'Email' },
    { field: 'permanentAddress', label: 'Permanent Address' },
    { field: 'presentAddress', label: 'Present Address' },
    { field: 'aadhaarNo', label: 'Aadhaar ID' },
    { field: 'voterId', label: 'Voter ID' },
  ]
  return (
    <>
      {placeGroup.map(generateBunch)}
      <FormControl variant="outlined">
        <InputLabel id="religion">Religion</InputLabel>
        <Select labelId="religion" id="religion" label="Religion"
          {...formik.getFieldProps('religion')}>
          <MenuItem value={"H"}>Hindu</MenuItem>
          <MenuItem value={"C"}>Christian</MenuItem>
          <MenuItem value={"M"}>Muslim</MenuItem>
          <MenuItem value={"O"}>Other</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel id="caste">Caste</InputLabel>
        <Select labelId="caste" id="caste" label="Caste"
          {...formik.getFieldProps('caste')}>
          <MenuItem value={"BC"}>Backward Caste</MenuItem>
          <MenuItem value={"MBC"}>MBC</MenuItem>
          <MenuItem value={"SC"}>SC</MenuItem>
          <MenuItem value={"OC"}>Other</MenuItem>
        </Select>
      </FormControl>
      {group2.map(generateBunch)}
    </>
  );
}
