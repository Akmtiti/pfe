import React, { useEffect, useState } from "react"
import { Axios } from "../axios"
import Button from "react-bootstrap/Button"

function Login({setConnectedUser}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [feedback, setFeedback] = useState("")

  const submit = () => {
    console.log(email)
    console.log(password)

    Axios.post("/user/login", {
      email: email,
      password: password,
    })
      .then((res) => {
        console.log(res)
          setFeedback("Connecté.")
          setConnectedUser(res.data)
      })
      .catch((err) => {
        console.log(err)
        setFeedback("Erreur lors de la connection.")
      })
  }

  return (
    <div class="col-md-offset-1 col-md-4 col-sm-12">
      <div class="entry-form">
        <h2>SIGN IN </h2>
        <input
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          name="email"
          class="form-control"
          placeholder="Your email address"
          required=""
        />
        <input
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          name="password"
          class="form-control"
          placeholder="Your password"
          required=""
        />
        <button
          onClick={submit}
          class="submit-btn form-control"
          id="form-submit"
        >
          Login
        </button>
        <p>{feedback}</p>
        <Button variant="link">Forget password</Button>
      </div>
    </div>
  )
}

export default Login
