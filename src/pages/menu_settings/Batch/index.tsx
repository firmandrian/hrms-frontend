import React from 'react'

//import file
import Form from 'src/views/components/form/Form'
import Borders from 'src/views/components/border/Borders'
import SelectNative from 'src/views/components/select/SelectNative'
import TableBatch from 'src/views/components/table-settings/Batch'
import Paginations from 'src/views/components/pagination/Paginations'
import ButtonComponent from 'src/views/components/button/ButtonComponent'

//import komponen MUI
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'

export default function Batch() {
  return (
    <>
      <Box>
        <Borders statusText='batch' showBordersBox={true} showDatePicker={false}>
          <TableBatch />
          <SelectNative />
          <Paginations />
        </Borders>
      </Box>
    </>
  )
}
