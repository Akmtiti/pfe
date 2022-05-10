import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { Axios } from "../axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    console.log("hi");
  }, []);

  const submit = () => {


console.log(name);
console.log(email);
console.log(password);
console.log(confirmPassword);



    Axios.post("/user/singup", {
      username: "name",
      email: "email",
      password: "password",
      privilege : "etudiant" 
    });
  };

  return (
    <div class="col-md-offset-1 col-md-4 col-sm-12">
      <div class="entry-form">
        <h2>SIGN UP</h2>
        <input
        onChange={(event)=> setName(event.target.value)}
          type="text"
          name="full name"
          class="form-control"
          placeholder="Full name"
          required=""
        />
        <input
        onChange={(event)=> setEmail(event.target.value)}
          type="email"
          name="email"
          class="form-control"
          placeholder="Your email address"
          required=""
        />
        <input
        onChange={(event)=> setPassword(event.target.value)}
          type="password"
          name="password"
          class="form-control"
          placeholder="Password"
          required=""
        />
        <input
        onChange={(event)=> setConfirmPassword(event.target.value)}
          type="password"
          name="password"
          class="form-control"
          placeholder="Confirm password"
          required=""
        />
        <button
          onClick={submit}
          class="submit-btn form-control"
          id="form-submit"
        >
          Get started
        </button>
      </div>
    </div>
  );
}

export default Signup;
