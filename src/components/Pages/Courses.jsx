import React from 'react'
import CouseGrid from '../Organisms/CouseGrid'
import { connect } from 'react-redux'

const Courses = ({courses}) => <CouseGrid courses={courses}/>

const mapStateToProps = state => ({
     courses: state.coursesReducer.courses
})

export default connect(mapStateToProps,{})(Courses) 