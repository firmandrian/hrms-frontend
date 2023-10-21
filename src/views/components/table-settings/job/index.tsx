// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import Paper from '@mui/material/Paper'
import { visuallyHidden } from '@mui/utils'
import Checkbox from '@mui/material/Checkbox'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import TableSortLabel from '@mui/material/TableSortLabel'
import { getData } from 'src/api/employeeStatus'

//import file
import Form from 'src/views/components/form/Form'
import Borders from 'src/views/components/border/Borders'
import SelectNative from 'src/views/components/select/SelectNative'
import TableReusable from 'src/views/components/table/TableReusable'
import Paginations from 'src/views/components/pagination/Paginations'
import ButtonComponent from 'src/views/components/button/ButtonComponent'
import InputFileUpload from '../../button/InputFileUpload'
import Textarea from '../../form/textarea/Textarea'
import TextareaBasic from '../../form/textarea/TextareaBasic'

import Stack from '@mui/material/Stack'
import Modal from '@mui/material/Modal'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { Button, DialogActions, DialogContent, DialogTitle, TablePagination } from '@mui/material'

//styling modal
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '90%',
  width: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 1
}

//styling border
const commonStyles = {
  bgcolor: 'background.paper',
  m: 1,
  borderColor: 'text.primary',
  width: '5rem',
  height: '5rem'
}

type Order = 'asc' | 'desc'

interface Data {
  id: number
  name: string
  description: string
}

interface HeadCell {
  disablePadding: boolean
  id: keyof Data
  label: string
  numeric: boolean
}

interface EnhancedTableProps {
  numSelected: number
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  order: Order
  orderBy: string
  rowCount: number
}

interface EnhancedTableToolbarProps {
  numSelected: number
}

const createData = (name: string, id: number, description: string): Data => {
  return { name, id, description }
}

const rows = getData()
const datas = getData()
// console.log(rows, 'wkwkw')
// const hasil = datas.length
// console.log(hasil)

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }

  return 0
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order

    return a[1] - b[1]
  })

  return stabilizedThis.map(el => el[0])
}

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Job Title    '
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Job Description'
  }
]

function EnhancedTableHead(props: EnhancedTableProps) {
  // ** Props
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props
  const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox
            onChange={onSelectAllClick}
            checked={rowCount > 0 && numSelected === rowCount}
            inputProps={{ 'aria-label': 'select all desserts' }}
            indeterminate={numSelected > 0 && numSelected < rowCount}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              onClick={createSortHandler(headCell.id)}
              direction={orderBy === headCell.id ? order : 'asc'}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

const TableJobTitle = ({ data, setData }: { data: Data[]; setData: (data: Data[]) => void }) => {
  // console.log(data, 'cek')

  // ** States
  const [page, setPage] = useState<number>(0)
  const [order, setOrder] = useState<Order>('asc')
  const [rowsPerPage, setRowsPerPage] = useState<number>(5)
  const [orderBy, setOrderBy] = useState<keyof Data>('name')
  const [selected, setSelected] = useState<readonly string[]>([])
  const [open, setOpen] = useState(false)

  //state untuk menambahkan data dengan modalAdd
  const [idIndex, setIdIndex] = useState<number>(0)
  const [openModalAdd, setOpenModalAdd] = useState(false)
  const handleOpenAdd = () => setOpenModalAdd(true)
  const handleCloseAdd = () => setOpenModalAdd(false)

  //state untuk menyimpan data dengan modalAdd
  const [dataName, setDataName] = useState<Data[]>([])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  // console.log(name)
  // console.log(dataName, 'dataname')

  //state untuk mengubah data dengan modalEdit
  const [editId, setEditId] = useState<number>(0)
  const [editName, setEditName] = useState('')
  const [editDescription, setEditDescription] = useState('')
  console.log(editName, editDescription, 'editname')

  const handleChangeEdit = (description: string) => {
    setDescription(description)
    console.log(description, 'cek')
  }

  const handleEdit = (id: number, event: React.MouseEvent<unknown>, name: string, description: string) => {
    setEditName(name)
    setEditId(id)
    setOpen(true)
    setEditDescription(description)
  }

  const handleEditSave = () => {
    // Find the edited item and update its name
    const updatedData = dataName.map(item => {
      if (item.id === editId) {
        return {
          id: item.id,
          name: editName,
          description: editDescription
        }
      }
      return item
    })
    console.log(updatedData, 'updated')

    setDataName(updatedData)
    setSelected([])
    setEditName('') // Reset the editing name
    handleClose() // Close the edit modal
    setEditDescription('')
  }

  const addData = () => {
    const newData = {
      id: idIndex,
      name: name,
      description: description
    }

    setIdIndex(idIndex + 1)
    const createData: any = [...dataName, newData]
    setDataName(createData)
    handleCloseAdd()
    setName('')
    setDescription('')
    // window.location.reload()
  }

  const handleRowClick = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  //fungsi sort data secara asc maupun desc
  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  //fungsi untuk mengklik semua data pada tabel
  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = data.map(n => n.name)
      setSelected(newSelecteds)

      return
    }
    setSelected([])
  }

  //fungsi untuk mengklik salah satu tabel data
  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name)
    let newSelected: readonly string[] = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1))
    }

    setSelected(newSelected)
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const isSelected = (name: string) => selected.indexOf(name) !== -1

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  const handleDelete = () => {
    const updatedData = dataName.filter(item => !selected.includes(item.name))
    console.log(updatedData, 'hapus')

    setDataName(updatedData)
    setSelected([])
  }
  return (
    <>
      <Stack spacing={2} direction='row' marginX={'10px'} marginY={'10px'}>
        <ButtonComponent
          onAddClick={handleOpenAdd}
          backgroundColor='#3CBC8D'
          text='Add'
          width='50px'
          fontSize='14px'
          border='1px solid'
          height='40px'
          textTransform='none'
          marginLeft='-10px'
        />
        <ButtonComponent
          onAddClick={handleDelete}
          backgroundColor='#E9422E'
          text='Delete'
          width='75px'
          fontSize='14px'
          border='1px solid'
          height='40px'
          textTransform='none'
          marginTop='10px'
          marginLeft='-10px'
        />
      </Stack>
      <Form
        showForm={true}
        showParagrafRight={true}
        text='Showing 5/5 entries'
        marginLeft='10px'
        width='30%'
        marginTop='-2px'
      />
      {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
      <TableContainer component={Paper} sx={{ marginTop: '20px', width: 'auto', marginX: '9px' }}>
        <Table sx={{ minWidth: 750 }} aria-labelledby='tableTitle'>
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            rowCount={dataName.length}
            numSelected={selected.length}
            onRequestSort={handleRequestSort}
            onSelectAllClick={handleSelectAllClick}
          />
          <TableBody>
            {/* if you don't need to support IE11, you can replace the `stableSort` call with: rows.slice().sort(getComparator(order, orderBy)) */}
            {stableSort(dataName, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const isItemSelected = isSelected(String(row.name))
                const labelId = `enhanced-table-checkbox-${index}`
                console.log(row.name, '38738783783')

                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={row.name}
                    role='checkbox'
                    selected={isItemSelected}
                    aria-checked={isItemSelected}
                    // onClick={event => handleEdit(row.id, event, String(row.name))}
                  >
                    <TableCell padding='checkbox'>
                      <Checkbox
                        checked={isItemSelected}
                        inputProps={{ 'aria-labelledby': labelId }}
                        onClick={event => handleClick(event, String(row.name))}
                      />
                    </TableCell>
                    <TableCell
                      component='th'
                      id={labelId}
                      scope='row'
                      padding='none'
                      onClick={event => handleEdit(row.id, event, String(row.name), String(row.description))}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      sx={{ minWidth: '50px' }}
                      align='left'
                      onClick={event => handleEdit(row.id, event, String(row.description), String(row.name))}
                    >
                      {row.description}
                    </TableCell>
                  </TableRow>
                )
              })}

            {emptyRows > 0 && (
              <TableRow
                sx={{
                  height: 53 * emptyRows
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        page={page}
        component='div'
        count={data.length}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25, 50]}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      {/* awal modal edit  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={{ ...style, padding: 0 }}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            <Borders
              statusText='Edit Job Title'
              columns={[]}
              data={[]}
              showBordersBox={true}
              showDatePicker={false}
              children={undefined}
            />
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            {/* kolom form pertama pada modal  */}
            <Box sx={{ marginLeft: '30px', marginBottom: '30px', marginRight: '50px' }}>
              <Form
                showForm={true}
                width='500px'
                showParagrafLeft={true}
                text='Job Title'
                showSpan={true}
                marginLeft='74px'
                value={editName}
                onChange={e => setEditName(e.target.value)}
                // onChange={e => console.log(e, 'JOB TITLE')}
              />
            </Box>

            {/* kolom form kedua pada modal  */}
            {/* <Textarea
              showParagrafLeft={true}
              text='Text Description'
              marginLeft='44px'
              height='150px'
              marginButtom='30px'
              marginRight='50px'
              value={editDescription}
              onChange={e => setEditDescription(e.target.value)}
              // onChange={e => console.log(e, 'textarea')}
            /> */}
            <TextareaBasic
              showParagrafLeft={true}
              text='Text Description'
              value={editDescription}
              onChange={e => setEditDescription(e.target.value)}
            />

            {/* kolom form ketiga pada modal  */}
            <InputFileUpload
              showParagrafLeft={true}
              text='File'
              showParagrafButtom={true}
              TextButtom='Accepts up to 1MB'
              width='7rem'
              textTransform='none'
              backgroundColor='#248AAF'
              color='#FFFFFF'
              height='37px'
              fontSize='13px'
              marginRight='130px'
              marginLeft='200px'
              textButton='Choose File'
            />

            <p
              style={{
                marginLeft: '29px',
                marginTop: '5rem',
                fontSize: '14px',
                marginRight: '32px'
              }}
            >
              <span style={{ color: 'red' }}>*</span> Required Field
            </p>
            {/* borders di modal */}
            <Box sx={{ ...commonStyles, borderBottom: 1, width: 'auto', marginTop: '-80px', marginX: '20px' }} />

            {/* tombol di modal  */}
            <Stack spacing={2} direction='row' marginX={'30px'} marginY={'10px'} justifyContent={'flex-end'}>
              <ButtonComponent
                onAddClick={handleEditSave}
                backgroundColor='#3CBC8D'
                text='Save'
                width='55px'
                fontSize='14px'
                border='1px solid'
                height='40px'
                textTransform='none'
                marginLeft='-10px'
              />
              <ButtonComponent
                onAddClick={handleClose}
                backgroundColor='#E9422E'
                text='Cancel'
                width='75px'
                fontSize='14px'
                border='1px solid'
                height='40px'
                textTransform='none'
                marginTop='10px'
                marginLeft='-10px'
              />
            </Stack>
          </Typography>
        </Box>
      </Modal>
      {/* akhir modal  */}

      {/* awal modal  */}
      <Modal
        open={openModalAdd}
        onClose={handleCloseAdd}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={{ ...style, padding: 0 }}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            <Borders
              statusText='Add Job Title'
              columns={[]}
              data={[]}
              showBordersBox={true}
              showDatePicker={false}
              children={undefined}
            />
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            {/* kolom form pertama pada modal  */}
            <Box sx={{ marginLeft: '30px', marginBottom: '30px', marginRight: '50px' }}>
              <Form
                showForm={true}
                width='500px'
                showParagrafLeft={true}
                text='Job Title'
                showSpan={true}
                marginLeft='74px'
                value={name}
                onChange={e => setName(e.target.value)}
                // onChange={e => console.log(e, 'JOB TITLE')}
              />
            </Box>

            {/* kolom form kedua pada modal  */}
            <Textarea
              showParagrafLeft={true}
              text='Text Description'
              marginLeft='44px'
              height='150px'
              marginButtom='30px'
              marginRight='50px'
              value={description}
              onChange={e => setDescription(e.target.value)}
              // onChange={e => handleChangeEdit(e.target.value)}
              // onChange={e => console.log(e.target.value, 'textarea')}
            />

            {/* kolom form ketiga pada modal  */}
            <InputFileUpload
              showParagrafLeft={true}
              text='Job Spesification'
              showParagrafButtom={true}
              TextButtom='Accepts up to 1MB'
              width='7rem'
              textTransform='none'
              backgroundColor='#248AAF'
              color='#FFFFFF'
              height='37px'
              fontSize='13px'
              marginRight='40px'
              marginLeft='200px'
              textButton='Choose File'
            />

            <p
              style={{
                marginLeft: '29px',
                marginTop: '5rem',
                fontSize: '14px',
                marginRight: '32px'
              }}
            >
              <span style={{ color: 'red' }}>*</span> Required Field
            </p>
            {/* borders di modal */}
            <Box sx={{ ...commonStyles, borderBottom: 1, width: 'auto', marginTop: '-80px', marginX: '20px' }} />

            {/* tombol di modal  */}
            <Stack spacing={2} direction='row' marginX={'30px'} marginY={'10px'} justifyContent={'flex-end'}>
              <ButtonComponent
                onAddClick={addData}
                backgroundColor='#3CBC8D'
                text='Save'
                width='55px'
                fontSize='14px'
                border='1px solid'
                height='40px'
                textTransform='none'
                marginLeft='-10px'
              />
              <ButtonComponent
                onAddClick={handleCloseAdd}
                backgroundColor='#E9422E'
                text='Cancel'
                width='75px'
                fontSize='14px'
                border='1px solid'
                height='40px'
                textTransform='none'
                marginTop='10px'
                marginLeft='-10px'
              />
            </Stack>
          </Typography>
        </Box>
      </Modal>
      {/* akhir modal  */}
    </>
  )
}

export default TableJobTitle
