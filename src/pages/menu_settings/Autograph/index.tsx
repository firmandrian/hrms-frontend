import React from 'react'

//import file
import Borders from 'src/views/components/border/Borders'
import TableReusable from 'src/views/components/table/TableReusable'
import Form from 'src/views/components/form/Form'
import Paginations from 'src/views/components/pagination/Paginations'
import ButtonComponent from 'src/views/components/button/ButtonComponent'
import Select from 'src/views/components/select/Select'
import InputFileUpload from 'src/views/components/button/InputFileUpload'

//import komponen MUI
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

//data dan kolom untuk tabel
const columns = ['Name', 'Position']
const data = [
  { Name: 'Cupcake', Position: 305 },
  { Name: 'Donut', Position: 452 }
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
export default function Autograph() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <Box>
        <Borders columns={columns} data={data} statusText='Autograph' showBordersBox={true} showDatePicker={false}>
          <Stack spacing={2} direction='row' marginX={'10px'} marginY={'10px'}>
            <ButtonComponent
              onAddClick={handleOpen}
              backgroundColor='#3CBC8D'
              text='Add'
              width='55px'
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
          <Form text='Showing 5/5 entries' marginLeft='10px' width='30%' marginTop='-2px' />
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
              columns={[]}
              data={[]}
              statusText='Add Autograph'
              showBordersBox={true}
              showDatePicker={false}
              children={undefined}
            />
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 0 }}>
            {/* kolom form pertama pada modal  */}
            <Stack spacing={2} direction='row' marginX={'30px'} marginY={'10px'}>
              <p style={{ marginLeft: '1px', marginTop: '5px', fontSize: '14px', marginRight: '65px' }}>
                Name <span style={{ color: 'red' }}>*</span>
              </p>
              <Form width='30rem' />
            </Stack>

            {/* kolom form kedua pada modal  */}
            <Stack spacing={2} direction='row' marginX={'30px'} marginY={'30px'}>
              <p style={{ marginLeft: '1px', marginTop: '5px', fontSize: '14px', marginRight: '50px' }}>
                Position <span style={{ color: 'red' }}>*</span>
              </p>
              <Form width='30rem' />
            </Stack>

            {/* kolom form ketiga pada modal  */}
            <Stack spacing={2} direction='row' marginX={'30px'} marginTop={'30px'}>
              <p style={{ marginLeft: '1px', marginTop: '5px', fontSize: '14px', marginRight: '32px' }}>
                Autograph <span style={{ color: 'red' }}>*</span>
              </p>
              <InputFileUpload />
            </Stack>
            <p style={{ marginLeft: '16vh', marginTop: '5px', fontSize: '14px', marginRight: '32px' }}>
              Accepts up to 20MB
            </p>
            <p
              style={{
                marginLeft: '29px',
                marginTop: '5rem',
                fontSize: '14px',
                marginRight: '32px'
              }}
            >
              <span style={{ color: 'red' }}>*</span> Required Field
            </p>
            {/* borders di modal */}
            <Box sx={{ ...commonStyles, borderBottom: 1, width: '80vh', marginTop: '-80px', marginX: '20px' }} />

            {/* tombol di modal  */}
            <Stack spacing={2} direction='row' marginX={'30px'} marginY={'10px'} justifyContent={'flex-end'}>
              <ButtonComponent
                onAddClick={handleOpen}
                backgroundColor='#3CBC8D'
                text='Save'
                width='55px'
                fontSize='14px'
                border='1px solid'
                height='40px'
                textTransform='none'
                marginLeft='-10px'
              />
              <ButtonComponent
                onAddClick={handleClose}
                backgroundColor='#E9422E'
                text='Cancel'
                width='75px'
                fontSize='14px'
                border='1px solid'
                height='40px'
                textTransform='none'
                marginTop='10px'
                marginLeft='-10px'
              />
            </Stack>
          </Typography>
        </Box>
      </Modal>
      {/* akhir modal  */}
    </>
  )
}
