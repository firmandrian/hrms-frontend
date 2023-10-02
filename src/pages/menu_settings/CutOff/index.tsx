import React, { useState } from 'react'

//import file
import Borders from 'src/views/components/border/Borders'
import FormDate from 'src/views/components/form/FormDate'

//data tabel (sementara) yang dikirim
const columns = ['Payroll Period', 'Attendance Cut-off', 'Pay Out Date']
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
function CutOff() {
  //state untuk menampilkan data pada table dengan nilai default false
  const [DataTable, setDataTable] = useState(false)

  /**
   * Mengatur status tabel data menjadi true ketika tombol sukses diklik.
   */
  const handleSuccessClick = () => {
    setDataTable(true)
  }

  return (
    <>
      <Borders
        statusText='cut-off period'
        showDatePicker={true}
        columns={[]}
        data={[]}
        showPagination={false}
        showModals={false}
        showBordersBox={true}
        showButtonSuccess={true}
        text='Search'
        onClick={handleSuccessClick}
      />
      <Borders
        statusText='cut-off period'
        columns={columns}
        data={DataTable ? data : []}
        showBordersBox={false}
        showModals={true}
        showForm={false}
        showPagination={true}
        showSelect={true}
        onClick={handleSuccessClick}
      />
    </>
  )
}

export default CutOff
