// ** MUI Imports
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

interface AutocompleteOptions {
  text?: string
  marginLeft?: string
  marginRight?: string
  marginTop?: string
  onValueChange?: any
}
const timeSlots = Array.from(new Array(24 * 4)).map((_, index) => {
  const hours = Math.floor(index / 4)
  const minutes = (index % 4) * 15
  return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`
})

const AutocompleteOptions = (props: AutocompleteOptions) => {
  return (
    <>
      <Stack spacing={2} direction='row'>
        {props.text && (
          <p
            style={{
              marginLeft: props.marginLeft,
              marginTop: props.marginTop,
              fontSize: '14px',
              marginRight: props.marginRight
            }}
          >
            {props.text}
          </p>
        )}
        <Autocomplete
          size='small'
          sx={{ width: 150 }}
          options={timeSlots}
          id='autocomplete-disabled-options'
          defaultValue={'00:00'}
          renderInput={params => <TextField {...params} />}
          onChange={(event, value) => {
            // console.log(value, 'cek cek')

            props.onValueChange(value)
          }}
        />
      </Stack>
    </>
  )
}

export default AutocompleteOptions
