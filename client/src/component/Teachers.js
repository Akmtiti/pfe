import React, { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import { Axios } from "../axios"

const fetchedTeachers = [
  "Teacheer1 ",
  "Teacheer2 ",
  "Teacheer3 ",
  "Teacheer4 ",
  "Teacheer5 ",
]
function Teachers() {
  const [fetchedTeachers, setFetchedTeachers] = useState([])
  useEffect(async () => {
    setFetchedTeachers((await Axios.get("/user/getTeachers")).data)
  }, [])


  return (
    <section id="team">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="section-title">
              <h2>
                Teachers <small>Meet Professional Trainers</small>
              </h2>

              <Button variant="link">Voir plus</Button>
            </div>

            <div className="owl-carousel owl-theme owl-courses">
              {renderTeachers()}
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  function renderTeachers() {
    return (
      <>
        {fetchedTeachers.map((teacher, key) => (
          <div key={key} class="col-md-8 col-sm-7">
            <div class="team-thumb">
              <div class="team-image">
                <img
                  src="assets/images/inconnue.jpg"
                  class="img-responsive"
                  alt=""
                />
              </div>
              <div class="team-info">
                <h4> {teacher.username} </h4>
                <span>I love Teaching</span>
              </div>
              <ul class="social-icon">
                <li>
                  <a
                    href="#"
                    class="fa fa-facebook-square"
                    attr="facebook icon"
                  ></a>
                </li>
                <li>
                  <a href="#" class="fa fa-twitter"></a>
                </li>
                <li>
                  <a href="#" class="fa fa-instagram"></a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </>
    )
  }
}
export default Teachers
