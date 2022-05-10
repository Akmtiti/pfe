import Button from "react-bootstrap/Button";

import React from "react";
// assets/images/mecan.jpg
// assets/images/inconnue.jpg
// assets/images/deeplr.jpg
// assets/images/inconnue.jpg
// assets/images/algbr.png
// assets/images/inconnue.jpg
// assets/images/Electromagnétisme.png
// assets/images/inconnue.jpg

const fetchedCourses = [
    { title: "Mat1", teacher: "Prof1", image: "assets/images/mecan.jpg" },
    {
        title: "Mat2",
        teacher: "Prof2",
        image: "assets/images/Electromagnétisme.png",
    },
    { title: "Mat3", teacher: "Prof3", image: "assets/images/deeplr.jpg" },
    { title: "Mat4", teacher: "Prof4", image: "assets/images/inconnue.jpg" },
    { title: "Mat5", teacher: "Prof5", image: "assets/images/algbr.png" },
];
function Matieres() {
    return (
        <section id="courses">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <div class="section-title">
                            <h2>
                                Popular Courses{" "}
                                <small>
                                    Upgrade your skills with newest courses
                                </small>
                            </h2>
                            <Button variant="link">Voir plus</Button>
                        </div>
                        <div className="owl-carousel owl-theme owl-courses">
                            {fetchedCourses.map((course, key) => {
                                return renderCourse({ course: course });
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    function renderCourse({ course }) {
        return (
            <div class="col-md-4 col-sm-4">
                <div class="item">
                    <div class="courses-thumb">
                        <div class="courses-top">
                            <div class="courses-image">
                                <img
                                    src={course.image}
                                    width="200"
                                    height="210"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div class="courses-detail">
                            <h3>
                                <a href="#"> {course.title} </a>
                            </h3>
                            <p>LISI-A03</p>
                        </div>
                        <div class="courses-info">
                            <div class="courses-author">
                                <img
                                    src="assets/images/inconnue.jpg"
                                    class="img-responsive"
                                    alt=""
                                />
                                <span>{course.teacher} </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Matieres;
