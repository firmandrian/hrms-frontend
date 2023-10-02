import React from 'react'

//import komponen MUI
import Button from '@mui/material/Button'

interface ButtonSuccessProps {
  text?: string
  onClick?: () => void
}
export default function ButtonSuccess(props: ButtonSuccessProps) {
  return (
    <Button
      variant='contained'
      style={{
        backgroundColor: '#3CBC8D',
        border: '1px solid',
        fontSize: '14px',
        textTransform: 'none',
        height: '40px',
        padding: '15px',
        marginLeft: '10px',
        marginTop: '30px'
      }}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  )
}
