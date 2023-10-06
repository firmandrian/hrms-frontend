import * as React from 'react'

//import komponen MUI
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'

interface FormProps {
  placeholder?: string
  text?: string
  width?: string
  marginLeft?: string
  marginTop?: string
}

export default function Form(props: FormProps) {
  return (
    <>
      <Stack spacing={2} direction='row'>
        <TextField
          id='outlined-basic'
          variant='outlined'
          placeholder={props.placeholder}
          size='small'
          // sx={{ width: '30%', marginLeft: '10px' }}
          style={{
            marginLeft: props.marginLeft,
            width: props.width,
            marginTop: props.marginTop
          }}
        />
        <p style={{ marginLeft: '10px', marginTop: '5px', fontSize: '14px' }}>{props.text}</p>
      </Stack>
    </>
  )
}
