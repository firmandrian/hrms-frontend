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
  showParagrafLeft?: boolean
  showParagrafRight?: boolean
  showSpan?: boolean
  showForm?: boolean
}

export default function Form(props: FormProps) {
  return (
    <>
      <Stack spacing={2} direction='row'>
        {props.showParagrafLeft && (
          <p style={{ marginLeft: '1px', marginTop: '5px', fontSize: '14px', marginRight: '26px' }}>
            {props.text}
            {props.showSpan && <span style={{ color: 'red' }}>*</span>}
          </p>
        )}
        {props.showForm && (
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
        )}
        {props.showParagrafRight && (
          <p style={{ marginLeft: '10px', marginTop: '5px', fontSize: '14px' }}>{props.text}</p>
        )}
      </Stack>
    </>
  )
}
