import React, { useState } from 'react'

//import file
import Borders from 'src/views/components/border/Borders'
import TableReusable from 'src/views/components/table/TableReusable'
import Paginations from 'src/views/components/pagination/Paginations'
import ButtonComponent from 'src/views/components/button/ButtonComponent'
import Select from 'src/views/components/select/Select'

//import komponen MUI
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import FormDate from 'src/views/components/form/FormDate'

//data tabel (sementara) yang dikirim
const columns = ['Payroll Period', 'Attendance Cut-off', 'Pay Out Date']

//data dan kolom untuk tabel
const data = [
  {
    'Payroll Period': 'Cupcake',
    'Attendance Cut-off': <FormDate />,
    'Pay Out Date': <FormDate />
  },
  {
    'Payroll Period': 'Donut',
    'Attendance Cut-off': <FormDate />,
    'Pay Out Date': <FormDate />
  }
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

export default function CutOff() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  //state untuk menampilkan data pada table dengan nilai default false
  const [DataTable, setDataTable] = useState(false)
  const [showEditButton, setShowEditButton] = useState(false)
  const [showGenereteExcel, setshowGenereteExcel] = useState(false)

  /**
   * Mengatur status tabel data menjadi true ketika tombol sukses diklik.
   */
  const handleSuccessClick = () => {
    setDataTable(true)
    setshowGenereteExcel(true)
    setShowEditButton(true)
  }

  return (
    <>
      <Box>
        <Borders
          columns={columns}
          data={data}
          statusText='cut-off period'
          showBordersBox={true}
          showDatePicker={true}
          useDefaultValue={true}
        >
          <ButtonComponent
            onAddClick={handleSuccessClick}
            backgroundColor='#3CBC8D'
            text='Add'
            width='55px'
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
      {/* borders kedua */}
      <Box>
        <Borders
          columns={columns}
          data={data}
          statusText='cut-off period'
          showBordersBox={false}
          showDatePicker={false}
        >
          <Stack spacing={1} direction='row'>
            {showEditButton && (
              <ButtonComponent
                onAddClick={handleSuccessClick}
                backgroundColor='#3CBC8D'
                text='Edit'
                width='55px'
                fontSize='14px'
                border='1px solid'
                height='40px'
                textTransform='none'
              />
            )}
            {showGenereteExcel && (
              <ButtonComponent
                onAddClick={handleSuccessClick}
                backgroundColor='#3CBC8D'
                text='Generate to Excel'
                width='173px'
                fontSize='14px'
                border='1px solid'
                height='40px'
                textTransform='none'
                marginTop='11px'
                marginLeft='-12px'
              />
            )}
          </Stack>
          <TableReusable columns={columns} data={DataTable ? data : []} />
          <Select />
          <Paginations />
        </Borders>
      </Box>
    </>
  )
}
