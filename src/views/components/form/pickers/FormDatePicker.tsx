import React from 'react'

import Stack from '@mui/material/Stack'

interface FormDatePickerProps {
  defaultFromDate?: string
  defaultToDate?: string
  useDefaultValue?: boolean
  ShowFromDate?: boolean
  ShowToDate?: boolean
  textFrom?: string
  textTo?: string
  marginLeft?: string
  width?: string
  marginRight?: string
  marginTop?: string
  showSpan?: boolean
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
      {/* form date picker 1  */}
      <Stack spacing={2} direction='row'>
        {props.textFrom && (
          <p
            style={{
              marginLeft: props.marginLeft,
              marginTop: props.marginTop,
              fontSize: '14px',
              marginRight: props.marginRight
            }}
          >
            {props.textFrom}
            {props.showSpan && <span style={{ color: 'red' }}>*</span>}
          </p>
        )}
        {props.ShowFromDate && (
          <input
            type='date'
            style={{ marginRight: '10px', height: '30px', marginTop: '10px', width: props.width }}
            //default value menjadi tanggal 1
            defaultValue={defaultFromDate}
          />
        )}
      </Stack>

      {/* form date picker 2  */}
      <Stack spacing={2} direction='row'>
        {props.textTo && (
          <p style={{ marginLeft: '10px', marginTop: '15px', fontSize: '14px', marginRight: '6px' }}>{props.textTo}</p>
        )}
        {props.ShowToDate && (
          <input
            type='date'
            style={{ marginRight: '10px', height: '30px', marginTop: '15px', width: '300px', marginLeft: '25px' }}
            //default value menjadi tanggal 31
            defaultValue={defaultToDate}
          />
        )}
      </Stack>
    </>
  )
}
