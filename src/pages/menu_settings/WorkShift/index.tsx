import React, { useState } from 'react'
import ColorPicker from 'src/views/components/colorPicker/ColorPicker'

//import file
import Form from 'src/views/components/form/Form'
import Borders from 'src/views/components/border/Borders'
import SelectNative from 'src/views/components/select/SelectNative'
import TableReusable from 'src/views/components/table/TableReusable'
import Paginations from 'src/views/components/pagination/Paginations'
import ButtonComponent from 'src/views/components/button/ButtonComponent'
import AutocompleteOptions from 'src/views/components/form/autocomplete/AutocompleteOptions'

//import komponen MUI
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

//data dan kolom untuk tabel
const columns = ['Shift Code', 'From', 'To', 'Hour Per Day', 'Color']
const data = [
  { 'Shift Code': 'Cupcake', From: 305, To: 3.7, 'Hour Per Day': 67, Color: <ColorPicker /> },
  { 'Shift Code': 'Donut', From: 452, To: 25.0, 'Hour Per Day': 51, Color: <ColorPicker /> }
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

export default function WorkShift() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
    setFromTime('00:00')
    setToTime('00:00')
  }
  const handleClose = () => {
    setOpen(false)
    setFromTime('00:00')
    setToTime('00:00')
  }
  const [fromTime, setFromTime] = useState('00:00')
  const [toTime, setToTime] = useState('00:00')

  const handleFromTime = (value: React.SetStateAction<string>) => {
    setFromTime(value)
  }

  const handleToTime = (value: React.SetStateAction<string>) => {
    setToTime(value)
  }

  const totalDuration = () => {
    if (fromTime && toTime) {
      const currentYear = new Date().getFullYear()
      const from = new Date(`${currentYear}-01-01 ${fromTime}`)
      const to = new Date(`${currentYear}-01-01 ${toTime}`)
      const duration = (to.getTime() - from.getTime()) / 3600000
      let hours = Math.floor(duration)

      if (hours < 0) {
        hours += 24
      }
      return `Duration ${hours}`
    }
  }
  return (
    <>
      <Box>
        <Borders columns={columns} data={data} statusText='work shifts' showBordersBox={true} showDatePicker={false}>
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
          <Form
            showForm={true}
            showParagrafRight={true}
            text='Showing 5/5 entries'
            marginLeft='10px'
            width='30%'
            marginTop='-2px'
          />
          <TableReusable columns={columns} data={data} />
          <SelectNative />
          <Paginations />
        </Borders>
      </Box>

      {/* komponen awal modal  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={{ ...style, padding: 0 }}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            <Borders
              statusText='Add Work Shift'
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
              <Form
                showForm={true}
                width='550px'
                showParagrafLeft={true}
                text='Shift Code'
                showSpan={true}
                marginLeft='64px'
              />

              {/* kolom form kedua pada modal  */}
              <Stack spacing={4} direction='row' marginY={'20px'}>
                <Form showForm={false} showParagrafLeft={true} text='Work Hours' showSpan={true} />
                <AutocompleteOptions
                  text='From'
                  marginLeft='45px'
                  marginTop='10px'
                  marginRight='20px'
                  onValueChange={handleFromTime}
                />
                <AutocompleteOptions text='To' marginTop='10px' marginRight='20px' onValueChange={handleToTime} />
                <p style={{ marginTop: '10px', fontSize: '14px' }}>{totalDuration()}</p>
              </Stack>
            </Box>

            <p
              style={{
                marginLeft: '29px',
                marginTop: '3rem',
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
