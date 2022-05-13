import express from "express"
const router = express.Router()

import {
  deleteUser,
  modifyUser,
  changePassword,
  signUp,
  login,
} from "../controllers/user.js"
import userModel from "../models/userModel.js"

router.post("/changePassword", changePassword)
router.post("/modifyUser", modifyUser)
router.delete("/deleteUser", deleteUser)

router.get("/user/getUsers", async (req, res) =>
  res.send(await userModel.find())
)





router.post("/user/singup", signUp)
router.post("/user/login", login)
export default router
