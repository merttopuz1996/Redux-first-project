 import React, { Component } from 'react'
 import {connect} from "react-redux"
 class Counter extends Component {
     render() {
         return (
             //state bilgisini counterdan yakala
             <div>
                 <h1>{this.props.counter}</h1>
             </div>
         )
     }
 }
  function mapStateToProps(state){
      //state bilgisni counterReducerdan çek
      //nesne olarak döndük birden fazla olabilrceği için
      return {counter:state.counterReducer}
  }
  //counter ın proplarına state i bağla
 export default connect(mapStateToProps)(Counter);
