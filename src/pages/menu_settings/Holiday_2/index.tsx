import React from 'react'

//import file
import Borders from 'src/views/components/border/Borders'
import TableReusable from 'src/views/components/table/TableReusable'
import Form from 'src/views/components/form/Form'
import Paginations from 'src/views/components/pagination/Paginations'
import ButtonComponent from 'src/views/components/button/ButtonComponent'
import Select from 'src/views/components/select/Select'
import FormDatePicker from 'src/views/components/form/FormDatePicker'

//import komponen MUI
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

//data dan kolom untuk tabel
const columns = ['Name', 'Date', 'Repeats Annually', 'Type of Holiday']
const data = [
  { Name: 'Cupcake', Date: '2014-12-01', 'Repeats Annually': 'Yes', 'Type of Holiday': 'Regular' },
  { Name: 'Donut', Date: '2014-12-02', 'Repeats Annually': 'Yes', 'Type of Holiday': 'Regular' }
]

//styling modal
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

export default function Holiday_2() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <Box>
        <Borders columns={columns} data={data} statusText='holiday' showBordersBox={true} showDatePicker={false}>
          <FormDatePicker useDefaultValue={false} />
          <Stack spacing={2} direction='row' marginX={'10px'} marginY={'10px'}></Stack>
          <ButtonComponent
            onAddClick={handleOpen}
            backgroundColor='#3CBC8D'
            text='Search'
            width='80px'
            fontSize='14px'
            border='1px solid'
            height='40px'
            textTransform='none'
          />
        </Borders>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Text in a modal
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>

      {/* border box kedua */}
      <Box>
        <Borders columns={columns} data={data} statusText='holiday data' showBordersBox={true} showDatePicker={false}>
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
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Text in a modal
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  )
}
