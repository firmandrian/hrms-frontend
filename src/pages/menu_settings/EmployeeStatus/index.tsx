import React, { useEffect, useState } from 'react'

//import file
import Form from 'src/views/components/form/Form'
import Borders from 'src/views/components/border/Borders'
import SelectNative from 'src/views/components/select/SelectNative'
import TableReusable from 'src/views/components/table/TableReusable'
import Paginations from 'src/views/components/pagination/Paginations'
import ButtonComponent from 'src/views/components/button/ButtonComponent'
import TableSort from 'src/views/components/table-settings/EmployeeStatus'

//import komponen MUI
import Box from '@mui/material/Box'

interface Data {
  name: string
}

export default function EmployeeStatus() {
  const [data, setData] = useState<Data[]>([])

  return (
    <>
      <Box>
        <Borders statusText='employment status' showBordersBox={true} showDatePicker={false}>
          <TableSort />
          {/* <SelectNative /> */}
          {/* <Paginations /> */}
        </Borders>
      </Box>
    </>
  )
}
