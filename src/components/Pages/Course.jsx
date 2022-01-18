import React, {useState} from 'react'

// match objeto que devulvve el parametro de la ruta ":id"
const Course = ({ match }) => {

     const [state, /*  setState */ ] = useState({
               id: 1,
               title: "React desde cero",
               image: "https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
               price: 20,
               profesor: "Beto Quiroga"
          
     })

     console.log(state)

    /*  const cursoActual = courses.filter(c => c.id === parseInt(match.params.id))[0] */

     return (
          <div className="ed-grid m-grid-3">
               {
                    state ? (
                         <>
                              <h1 className="m-cols-3">{state.title}</h1>
                              <img className="m-cols-1" src={state.image} alt={state.title} />
                              <p className="m-cols-2">{`Profesor: ${state.profesor}`}</p>
                         </>
                    ) :
                         <h1>El curso no existe</h1>
               }
          </div>
     )
}

export default Course