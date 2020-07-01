import * as actionTypes from "./actionTypes"

export const increaseCounter = ()=>({
  type :actionTypes.INCREASE_COUNTER,
  payload:1
     
})
export const decreaseCounter = ()=>({
    type :actionTypes.DECREASE_COUNTER,
    payload:1
       
  })
  //payload 2 şerartıcağı için 2 
  export const inccByTworeaseCounter = ()=>({
    type :actionTypes.INCREASE_BY_TO_COUNTER,
    payload:2
  })

