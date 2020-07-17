import React from 'react';
import { TextField, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

export default function Module1({ controller: formik, generateBunch }: any) {
  const nameGroup = [
    { field: "name", label: "Full Name", helper: "Format: FirstName MiddleName LastName Initial" },
    { field: "fatherName", label: "Father Name", helper: "Format: FirstName MiddleName LastName Initial" },
    { field: "motherName", label: "Mother Name", helper: "Format: FirstName MiddleName LastName Initial" }
  ];
  return (
    <>
      {nameGroup.map(generateBunch)}
      <FormControl variant="outlined">
        <InputLabel id="sex">Sex</InputLabel>
        <Select
          labelId="sex"
          id="sex"
          label="Sex"{...formik.getFieldProps('sex')} >
          <MenuItem value={"M"}>Male</MenuItem>
          <MenuItem value={"F"}>Female</MenuItem>
          <MenuItem value={"T"}>Transgender</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel id="maritalStatus">Marital status</InputLabel>
        <Select
          labelId="maritalStatus"
          id="maritalStatus"
          label="Marital status"
          {...formik.getFieldProps('maritalStatus')} >
          <MenuItem value={"M"}>Married</MenuItem>
          <MenuItem value={"S"}>Unmarried</MenuItem>
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
        defaultValue="2000-05-24" />
    </>
  );
}
