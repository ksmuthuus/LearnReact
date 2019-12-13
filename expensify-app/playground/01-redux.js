import {createStore} from 'redux'

const store = createStore((state={count:100}, action) => {
  switch(action.type){
    case 'INCREMENT':
      return{
        count:state.count + action.incrementBy
      }

      case 'DECREMENT':
        return{
          count:state.count-action.incrementBy
        }

      case 'SET':
        return{
          count:action.count
        }

      case 'RESET':
        return{
          count:0
        }

      default:
        return state
  }
 
})

const incrementCount = ({ incrementBy = 1 } = { }) => {
  type:'INCREMENT',
  incrementBy
}

const decrementCount = ({ decrementBy = 1 } = {}) => {
  type:'DECREMENT',
  decrementBy
}

const set = ({count=1}={}) => {
  type:'SET',
  count
}
const reset = () => {
  type:'RESET'
}

store.subscribe(() => {
  const data = store.getState()
  console.log(data)
})

store.dispatch(incrementCount())
store.dispatch(incrementCount())

store.dispatch(decrementCount())


store.dispatch(set({count:100}))

store.dispatch(reset())
