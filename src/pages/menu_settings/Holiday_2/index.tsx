import React from 'react'

//import file
import Form from 'src/views/components/form/Form'
import Borders from 'src/views/components/border/Borders'
import SelectProps from 'src/views/components/select/SelectProps'
import SelectNative from 'src/views/components/select/SelectNative'
import TableReusable from 'src/views/components/table/TableReusable'
import Paginations from 'src/views/components/pagination/Paginations'
import PickersBasic from 'src/views/components/form/pickers/PickersBasic'
import ButtonComponent from 'src/views/components/button/ButtonComponent'
import RadioLabelPlacement from 'src/views/components/form/radio/RadioLabelPlacement'
import CheckboxesLabelPlacement from 'src/views/components/form/checkbox/CheckboxLabelPlacement'

//import komponen MUI
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'

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

const getYear = new Date().getFullYear()

export default function Holiday_2() {
  const handleOpen = () => setOpen(true)

  //state untuk membuka dan menutup modal
  const [open, setOpen] = React.useState(false)
  const handleClose = () => {
    setOpen(false)
    handleCheckboxChange()
    setIsDaySelectDisabled(true)
    setOnSelectDisabled(true)
    setSelectRadio('controlled-unchecked')
  }

  //state untuk menampilkan data pada modal yang akan ditampilkan
  const [isYearVisible, setIsYearVisible] = React.useState(false)
  const [isMonthVisible, setIsMonthVisible] = React.useState(false)
  const [isDayVisible, setIsDayVisible] = React.useState(false)
  const [isOn, setIsOn] = React.useState(false)
  const [isDate, setIsDate] = React.useState(true)

  //state untuk mengatur radio button
  const [selectRadio, setSelectRadio] = React.useState('controlled-unchecked')
  const [daySelectDisabled, setIsDaySelectDisabled] = React.useState(true)
  const [onSelectDisabled, setOnSelectDisabled] = React.useState(true)

  /*
   * Fungsi untuk mengatur radio button.
   * mengubah state awal isDaySelectDisabled, isOnSelectDisabled (true).
   * kondisi true berarti radio button menjadi disabled.
   */
  const handleRadioChange = (value: string) => {
    setSelectRadio(value)
    if (value === 'start') {
      setIsDaySelectDisabled(true)
      setOnSelectDisabled(false)
    } else if (value === 'end') {
      setIsDaySelectDisabled(false)
      setOnSelectDisabled(true)
    }
  }

  /*
   * Mengatur checkbox untuk menampilkan dan menyembunyikan component select.
   * mengubah state awal isYearVisible, isMonthVisible, isDayVisible, isOn, isDate.
   */
  const handleCheckboxChange = () => {
    setIsYearVisible(!isYearVisible)
    setIsMonthVisible(!isMonthVisible)
    setIsDayVisible(!isDayVisible)
    setIsOn(!isOn)
    setIsDate(!isDate)
  }

  return (
    <>
      {/* border box pertama */}
      <Box>
        <Borders columns={columns} data={data} statusText='holiday' showBordersBox={true} showDatePicker={false}>
          <Box sx={{ marginTop: '15px' }}>
            <PickersBasic
              useDefaultValue={false}
              ShowFromDate={true}
              ShowToDate={true}
              textFrom='From'
              textTo='To'
              marginLeft='10px'
              width='300px'
              marginRight='7px'
              marginTop='25px'
            />
          </Box>
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
      {/* akhir border box pertama */}

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
      {/* akhir border box kedua */}

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
              statusText='Add Holiday'
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
                width='350px'
                showParagrafLeft={true}
                text='Name'
                showSpan={true}
                marginLeft='75px'
              />
            </Box>
            <CheckboxesLabelPlacement text='Repeats Annualy' onClick={handleCheckboxChange} marginLeft='17px' />
            {isYearVisible && (
              <Stack spacing={2} direction='row' marginX={'30px'} marginY={'10px'}>
                <p>Year</p>
                <p style={{ marginTop: '17px', marginLeft: '106px', fontSize: '14px' }}>{getYear}</p>
              </Stack>
            )}
            {isMonthVisible && (
              <Stack spacing={2} direction='row' marginX={'1px'} marginY={'10px'}>
                <SelectProps text='Month' marginLeft='78px' marginTop='15px' width='350px' showSpan={true} />
              </Stack>
            )}
            {isDate && (
              <PickersBasic
                textFrom='Date'
                ShowFromDate={true}
                marginLeft='30px'
                marginRight='95px'
                width='350px'
                marginTop='10px'
                showSpan={true}
              />
            )}

            {isDayVisible && (
              <Stack spacing={2} direction='row' marginX={'30px'} marginY={'10px'}>
                <RadioLabelPlacement
                  value='start'
                  selectValue={selectRadio}
                  onRadioChange={handleRadioChange}
                  text='Day :'
                />
                <SelectProps marginLeft='50px' marginTop='20px' width='350px' disabled={onSelectDisabled} />
              </Stack>
            )}

            {isOn && (
              <Stack spacing={2} direction='row' marginX={'30px'} marginY={'10px'}>
                <RadioLabelPlacement
                  value='end'
                  selectValue={selectRadio}
                  onRadioChange={handleRadioChange}
                  text='On :'
                />
                <SelectProps marginLeft='60px' marginTop='20px' width='150px' disabled={daySelectDisabled} />
                <SelectProps marginLeft='40px' marginTop='20px' width='150px' disabled={daySelectDisabled} />
              </Stack>
            )}

            <SelectProps text='Type of Holiday' marginLeft='26px' marginTop='25px' width='350px' />
            <p
              style={{
                marginLeft: '29px',
                marginTop: '1rem',
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
