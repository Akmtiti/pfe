import React from "react";

const fetchedReviews = [
    { username: "Stud1", rating: 5, message: "Message" },
    { username: "Stud2", rating: 2, message: "Message" },
    { username: "Stud3", rating: 1, message: "Message" },
    { username: "Stud4", rating: 5, message: "Message" },
    { username: "Stud5", rating: 0, message: "Message" },
    // { username: "Stud2", rating : 5 ,message : "Message"},
    // { username: "Stud3", rating : 5 ,message : "Message"},
    // { username: "Stud4", rating : 5 ,message : "Message"},
    // { username: "Stud5", rating : 5 ,message : "Message"},
];

function StudentReview() {
    return (
        <section id="testimonial">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <div class="section-title">
                            <h2>
                                Student Reviews{" "}
                                <small>from around the world</small>
                            </h2>
                        </div>
                        <div class="owl-carousel owl-theme owl-client">
                            {fetchedReviews.map((student, key) => {
                                return renderReview({ student: student });
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    function renderReview({ student }) {
        console.log(student);
        return (
            <div class="col-md-4 col-sm-4">
                <div class="item">
                    <div class="tst-image">
                        <img
                            src="assets/images/inconnue.jpg"
                            class="img-responsive"
                            alt=""
                        />
                    </div>
                    <div class="tst-author">
                        <h4>{student.username} </h4>
                    </div>
                    <div class="tst-rating">

                        
                    {[...Array(student.rating)].map((e, i) => <i class="fa fa-star"></i>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentReview;
