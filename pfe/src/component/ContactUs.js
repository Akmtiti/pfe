import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Axios } from "../axios";
import StarRating from "../StarRating";

function ContactUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const submit = () => {
        console.log(name);
        console.log(email);
        console.log(message);

        return

        Axios.post("/user/contactUs", {
            name: name,
            email: email,
            message: message,
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <section id="contact">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <form id="contact-form" role="form">
                            <div class="section-title">
                                <h2>
                                    Contact us{" "}
                                    <small>
                                        we love conversations. let us talk!
                                    </small>
                                </h2>
                            </div>
                            <div class="col-md-12 col-sm-12">
                                <input
                                 onChange={(event) => setName(event.target.value)}
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter full name"
                                    name="name"
                                    required=""
                                />

                                <input
                                 onChange={(event) => setEmail(event.target.value)}
                                    type="email"
                                    class="form-control"
                                    placeholder="Enter email address"
                                    name="email"
                                    required=""
                                />
                                <textarea
                                 onChange={(event) => setMessage(event.target.value)}
                                    class="form-control"
                                    rows="6"
                                    placeholder="Tell us about your message"
                                    name="message"
                                    required=""
                                ></textarea>
                            </div>
                            <div className="App">
                                <StarRating />
                            </div>
                            <div class="col-md-4 col-sm-12">
                                <input
                                onClick={submit}
                                    type="button"
                                    class="form-control"
                                    name="send message"
                                    value="Send Message"
                                />
                            </div>
                        </form>
                    </div>

                    <div class="col-md-6 col-sm-12">
                        <div class="contact-image">
                            <img
                                src="assets/images/contact-image.jpg"
                                class="img-responsive"
                                alt="Smiling Two Girls"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;
