import React from 'react'
import {BrowserRouter, Route, NavLink, Switch, Link} from 'react-router-dom'

const ExpenseDashboardPage = () => (
  <div>Header</div>
)


const AddExpensePage = () => (
  <div>
  Create Expense
  </div>
)

const EditExpensePage = () => (
  <div>
  View Expense
  </div>
)

const HelpPage = () => (
  <div>
  Help page
  </div>
)

const NotFoundPage = () => (
  <div>
  404 - <Link to='/'> Go Home</Link>
  </div>
)



const Header = () => (
  <header>
  <h1> Expensify App</h1>
  <NavLink to='/' activeClassName='is-active' exact={true}>Dashboard</NavLink>
  <NavLink to='/create' activeClassName='is-active' >Create</NavLink>
  <NavLink to='/view' activeClassName='is-active' >View</NavLink>
  <NavLink to='/help' activeClassName='is-active' >Help</NavLink>
  </header>

)


const AppRouter = () => (
  <BrowserRouter>
  <Header/>
  <div>
  <Switch>
    <Route path='/' component={ExpenseDashboardPage} exact={true}/>
    <Route path='/create' component={AddExpensePage}/>
    <Route path='/view' component={EditExpensePage}/>
    <Route path='/help' component={HelpPage}/>
    <Route component={NotFoundPage}/>
  </Switch>
  </div>
</BrowserRouter>
)

export default AppRouter