import {createStore} from 'redux'

const store = createStore((state={count:100}, action) => {
  switch(action.type){
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy :1
      return{
        count:state.count + incrementBy
      }

      case 'DECREMENT':
        const decrementBy = !isNaN(action.decrementBy) ? action.decrementBy :1
        return{
          count:state.count-decrementBy
        }

      case 'SET':
        const setCount = !isNaN(action.count)?action.count:0
        return{
          count:setCount
        }

      case 'RESET':
        return{
          count:0
        }

      default:
        return state
  }
 
})

store.subscribe(() => {
  const data = store.getState()
  console.log(data)
})

store.dispatch({
  type:'INCREMENT',
  incrementBy:100
})

store.dispatch({
  type:'DECREMENT',
  decrementBy: '50'
})


store.dispatch({
  type:'SET',
  count: '1000'
})

store.dispatch({
  type:'RESET'
})
