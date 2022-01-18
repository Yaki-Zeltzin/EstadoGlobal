import React, {Component } from 'react'

/* withLoader recibe como parámetro un componente "WrappedComponent" y éste retorna otro componente */
const withLoader = (propValue) => (WrappedComponent) => {
     return class WithLoader extends Component {

          render() {
               return this.props[propValue].length === 0
               ? <h1>Cargando ...</h1> 
               : <WrappedComponent {...this.props} />
          }
     }

     
}

export default withLoader