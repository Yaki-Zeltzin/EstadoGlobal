import React, {Component} from "react"
import CoursesContext from "./CoursesContext"

class CoursesProvider extends Component {
    constructor(props){
        super(props);

        this.state = {
            courses: [{
                "id":1,
                "titulo":"React desde cero con Context API",
                "image":"https://drupal.ed.team/sities/default/files/imagenes-cdn",
                "price":40,
                "profesor":"Beto Quiroga",

            }]
        };
    }

    render(){
        return( 
            <CoursesContext.Provider value={this.state}>
                { this.props.children }
            </CoursesContext.Provider>

        )
    }
}

export default  CoursesProvider;