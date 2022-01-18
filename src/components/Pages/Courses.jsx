import axios from 'axios'
import React, { Component } from 'react'
import CouseGrid from '../Organisms/CouseGrid'



class Courses extends Component {

     constructor(props){
          super(props)

          this.state = {
               courses: []
          }
     }

     componentDidMount(){
          axios.get("https://my-json-server.typicode.com/Yaki-Zeltzin/json-db/cursos")
          .then(resp => this.setState({
               courses:resp.data
          }))
     }

     render() {

          const { courses } = this.state

          return  (
               <CouseGrid courses={courses}/>
          )
     }
}

export default Courses