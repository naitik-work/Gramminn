import React from 'react'
import '../style/form.scss'
import {Link} from 'react-router'
const login = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
  }


  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name='username' id='username' placeholder='Enter username' />
          <input type="password" name='password' id='password' placeholder='Enter password' />
          <button className='button primary-button'>Login</button>
        </form>
        <p>Don't have an account? <Link to="/register">Create one.</Link></p>
      </div>
    </main>
  )
}

export default login
