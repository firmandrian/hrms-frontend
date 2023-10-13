import React, { useState } from 'react'

// Import file
import Borders from 'src/views/components/border/Borders'
import SelectNative from 'src/views/components/select/SelectNative'
import TableReusable from 'src/views/components/table/TableReusable'
import Paginations from 'src/views/components/pagination/Paginations'
import ButtonComponent from 'src/views/components/button/ButtonComponent'

// Import komponen MUI
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import PickersBasic from 'src/views/components/form/pickers/PickersBasic'

export default function CutOff() {
  const [open, setOpen] = React.useState(false)
  const [openSave, setOpenSave] = React.useState(false)

  // State untuk menampilkan data pada tabel dengan nilai default false
  const [DataTable, setDataTable] = useState(false)
  const [showEditButton, setShowEditButton] = useState(false)
  const [showGenerateExcel, setShowGenerateExcel] = useState(false)
  const [isEditing, setIsEditing] = useState(true)

  // Data tabel (sementara) yang dikirim
  const columns = ['Payroll Period', 'Attendance Cut-off', 'Pay Out Date']
  // State untuk data dalam tabel
  const [data, setData] = useState([
    {
      'Payroll Period': 'Cupcake',
      'Attendance Cut-off': <PickersBasic ShowFromDate={true} width='200px' disabled={isEditing} />,
      'Pay Out Date': <PickersBasic ShowFromDate={true} width='200px' disabled={isEditing} />
    },
    {
      'Payroll Period': 'Donut',
      'Attendance Cut-off': <PickersBasic ShowFromDate={true} width='200px' disabled={isEditing} />,
      'Pay Out Date': <PickersBasic ShowFromDate={true} width='200px' disabled={isEditing} />
    }
  ])

  /**
   * Mengatur status tabel data menjadi true ketika tombol sukses diklik.
   */
  const handleSuccessClick = () => {
    setDataTable(true)
    setShowGenerateExcel(true)
    setShowEditButton(true)
  }

  const handleEditButton = () => {
    setOpenSave(!openSave)
    setShowEditButton(!showEditButton)
    setShowGenerateExcel(!showGenerateExcel)
    setIsEditing(false)

    // Mengubah properti disabled dalam data sesuai dengan isEditing
    const updatedData = data.map(item => {
      return {
        ...item,
        'Attendance Cut-off': <PickersBasic ShowFromDate={true} width='200px' disabled={false} />,
        'Pay Out Date': <PickersBasic ShowFromDate={true} width='200px' disabled={false} />
      }
    })

    // Menyimpan data yang telah diperbarui
    setData(updatedData)
  }
  const handleSaveButton = () => {
    setOpenSave(!openSave)
    setIsEditing(true)
    setShowEditButton(true)
    setShowGenerateExcel(true)

    // Mengubah properti disabled dalam data kembali menjadi true
    const updatedData = data.map(item => {
      return {
        ...item,
        'Attendance Cut-off': <PickersBasic ShowFromDate={true} width='200px' disabled={true} />,
        'Pay Out Date': <PickersBasic ShowFromDate={true} width='200px' disabled={true} />
      }
    })

    // Menyimpan data yang telah diperbarui
    setData(updatedData)
  }
  return (
    <>
      {/* borders pertama */}
      <Box>
        <Borders
          columns={columns}
          data={data}
          statusText='cut-off period'
          showBordersBox={true}
          showDatePicker={true}
          useDefaultValue={true}
        >
          <Box sx={{ marginTop: '15px' }}>
            <PickersBasic
              useDefaultValue={true}
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
            onAddClick={handleSuccessClick}
            backgroundColor='#3CBC8D'
            text='Search'
            width='auto'
            fontSize='14px'
            border='1px solid'
            height='40px'
            textTransform='none'
            marginTop='20px'
          />
        </Borders>
      </Box>
      {/* akhir borders pertama */}

      {/* borders kedua */}
      <Box>
        <Borders
          columns={columns}
          data={data}
          statusText='cut-off period'
          showBordersBox={false}
          showDatePicker={false}
        >
          {openSave && (
            <ButtonComponent
              onAddClick={handleSaveButton}
              backgroundColor='#3CBC8D'
              text='Save'
              width='55px'
              fontSize='14px'
              border='1px solid'
              height='40px'
              textTransform='none'
            />
          )}
          <Stack spacing={1} direction='row'>
            {showEditButton && (
              <ButtonComponent
                onAddClick={handleEditButton}
                backgroundColor='#3CBC8D'
                text='Edit'
                width='55px'
                fontSize='14px'
                border='1px solid'
                height='40px'
                textTransform='none'
              />
            )}
            {showGenerateExcel && (
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
          <SelectNative />
          <Paginations />
        </Borders>
      </Box>
      {/* akhir borders kedua */}
    </>
  )
}
