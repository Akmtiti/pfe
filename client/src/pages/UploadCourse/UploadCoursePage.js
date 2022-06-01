import {
  Button,
  CardMedia,
  Grid,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material"
import React from "react"
import { useState } from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
<<<<<<< Updated upstream
=======
import { Axios } from "./../../axios"
>>>>>>> Stashed changes

const branches = [
  { name: "branch1", classes: ["class1", "class2", "class3"] },
  { name: "branch2", classes: ["class1x", "class2x", "class3x"] },
  { name: "branch3", classes: ["class1z", "class2z", "class3z"] },
]

function UploadCoursePage() {
<<<<<<< Updated upstream
=======
  const [fileState, setFileState] = useState({


    
  })
>>>>>>> Stashed changes
  const [formData, setFormData] = useState({
    branchName: "",
    class: "",
    courseName: "",
    level: "",
  })

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    console.log(formData)
  }
<<<<<<< Updated upstream
=======

  const handleAddFile = async (e) => {
    const file = e.target.files[0]
    const fileName = file.name
    console.log(file.name)

    var formData = new FormData()
    formData.append("files", file)

    await Axios.patch(
      `/course/addFilePath/627caf233da5a1a04ba4f617/${file.name}`
    )

    await Axios.post(
      `/course/upload/627caf233da5a1a04ba4f617/${fileName}`,
      formData
    )
    // Axios.patch("/course/updateCourse", { formData }, {})
  }
>>>>>>> Stashed changes
  return (
    <>
      <Header />
      <div className="uploadCoursePage">
        <h1>Upload Course</h1>

<<<<<<< Updated upstream
        <Button className="submit-button"  variant="contained" onClick={handleSubmit}>Submit</Button>

          <Stack direction="row"  spacing={2} >
            {/* Course inputs */}
            <Stack direction="column" spacing={2} style={{ width: "200px" }}>
              <TextField
                name="branchName"
                select
                label="Branch"
                onChange={handleChange}
              >
                {branches.map((option) => (
                  <MenuItem key={option.name} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                name="class"
                select
                label="Class"
                onChange={handleChange}
              >
                {branches[0].classes.map((classe) => (
                  <MenuItem key={classe} value={classe}>
                    {classe}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                name="courseName"
                label="Course name"
                onChange={handleChange}
              />
              <TextField
                name="level"
                label="Course level"
                onChange={handleChange}
              />
            </Stack>
          
            {/* Upload buttons */}
            <Stack
              direction="column"
              spacing={2}
              style={{ width: "200px" }}
              className="upload-file-button-container"
            >
              <div>
                <Button variant="contained"> Add Course</Button>
                <CardMedia
                  component="img"
                  style={{ width: "25%" }}
                  image="assets/images/pdf.png"
                />
              </div>
              <div>
                <Button variant="contained"> Add TD</Button>
                <CardMedia
                  component="img"
                  style={{ width: "25%" }}
                  image="assets/images/pdf.png"
                />
              </div>
              <div>
                <Button variant="contained"> Add TP</Button>
                <CardMedia
                  component="img"
                  style={{ width: "25%" }}
                  image="assets/images/pdf.png"
                />
              </div>
              <div>
                <Button variant="contained"> Add TP</Button>
                <CardMedia
                  component="img"
                  style={{ width: "25%" }}
                  image="assets/images/pdf.png"
                />
              </div>
            </Stack>
          </Stack>
          
=======
        <Button
          className="submit-button"
          variant="contained"
          onClick={handleSubmit}
        >
          Submit
        </Button>

        <Stack direction="row" spacing={2}>
          {/* Course inputs */}
          <Stack direction="column" spacing={2} style={{ width: "200px" }}>
            <TextField
              name="branchName"
              select
              label="Branch"
              onChange={handleChange}
            >
              {branches.map((option) => (
                <MenuItem key={option.name} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              name="class"
              select
              label="Class"
              onChange={handleChange}
            >
              {branches[0].classes.map((classe) => (
                <MenuItem key={classe} value={classe}>
                  {classe}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              name="courseName"
              label="Course name"
              onChange={handleChange}
            />
            <TextField
              name="level"
              label="Course level"
              onChange={handleChange}
            />
          </Stack>

          {/* Upload buttons */}
          <Stack
            direction="column"
            spacing={2}
            style={{ width: "200px" }}
            className="upload-file-button-container"
          >
            <div>
              <Button variant="contained"> Add Course</Button>
              <CardMedia
                component="img"
                style={{ width: "25%" }}
                image="assets/images/pdf.png"
              />
            </div>
            <div>
              <Button
                variant="contained"
                onClick={() => {
                  document.getElementById("fileInput").click()
                }}
              >
                Add TD
              </Button>
              <input
                 style={{ display: "none" }}
                accept="application/pdf,application/vnd.ms-excel"
                id="fileInput"
                type="file"
                onChange={handleAddFile}
              />

              <CardMedia
                component="img"
                style={{ width: "25%" }}
                image="assets/images/pdf.png"
              />
            </div>
            <div>
              <Button variant="contained"> Add TP</Button>
              <CardMedia
                component="img"
                style={{ width: "25%" }}
                image="assets/images/pdf.png"
              />
            </div>
            <div>
              <Button variant="contained"> Add TP</Button>
              <CardMedia
                component="img"
                style={{ width: "25%" }}
                image="assets/images/pdf.png"
              />
            </div>
          </Stack>
        </Stack>
>>>>>>> Stashed changes
      </div>

      <Footer />
    </>
  )
}

export default UploadCoursePage
