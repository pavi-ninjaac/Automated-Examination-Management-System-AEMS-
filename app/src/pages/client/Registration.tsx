import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import InputField from '../../components/FormField';
import FormController from '../../tools/functions/formController';

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
        {
          [
            { field: "name", label: "Full Name", helper: "Format: FirstName MiddleName LastName Initial" },
            { field: "fatherName", label: "Father Name", helper: "Format: FirstName MiddleName LastName Initial" },
            { field: "motherName", label: "Mother Name", helper: "Format: FirstName MiddleName LastName Initial" }
          ].map(generateBunch)
        }
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
        {
          [
            { field: "placeOfBirth", label: "Place of Birth" },
            { field: "native", label: "Native" }
          ].map(generateBunch)
        }
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
        {
          [
            { field: 'nationality', label: 'Nationality', helper: 'Your main citizenship' },
            { field: 'mobileNumber', label: 'Mobile Number', helper: 'without +91' },
            { field: 'email', label: 'Email' },
            { field: 'permanentAddress', label: 'Permanent Address' },
            { field: 'presentAddress', label: 'Present Address' },
            { field: 'aadhaarNo', label: 'Aadhaar ID' },
            { field: 'voterId', label: 'Voter ID' },
          ].map(generateBunch)
        }
      </form>
    </Container>
  )
}
