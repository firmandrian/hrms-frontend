// ** MUI Imports
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Stack from '@mui/material/Stack'

interface SelectProps {
  text?: string
  marginLeft?: string
  marginRight?: string
  marginTop?: string
  width: string
  showSpan?: boolean
  disabled?: boolean
}

const SelectProps = (props: SelectProps) => {
  return (
    <>
      <Stack spacing={2} direction='row'>
        {props.text && (
          <p style={{ marginLeft: '30px', marginTop: '29px', fontSize: '14px', marginRight: '6px' }}>
            {props.text}
            {props.showSpan && <span style={{ color: 'red' }}>*</span>}
          </p>
        )}
        <FormControl>
          <Select
            defaultValue=''
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            size='small'
            sx={{
              width: props.width,
              marginLeft: props.marginLeft,
              marginTop: props.marginTop,
              pointerEvents: props.disabled ? 'none' : 'auto',
              opacity: props.disabled ? 0.5 : 1,
              cursor: props.disabled ? 'no-drop' : 'auto',
              backgroundColor: props.disabled ? 'lightgray' : 'white'
            }}
          >
            <MenuItem value=''>
              <em>--Select--</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </>
  )
}

export default SelectProps
