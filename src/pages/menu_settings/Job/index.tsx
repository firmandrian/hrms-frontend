import React from 'react'

//import file
import Borders from 'src/views/components/border/Borders'
import TableReusable from 'src/views/components/table/TableReusable'
import Form from 'src/views/components/form/Form'
import Paginations from 'src/views/components/pagination/Paginations'
import ButtonComponent from 'src/views/components/button/ButtonComponent'
import Select from 'src/views/components/select/Select'
import Textarea from 'src/views/components/form/textarea/Textarea'
import InputFileUpload from 'src/views/components/button/InputFileUpload'

//import komponen MUI
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

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
          <Form showParagrafRight={true} text='Showing 5/5 entries' marginLeft='10px' width='30%' marginTop='-2px' />
          <TableReusable columns={columns} data={data} />
          <Select />
          <Paginations />
        </Borders>
      </Box>
      {/* awal modal  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={{ ...style, padding: 0 }}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            <Borders
              statusText='Add Job Title'
              columns={[]}
              data={[]}
              showBordersBox={true}
              showDatePicker={false}
              children={undefined}
            />
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            {/* kolom form pertama pada modal  */}
            <Box sx={{ marginLeft: '30px', marginBottom: '30px', marginRight: '50px' }}>
              <Form width='500px' showParagrafLeft={true} text='Name' showSpan={true} marginLeft='94px' />
            </Box>

            {/* kolom form kedua pada modal  */}
            <Textarea
              showParagrafLeft={true}
              text='Text Description'
              marginLeft='44px'
              height='150px'
              marginButtom='30px'
              marginRight='50px'
            />

            {/* kolom form ketiga pada modal  */}
            <InputFileUpload
              showParagrafLeft={true}
              text='Job Spesification'
              showParagrafButtom={true}
              TextButtom='Accepts up to 1MB'
              width='7rem'
              textTransform='none'
              backgroundColor='#248AAF'
              color='#FFFFFF'
              height='37px'
              fontSize='13px'
              marginRight='40px'
              marginLeft='200px'
            />

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
            <Box sx={{ ...commonStyles, borderBottom: 1, width: 'auto', marginTop: '-80px', marginX: '20px' }} />

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
