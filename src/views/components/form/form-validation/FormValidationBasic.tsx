import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Stack from '@mui/material/Stack'

interface FormValidationBasic {
  text?: string
}
export default function FormValidationBasic(props: FormValidationBasic) {
  const [age, setAge] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }

  return (
    <>
      <Stack spacing={2} direction='row'>
        {props.text && (
          <p style={{ marginLeft: '30px', marginTop: '15px', fontSize: '14px', marginRight: '6px' }}>{props.text}</p>
        )}
        <FormControl size='small' style={{ marginTop: '15px', width: '350px', marginLeft: '30px' }}>
          <InputLabel id='demo-select-small-label'>--Select--</InputLabel>
          <Select
            labelId='demo-select-small-label'
            id='demo-select-small'
            value={age}
            label='Age'
            onChange={handleChange}
          >
            <MenuItem value=''>
              <em>--Select--</em>
            </MenuItem>
            <MenuItem value={'Regular'}>Regular</MenuItem>
            <MenuItem value={'Special Holiday'}>Special Holiday</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </>
  )
}
