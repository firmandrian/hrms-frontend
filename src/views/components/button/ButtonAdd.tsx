import * as React from 'react'

//import komponen MUI
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

interface ButtonAddProps {
  onAddClick: () => void
}
export default function ButtonAdd({ onAddClick }: ButtonAddProps) {
  return (
    <Stack spacing={2} direction='row' marginX={'10px'} marginY={'10px'}>
      <Button
        variant='contained'
        onClick={onAddClick}
        style={{
          backgroundColor: '#3CBC8D',
          border: '1px solid',
          fontSize: '14px',
          textTransform: 'none',
          height: '40px'
        }}
      >
        Add
      </Button>
      <Button
        variant='contained'
        style={{ backgroundColor: '#E9422E', border: '1px solid', fontSize: '14px', textTransform: 'none' }}
      >
        Delete
      </Button>
    </Stack>
  )
}
