import React from 'react'
import dayjs from 'dayjs'
import Stack from '@mui/material/Stack'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

interface PickersBasic {
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
  disabled?: boolean
}

export default function PickersBasic(props: PickersBasic) {
  // ambil tahun ini
  const currentYear = dayjs().year()

  // ambil tanggal 1 pada tahun ini
  const fromDate = props.useDefaultValue ? props.defaultFromDate || dayjs(`${currentYear}-01-01`) : undefined

  // ambil tanggal 31 pada tahun ini
  const toDate = props.useDefaultValue ? props.defaultToDate || dayjs(`${currentYear}-12-31`) : undefined

  return (
    <>
      {/* Form date picker 1 */}
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
        <div style={{ marginLeft: '13px' }}>
          {props.ShowFromDate && (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ width: props.width }}
                //default value menjadi tanggal 1
                value={fromDate}
                disabled={props.disabled}
              />
            </LocalizationProvider>
          )}
        </div>
      </Stack>

      {/* Form date picker 2 */}
      <Stack spacing={2} direction='row' marginY={'10px'}>
        {props.textTo && (
          <p style={{ marginLeft: '10px', marginTop: '15px', fontSize: '14px', marginRight: '6px' }}>{props.textTo}</p>
        )}
        <div style={{ marginLeft: '30px' }}>
          {props.ShowToDate && (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ width: '300px' }}
                //default value menjadi tanggal 31
                value={toDate}
              />
            </LocalizationProvider>
          )}
        </div>
      </Stack>
    </>
  )
}
