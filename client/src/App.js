import React, { useState } from 'react'

export const App = () => {
  const [query, setQuery] = useState('')
  const [users, setUsers] = useState(null)

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const response = await fetch(`http://localhost:5000/users/?name=${query}`)
      const parsedResponse = await response.json()

      setUsers(parsedResponse)
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <>
      <div className='container text-center'>
        <h1 className='my-5'>User List</h1>
        <form className='d-flex' onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            placeholder='Search user...'
            className='form-control'
            value={query}
            onChange={({ target }) => setQuery(target.value)}
          />
          <button className='btn btn-success'>Submit</button>
        </form>
        <table className='table my-5'>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          {users && (
            <tbody>
              {users.map(user => (
                <tr key={user.user_id}>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
        {users && !users.length && <p className='alert alert-danger'>No results found</p>}
      </div>
    </>
  )
}
