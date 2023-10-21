import React from 'react'

//import file
import Form from 'src/views/components/form/Form'
import Borders from 'src/views/components/border/Borders'
import Textarea from 'src/views/components/form/textarea/Textarea'
import SelectNative from 'src/views/components/select/SelectNative'
import TableJobTitle from 'src/views/components/table-settings/job'
import Paginations from 'src/views/components/pagination/Paginations'
import ButtonComponent from 'src/views/components/button/ButtonComponent'
import InputFileUpload from 'src/views/components/button/InputFileUpload'

//import komponen MUI
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

//data dan kolom untuk tabel
const columns = ['Job Title', 'Job Description']
const data = [
  { 'Job Title': 'Administrative Assistant', 'Job Description': '' },
  { 'Job Title': 'Administrative Supervisor', 'Job Description': '' },
  { 'Job Title': 'Cleaner', 'Job Description': '' },
  { 'Job Title': 'HR Officer', 'Job Description': '' },
  { 'Job Title': 'HR Supervisor', 'Job Description': '' }
]

//styling modal
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '90%',
  width: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 1
}

//styling border
const commonStyles = {
  bgcolor: 'background.paper',
  m: 1,
  borderColor: 'text.primary',
  width: '5rem',
  height: '5rem'
}
export default function Job() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <Box>
        <Borders columns={columns} data={data} statusText='job titles' showBordersBox={true} showDatePicker={false}>
          <TableJobTitle columns={columns} data={data} />
        </Borders>
      </Box>
    </>
  )
}
