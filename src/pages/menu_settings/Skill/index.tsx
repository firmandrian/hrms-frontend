import React from 'react'

//import file
import Borders from 'src/views/components/border/Borders'
import TableSkill from 'src/views/components/table-settings/skill'
// import SelectNative from 'src/views/components/select/SelectNative'
// import Paginations from 'src/views/components/pagination/Paginations'

//import komponen MUI
import Box from '@mui/material/Box'

export default function Skill() {
  return (
    <>
      <Box>
        <Borders statusText='skill' showBordersBox={true} showDatePicker={false}>
          <TableSkill />
          {/* <SelectNative />
          <Paginations /> */}
        </Borders>
      </Box>
    </>
  )
}
