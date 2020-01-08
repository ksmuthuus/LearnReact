const {
  createStore,
  combineReducers
} = require('redux')

//Action creators with Actions
const createPolicy = (name, amount) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name,
      amount
    }
  }
}

const deletePolicy = (name) => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name
    }
  }
}

const claimPolicy = (name, amount) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name,
      amount
    }
  }
}

//Reducers

const claimsHandler = (existingClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    return [...existingClaims, action.payload]
  } else {
    return existingClaims
  }
}

const policyHandler = (existingPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...existingPolicies, action.payload.name]
  } else if (action.type === "DELETE_POLICY") {
    return existingPolicies.filter(name => name !== action.payload.name)
  }
  return existingPolicies
}

const accountsHandler = (bagOfMoney = 100, action) => {
  if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount
  } else if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amount
  }
  return bagOfMoney
}


//State Store



const store = createStore(combineReducers({
  policies: policyHandler,
  claims: claimsHandler,
  accounts: accountsHandler
}))

console.log(store.getState())
store.dispatch(createPolicy('M1', 10))
store.dispatch(createPolicy('M2', 20))
console.log(store.getState())
store.dispatch(claimPolicy('M2', 10))
console.log(store.getState())
store.dispatch(claimPolicy('M1', 40))
console.log(store.getState())
store.dispatch(deletePolicy('M1'))
console.log(store.getState())