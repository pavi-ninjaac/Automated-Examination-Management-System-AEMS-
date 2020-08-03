import React from 'react'
import { Typography } from '@material-ui/core'

export default function Footer() {
  return (
    <div style={{ marginTop: '2rem', backgroundColor: '#601e9e', padding: '1rem' }}>
      <Typography variant='body1' style={{ color: 'white', textAlign: 'center' }}>&copy; Copyrights, 2020 - Government of Sikkim</Typography>
    </div>
  )
}
