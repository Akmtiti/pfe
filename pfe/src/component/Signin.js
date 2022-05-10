import React, { useEffect, useState } from "react";
import { Axios } from "../axios";

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = () => {
        console.log(email);
        console.log(password);

        Axios.post("/user/singin", {
            email: email,
            password: password,
            privilege: "enseignant",
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

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
                <button           onClick={submit}
 class="submit-btn form-control" id="form-submit">
                    Login
                </button>
                <button variant="link">Forget password</button>
            </div>
        </div>
    );
}

export default Signin;
