import * as React from 'react'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'

export default function Form() {
  return (
    <>
      <Stack spacing={2} direction='row'>
        <TextField
          id='outlined-basic'
          variant='outlined'
          placeholder='Search...'
          size='small'
          sx={{ width: '30%', marginLeft: '10px' }}
        />
        <p style={{ marginLeft: '10px', marginTop: '5px', fontSize: '14px' }}>showing 5/5 entries</p>
      </Stack>
    </>
  )
}
