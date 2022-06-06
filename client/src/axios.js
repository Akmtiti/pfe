import axios from "axios"

var baseURL
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
   baseURL = 'http://localhost:8001'
} else {
   baseURL = 'https://tunisian-event.herokuapp.com'
  //  baseURL = 'http://tunisia-events.com' 
}

export const Axios = axios.create({
  baseURL: baseURL,
})

