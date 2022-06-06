import {
  Alert,
  Button,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import React from "react"
import { useState } from "react"
import AddEditUserDialog from "./AddEditUserDialog"
import { useEffect } from "react"
import { Axios } from "./../../axios"
import EditIcon from "@mui/icons-material/Edit"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import ShowConfirmationDialog from "./ShowDeleteConfirmationDialog"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {
  PULL_FETCHED_DATA,
  PUSH_FETCHED_DATA,
  SET_FEEDBACK,
  SET_FETCHED_DATA,
} from "./../../store/actions"

import { DataGrid, useGridApiRef } from "@mui/x-data-grid"

function AdminPage() {
  const apiRef = useGridApiRef()

  const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  // if (currentUser?.role !== 'Admin') window.location.href = "/"
  const [objectFeedback, ObjectFeedback] = useState({
    text: "",
    severity: "success",
  })
  const [selectedSchemeTable, setSelectedSchemeTable] = useState("Teacher") // "Teacher" or "Student"
  const { fetchedUsersData, fetchedBranchData, fetchedClassData, feedback } =
    useSelector((state) => state.scheme)
  const dispatch = useDispatch()

  // Fetch and dispatch
  // useEffect(async () => {
  //   let fetchedUserData = await Axios.get(`/user/getFields`, {
  //     params: { filter: { privilege: { $in: ["Student", "Teacher"] } } },
  //   })
  //   console.log(fetchedUserData)
  //   dispatch({ type: "SET_FETCHED_USERS_DATA", payload: fetchedUserData.data })
  // }, [])

  // Scheme selector
  useEffect(async () => {
    let fetchedSchemeData = []
    let schemeSelector = ""
    switch (selectedSchemeTable) {
      case "Teacher":
      case "Student":
        schemeSelector = "fetchedUsersData"

        if (fetchedUsersData.length === 0)
          fetchedSchemeData = await Axios.post("/custom", {
            filters: {
              privilege: { $in: ["Student", "Teacher"] },
            },
            scheme: "user",
            method: "get",
          })

        break
      case "Branch":
        schemeSelector = "fetchedBranchData"

        if (fetchedBranchData.length === 0)
          fetchedSchemeData = await Axios.post("/custom", {
            scheme: "branch",
            method: "get",
          })

        break
      case "Class":
        schemeSelector = "fetchedClassData"

        if (fetchedClassData.length === 0)
          fetchedSchemeData = await Axios.post("/custom", {
            scheme: "class",
            method: "get",
          })

        break

      default:
        break
    }
    if (fetchedSchemeData.length !== 0)
      if (fetchedSchemeData?.data?.length !== 0) {
        dispatch({
          type: SET_FETCHED_DATA,
          payload: { [schemeSelector]: fetchedSchemeData.data },
        })
      }
  }, [selectedSchemeTable])

  // Handles
  const handleUserSwitch = (selectedScheme) => {
    setSelectedSchemeTable(selectedScheme)
  }

  const handleDeleteRow = async (e, { row }) => {
    console.log(row)
    await Axios.delete(`/user/deleteUser/${row._id}`)

    dispatch({
      type: PULL_FETCHED_DATA,
      payload: { scheme: "fetchedUsersData", ...row },
    })

     ObjectFeedback({
        text: "User has been deleted : " + row.username,
        severity: "success",
      })
    // dispatch({
    //   type: SET_FEEDBACK,
    //   payload: "User has been deleted : " + row.username,
    // })
  }

  const handleAddRow = async (e, { row }) => {
    delete row._id
    row.privilege = selectedSchemeTable
    console.log(row)
    try {
      let { data: createdUser } = await Axios.put(`/user/addEditUser`, row)

      dispatch({
        type: PUSH_FETCHED_DATA,
        payload: { scheme: "fetchedUsersData", ...createdUser },
      })
      // dispatch({
      //   type: SET_FEEDBACK,
      //   payload: "New user has been added : " + createdUser.username,
      // })
      ObjectFeedback({
        text: "New user has been added : " + createdUser.username,
        severity: "success",
      })
    } catch (error) {
      ObjectFeedback({ text: error.response.data, severity: "error" })
    }
  }
  return (
    <div className="adminPage">
      <a href="/">
        <Button
          sx={{ mb: 5 }}
          variant={selectedSchemeTable === "Teacher" ? "contained" : ""}
        >
          Home
        </Button>
      </a>
      {/* Above Table */}
      <Stack direction="row" spacing={2}>
        {selectSchemeButton("Teacher")}
        {selectSchemeButton("Student")}
        {selectSchemeButton("Branch")}
        {selectSchemeButton("Class")}

        <AddEditUserDialog
          title={"Add " + selectedSchemeTable}
          button={<AddIcon color="secondary" fontSize="large" />}
          buttonStyle={{ marginLeft: "auto" }}
        />
      </Stack>
      <p style={{ margin: "10px 0" }}>{feedback} </p>
      {/* Table */}
      <TableContainer>
        <Table stickyHeader>
          {/* Table head */}
          <TableHead>
            <TableRow>
              {selectedSchemeTable === "Teacher" ? (
                <>
                  <TableCell>Username</TableCell>
                  <TableCell>CIN</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Specialty</TableCell>
                  <TableCell>Rank</TableCell>
                  <TableCell>Description</TableCell>
                </>
              ) : (
                <>
                  <TableCell>Username</TableCell>
                  <TableCell>CIN</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Class</TableCell>
                </>
              )}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          {/* Table body */}
          <TableBody>
            {fetchedUsersData
              .filter((user) => user.privilege === selectedSchemeTable)
              .map((user, key) => (
                <TableRow key={key}>
                  {selectedSchemeTable === "Teacher" ? (
                    <>
                      <TableCell>{user?.username}</TableCell>
                      <TableCell>{user?.cin}</TableCell>
                      <TableCell>{user?.phone}</TableCell>
                      <TableCell>{user?.email}</TableCell>
                      <TableCell>{user?.specialty}</TableCell>
                      <TableCell>{user?.rank}</TableCell>
                      <TableCell>{user?.description}</TableCell>
                      {actions(user)}
                    </>
                  ) : (
                    <>
                      <TableCell>{user?.username}</TableCell>
                      <TableCell>{user?.cin}</TableCell>
                      <TableCell>{user?.phone}</TableCell>
                      <TableCell>{user?.email}</TableCell>
                      <TableCell>{user?.class}</TableCell>
                      {actions(user)}
                    </>
                  )}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <div style={{ height: 250, width: '100%' }}>
      <DataGrid
        columns={[{ field: 'name' }]}
        rows={[
          { id: 1, name: 'React' },
          { id: 2, name: 'MUI' },
        ]}
      />
    </div> */}

      {/* <Stack
        sx={{ width: '100%', mb: 1 }}
        direction="row"
        alignItems="flex-start"
        columnGap={1}
      >
        <Button size="small" onClick={handleUpdateRow}>
          Update a row
        </Button>
        <Button size="small" onClick={handleUpdateAllRows}>
          Update all rows
        </Button>
        <Button size="small" onClick={handleDeleteRow}>
          Delete a row
        </Button>
        <Button size="small" onClick={handleAddRow}>
          Add a row
        </Button>
      </Stack> */}
      {/* {fetchedUsersData.length && (
        <div
          style={{ height: "100vh", width: "100%" }}
          onKeyDownCapture={(e) => {
            if (e.key === "Backspace" || e.key === "Delete") {
              // console.log(apiRef.getSelectedRows())
              e.stopPropagation()
            }
          }}
        >
          (
          <DataGrid
            // pageSize={5}
            apiRef={apiRef}
            editMode="row"
            columns={returnGridHeader("user")}
            rows={[...fetchedUsersData, { _id: "new" }]}
            getRowId={(row) => row._id}
            processRowUpdate={(newRow) => {
              const updatedRow = { ...newRow, isNew: false }
              console.log(updatedRow)
              return updatedRow

              // console.log(event)
              // console.log(params)
              // let row = apiRef.current.getEditRowsModel();
              // console.log(row)
              // if (params.reason === GridCellEditStopReasons.cellFocusOut) {
              //   event.defaultMuiPrevented = true;
              // }
            }}
            onSelectionModelChange={(ids) => {
              const selectedRowData = fetchedUsersData.filter(
                (user) => user._id === ids[0]
              )
            }}
            // rowsPerPageOptions={[5]}
            // checkboxSelection
            // disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
          )
        </div>
      )}

      {objectFeedback.text && (
        <Alert severity={objectFeedback.severity}>{objectFeedback.text}</Alert>
      )} */}
    </div>
  )

  function selectSchemeButton(selection) {
    return (
      <Button
        variant={selectedSchemeTable === selection ? "contained" : ""}
        onClick={() => {
          handleUserSwitch(selection)
        }}
      >
        {selection}
      </Button>
    )
  }

  function actions(user) {
    return (
      <>
        <TableCell>
          <AddEditUserDialog
            title={"Edit " + selectedSchemeTable}
            userData={user}
            button={
              <EditIcon style={{ color: "#1bb719", cursor: "pointer" }} />
            }
          />

          <ShowConfirmationDialog
            title="Delete User"
            userToDelete={user}
            description={"Are you sure to delete " + user?.username}
            button={
              <DeleteForeverIcon
                style={{ color: "#b54827", cursor: "pointer" }}
              />
            }
          />
        </TableCell>
      </>
    )
  }
  function returnGridHeader(selector) {
    const returnUserHeader = [
      // {
      //   field: "privilege",
      //   headerName: "Privilege",
      //   flex: 1,
      //   headerAlign: "center",
      //   align: "center",
      //   editable: true,
      // },
      {
        field: "username",
        headerName: "Username",
        flex: 1,
        headerAlign: "center",
        align: "center",
        editable: true,
      },
      {
        field: "cin",
        headerName: "CIN",
        flex: 1,
        headerAlign: "center",
        align: "center",
        editable: true,
      },
      {
        field: "phone",
        headerName: "Phone",
        flex: 1,
        headerAlign: "center",
        align: "center",
        editable: true,
      },
      {
        field: "email",
        headerName: "Email",
        flex: 1,
        headerAlign: "center",
        align: "center",
        editable: true,
      },
      {
        field: "specialty",
        headerName: "Specialty",
        flex: 1,
        headerAlign: "center",
        align: "center",
        editable: true,
      },
      {
        field: "rank",
        headerName: "Rank",
        flex: 1,
        headerAlign: "center",
        align: "center",
        editable: true,
        type: "singleSelect",
        valueOptions: ["1", "2", "3"],
      },
      {
        field: "description",
        headerName: "Description",
        flex: 1,
        headerAlign: "center",
        align: "center",
        editable: true,
      },
      {
        field: "password",
        headerName: "Password",
        flex: 1,
        headerAlign: "center",
        align: "center",
        editable: true,
      },
      // Actions
      {
        headerName: "Action",
        renderCell: (cellValues) => {
          if (cellValues.row._id === "new")
            return (
              <Button
                variant="contained"
                color="success"
                onClick={(event) => {
                  handleAddRow(event, cellValues)
                }}
              >
                Add
              </Button>
            )

          return (
            <Button
              variant="contained"
              color="error"
              onClick={(event) => {
                handleDeleteRow(event, cellValues)
              }}
            >
              Delete
            </Button>
          )
        },
        flex: 1,
        headerAlign: "center",
        align: "center",
      },
    ]
    switch (selector) {
      case "user":
        return returnUserHeader

      default:
        break
    }
  }
}

export default AdminPage

function setDataGridHeader(obj) {
  const returnedHeader = []
  const excludedFields = ["_id", "password", "privilege", "__v"]

  console.log(Object.keys(obj))
  Object.keys(obj).map((key) =>
    excludedFields.includes(key)
      ? null
      : returnedHeader.push({ field: key, header: capitalizeFirstLetter(key) })
  )

  console.log(returnedHeader)
  return returnedHeader
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
