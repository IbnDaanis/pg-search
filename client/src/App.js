import React, { useState } from 'react'

export const App = () => {
  const [query, setQuery] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    console.log(query)
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
      </div>
    </>
  )
}
