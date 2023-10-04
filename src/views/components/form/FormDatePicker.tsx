import React from 'react'

interface FormDatePickerProps {
  defaultFromDate?: string
  defaultToDate?: string
  useDefaultValue?: boolean
}
export default function FormDatePicker(props: FormDatePickerProps) {
  //ambil tanggal pada tahun ini
  const currentYear = new Date().getFullYear()

  //ambil tanggal 1 pada tahun ini
  const defaultFromDate = props.useDefaultValue ? props.defaultFromDate || `${currentYear}-01-01` : undefined

  //ambil tanggal 31 pada tahun ini
  const defaultToDate = props.useDefaultValue ? props.defaultToDate || `${currentYear}-12-31` : undefined
  return (
    <>
      <div>
        <label style={{ marginRight: '50px', fontSize: '14px', marginLeft: '10px' }}>From</label>
        <input
          type='date'
          style={{ marginRight: '10px', height: '30px', marginTop: '15px', width: '300px' }}
          //default value menjadi tanggal 1
          defaultValue={defaultFromDate}
        />
      </div>
      <div>
        <label style={{ marginRight: '68px', fontSize: '14px', marginLeft: '10px' }}>To</label>
        <input
          type='date'
          style={{ marginRight: '10px', height: '30px', marginTop: '15px', width: '300px' }}
          //default value menjadi tanggal 31
          defaultValue={defaultToDate}
        />
      </div>
    </>
  )
}
