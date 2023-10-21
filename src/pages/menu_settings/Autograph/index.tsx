import React from 'react'

//import file
import Borders from 'src/views/components/border/Borders'
import SelectNative from 'src/views/components/select/SelectNative'
import TableAutograph from 'src/views/components/table-settings/Autograph'
import Paginations from 'src/views/components/pagination/Paginations'

//import komponen MUI
import Box from '@mui/material/Box'

export default function Autograph() {
  return (
    <>
      <Box>
        <Borders statusText='Autograph' showBordersBox={true} showDatePicker={false}>
          {/* <TableReusable columns={columns} data={data} /> */}
          <TableAutograph />
          <SelectNative />
          <Paginations />
        </Borders>
      </Box>
    </>
  )
}
