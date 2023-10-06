import * as React from 'react'
// import Button from '@mui/joy/Button'
import Button from '@mui/material/Button'
import { styled } from '@mui/joy'

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  position: absolute;
`

export default function InputFileUpload() {
  return (
    <Button
      component='label'
      role={undefined}
      tabIndex={-1}
      //   variant='outlined'
      style={{
        textTransform: 'none',
        width: '7rem',
        backgroundColor: '#248AAF',
        color: '#FFFFFF',
        height: '37px',
        fontSize: '13px'
      }}
    >
      Choose FiLe
      <VisuallyHiddenInput type='file' />
    </Button>
  )
}
