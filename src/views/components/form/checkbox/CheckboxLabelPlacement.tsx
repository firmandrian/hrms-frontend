import React from 'react'

// ** MUI Imports
import Stack from '@mui/material/Stack'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

interface CheckboxesLabelPlacement {
  text?: string
  marginLeft?: string
  onClick?: () => void
}

const CheckboxesLabelPlacement = (props: CheckboxesLabelPlacement) => {
  return (
    <>
      <Stack spacing={2} direction='row'>
        {props.text && (
          <p style={{ marginLeft: '30px', marginTop: '5px', fontSize: '14px', marginRight: '6px' }}>{props.text}</p>
        )}
        <FormControlLabel
          value='start'
          label=''
          control={<Checkbox />}
          style={{ marginTop: '-5px', marginLeft: props.marginLeft }}
          onClick={props.onClick}
        />
      </Stack>
    </>
  )
}

export default CheckboxesLabelPlacement
