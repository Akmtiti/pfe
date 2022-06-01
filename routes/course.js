import express from "express"
import courseModel from "../models/courseModel.js"
<<<<<<< Updated upstream
import { createCourse } from "./../controllers/course.js"
const router = express.Router()

router.post("/course/createCourse", createCourse)
router.get("/course/getCourses", async (req, res) =>
  res.send(await courseModel.find().populate({path : "teacherId", select : "username"}))
)

=======
import {
  addFilePath,
  createCourse,
  updateCourse,
} from "./../controllers/course.js"
import multer from "multer"
import fs from "fs"


const router = express.Router()

/* #region  File upload */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `./courseFiles/${req.params.id}`)
  },
  filename: function (req, file, cb) {
    cb(null, req.params.fileName)
  },
})
const fileFilter = async (req, file, cb) => {


  const dir = `./courseFiles/${req.params.id}`
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }

  console.log(file)
  cb(null, true)
}

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 50, //50MB
  },
  fileFilter: fileFilter,
})

/* #endregion */
// Get

router.post("/course/createCourse", createCourse)
router.get("/course/getCourses", async (req, res) =>
  res.send(
    await courseModel.find().populate({ path: "teacherId", select: "username" })
  )
)
router.patch("/course/updateCourse", updateCourse)

router.patch("/course/addFilePath/:id/:fileName", addFilePath)

router.post("/course/upload/:id/:fileName", upload.array("files", 5))
>>>>>>> Stashed changes
export default router
