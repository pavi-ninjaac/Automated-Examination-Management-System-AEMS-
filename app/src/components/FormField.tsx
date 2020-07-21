import React from 'react'
import { TextField } from '@material-ui/core';

export default function InputField(props: any) {
  const { field, label, helper, large, ...rest } = props;
  return (
    <TextField variant="outlined"
      id={field}
      name={field}
      style={{ margin: "1rem 0" }}
      label={label}
      helperText={!!helper ? helper : null}
      {...rest}
      size={large ? "large" : "small"}
      fullWidth
    />
  )
}
