// ** MUI Imports
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import Stack from '@mui/material/Stack'

const SelectNative = () => {
  return (
    <>
      <Stack spacing={2} direction='row' marginX={'10px'} marginY={'10px'}>
        <p style={{ marginTop: '17px', fontSize: '14px' }}>Show</p>
        <FormControl variant='standard'>
          {/* <InputLabel htmlFor='age-native-simple'>Age</InputLabel> */}
          <Select
            native
            defaultValue=''
            inputProps={{
              name: 'age',
              id: 'age-native-simple',
              style: {
                marginTop: '10px'
              }
            }}
          >
            <option value={10}>10</option>
            <option value={10}>20</option>
            <option value={10}>50</option>
            <option value={20}>100</option>
            <option value={30}>1000</option>
          </Select>
        </FormControl>
        <p style={{ marginTop: '17px', fontSize: '14px' }}>entries per page</p>
      </Stack>
    </>
  )
}

export default SelectNative
