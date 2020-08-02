import React from 'react';
import { TextField, InputLabel, MenuItem, FormControl, Select, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';

export default function BasicDetails({ controller: formik, generateBunch }: any) {
  const nameGroup = [
    { field: "name", label: "Full Name", helper: "Format: FirstName MiddleName LastName Initial" },
    { field: "fatherName", label: "Father Name", helper: "Format: FirstName MiddleName LastName Initial" },
    { field: "motherName", label: "Mother Name", helper: "Format: FirstName MiddleName LastName Initial" }];

  const placeGroup = [
    { field: "placeOfBirth", label: "Place of Birth" },
    { field: "native", label: "Native" }
  ];

  return (
    <>
      <RadioGroup row aria-label="Role" name="role" {...formik.getFieldProps("role")}>
        <FormControlLabel value={"Primary"} control={<Radio color="primary" />} label="Primary" />
        <FormControlLabel value={"High"} control={<Radio color="primary" />} label="High" />
      </RadioGroup>
      {nameGroup.map(generateBunch)}
      <FormControl variant="outlined">
        <InputLabel id="sex">Sex</InputLabel>
        <Select
          labelId="sex"
          id="sex"
          label="Sex"{...formik.getFieldProps('sex')}>
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
          <MenuItem value={"Transgender"}>Transgender</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel id="maritalStatus">Marital status</InputLabel>
        <Select
          labelId="maritalStatus"
          id="maritalStatus"
          label="Marital status"
          {...formik.getFieldProps('maritalStatus')} >
          <MenuItem value={"Married"}>Married</MenuItem>
          <MenuItem value={"Unmarried"}>Unmarried</MenuItem>
        </Select>
      </FormControl>
      {generateBunch({
        field: 'spouseName', label: "Spouse Name",
        helper: "Format: FirstName MiddleName LastName Initial"
      })}
      <TextField
        label="Birthday"
        type="date"
        variant="outlined"
        {...formik.getFieldProps('dateOfBirth')}
      />
      {placeGroup.map(generateBunch)}
      <FormControl variant="outlined">
        <InputLabel id="religion">Religion</InputLabel>
        <Select labelId="religion" id="religion" label="Religion"
          {...formik.getFieldProps('religion')}>
          <MenuItem value={"Hindu"}>Hindu</MenuItem>
          <MenuItem value={"Christian"}>Christian</MenuItem>
          <MenuItem value={"Muslim"}>Muslim</MenuItem>
          <MenuItem value={"Other"}>Other</MenuItem>
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
      {generateBunch({ field: 'nationality', label: 'Nationality', helper: 'Your main citizenship' })}
    </>
  )
}
