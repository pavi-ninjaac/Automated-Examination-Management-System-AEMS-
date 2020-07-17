import React from 'react'
import { TextField } from '@material-ui/core';

export default function InputField(props: any) {
  const { field, label, helper, large, ...rest } = props;
  return (
    <TextField variant="outlined"
      id={field}
      name={field}
      label={label}
      helperText={helper}
      {...rest}
      size={large ? "large" : "small"}
      fullWidth
    />
  )
}
