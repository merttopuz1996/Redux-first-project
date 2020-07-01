 import React, { Component } from 'react'
 import { bindActionCreators } from 'redux'
import {inccByTworeaseCounter} from '../redux/actions/counterActions'
import {connect} from 'react-redux'
class IncreaseByTwoCounter extends Component {
     render() {
         return (
             <div>
                     <button onClick ={e=>{
                  this.props.dispatch(inccByTworeaseCounter());
              }}>
                  2arttır
              </button>
             </div>
         )
     }
 }
 function mapDispatchToProps(dispatch){
    //increase counter aksiyonu com.değil
    //event olduğu için bind ediyoruz
    return {actions:bindActionCreators(inccByTworeaseCounter,dispatch)}
}
export default connect(mapDispatchToProps(IncreaseByTwoCounter));