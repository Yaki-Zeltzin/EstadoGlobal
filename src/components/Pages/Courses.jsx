import React from 'react'
import CoursesContext from '../Context/CoursesContext'
import CouseGrid from '../Organisms/CouseGrid'



const Courses = () => {
     <CoursesContext.Consumer>
          {context => <CouseGrid courses={this.context.courses} />}
     </CoursesContext.Consumer>
}

export default Courses;