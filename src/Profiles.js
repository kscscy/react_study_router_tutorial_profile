import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import Profile from './Profile'

const Profiles = () => {
  const activeStyle = {
    background: 'black',
    color: 'white'
  }
  return (
    <div>
      <h3>사용자 목록:</h3>      
      <ul>
        <li>
          {/* <Link to="/profiles/test">test</Link> */}
          <NavLink activeStyle={activeStyle} to="/profiles/test" >test</NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/test2" >test2</NavLink>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={()=> <div>사용자를 선택해 주세요.</div>}
      />
      <Route 
        path="/profiles/:username"
        component={Profile}
      />
    </div>
  )
}

export default Profiles
