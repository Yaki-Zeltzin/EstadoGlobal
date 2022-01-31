import axios from 'axios'
import React, { Component } from 'react'
import CoursesContext from '../Context/CoursesContext'
import CouseGrid from '../Organisms/CouseGrid'



class Courses extends Component {

     constructor(props){
          super(props)

          this.state = {
               courses: []
          }
     }

     // componentDidMount(){
     //      axios.get("https://my-json-server.typicode.com/Yaki-Zeltzin/json-db/cursos")
     //      .then(resp => this.setState({
     //           courses:resp.data
     //      }))
     // }

     render() {

          return  (
               <CoursesContext.Consumer>
                    { context => <CouseGrid courses={this.context.courses}/>}
               </CoursesContext.Consumer>
          )
     }
}

export default Courses