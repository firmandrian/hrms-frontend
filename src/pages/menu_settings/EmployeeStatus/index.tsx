import React from 'react'

//import file
import Borders from 'src/views/components/border/Borders'
import TableReusable from 'src/views/components/table/TableReusable'
import Form from 'src/views/components/form/Form'
import Paginations from 'src/views/components/pagination/Paginations'
import ButtonComponent from 'src/views/components/button/ButtonComponent'
import Select from 'src/views/components/select/Select'

//import komponen MUI
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

//data dan kolom untuk tabel
const columns = ['Employment Status', 'Position']
const data = [
  { 'Employment Status': 'Abdul', Position: 'Admin' },
  { 'Employment Status': 'Rian', Position: 'HR' },
  { 'Employment Status': 'Rian 2', Position: 'Admin' },
  { 'Employment Status': 'Adit', Position: 'Admin' },
  { 'Employment Status': 'Mz Ai', Position: 'Admin' },
  { 'Employment Status': 'Soleh', Position: 'Bapaknya adit' },
  { 'Employment Status': 'Halimah', Position: 'HR' }
]

//styling modal
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
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

export default function EmployeeStatus() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <Box>
        <Borders
          columns={columns}
          data={data}
          statusText='employment status'
          showBordersBox={true}
          showDatePicker={false}
        >
          <Stack spacing={2} direction='row' marginX={'10px'} marginY={'10px'}>
            <ButtonComponent
              onAddClick={handleOpen}
              backgroundColor='#3CBC8D'
              text='Add'
              width='50px'
              fontSize='14px'
              border='1px solid'
              height='40px'
              textTransform='none'
              marginLeft='-10px'
            />
            <ButtonComponent
              onAddClick={handleOpen}
              backgroundColor='#E9422E'
              text='Delete'
              width='75px'
              fontSize='14px'
              border='1px solid'
              height='40px'
              textTransform='none'
              marginTop='10px'
              marginLeft='-10px'
            />
          </Stack>
          <Form />
          <TableReusable columns={columns} data={data} />
          <Select />
          <Paginations />
        </Borders>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={{ ...style, padding: 0 }}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            <Borders
              statusText='Add Employment Status'
              columns={[]}
              data={[]}
              showBordersBox={true}
              showDatePicker={false}
              children={undefined}
            />
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            {/* kolom form pertama pada modal  */}
            <Stack spacing={2} direction='row' marginX={'30px'} marginY={'10px'}>
              <p style={{ marginLeft: '1px', marginTop: '5px', fontSize: '14px', marginRight: '50px' }}>
                Name <span style={{ color: 'red' }}>*</span>
              </p>
              <Form width='30rem' />
            </Stack>
            <Box sx={{ ...commonStyles, borderBottom: 1, width: '80vh', marginTop: '-60px', marginX: '20px' }} />
          </Typography>
        </Box>
      </Modal>
    </>
  )
}
