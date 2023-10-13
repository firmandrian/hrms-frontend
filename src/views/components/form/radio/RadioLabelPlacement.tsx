// ** MUI Imports
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

interface RadioLabelPlacement {
  text: string
  value?: string
  selectValue?: string
  onRadioChange: (value: string) => void
}
const RadioLabelPlacement = (props: RadioLabelPlacement) => {
  return (
    <RadioGroup
      row
      aria-label='position'
      name='horizontal'
      value={props.selectValue}
      onChange={e => props.onRadioChange(e.target.value)}
      sx={{ mt: 4 }}
    >
      <FormControlLabel value={props.value} control={<Radio />} label={props.text} />
    </RadioGroup>
  )
}

export default RadioLabelPlacement
