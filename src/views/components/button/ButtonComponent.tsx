import * as React from 'react'

//import komponen MUI
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

interface ButtonProps {
  onAddClick: () => void
  backgroundColor: string
  text?: string
  fontSize: string
  width: string
  height: string
  border: string
  textTransform: 'none'
  marginTop?: string
  marginLeft?: string
  // jenis fungsi type button
  buttonType?: 'button' | 'submit' | 'reset'
}
export default function ButtonComponent(props: ButtonProps) {
  return (
    <Stack spacing={2} direction='row' marginX={'10px'} marginY={'10px'}>
      <Button
        variant='contained'
        onClick={props.onAddClick}
        style={{
          backgroundColor: props.backgroundColor,
          fontSize: props.fontSize,
          width: props.width,
          textTransform: props.textTransform,
          border: props.border,
          height: props.height,
          marginTop: props.marginTop,
          marginLeft: props.marginLeft
        }}
      >
        {props.text}
      </Button>
    </Stack>
  )
}
