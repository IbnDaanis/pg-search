import express from 'express'
import cors from 'cors'
import { pool } from './database/database.js'

const app = express()

app.use(cors())

app.get('/users', async (req, res) => {
  try {
    const { name } = req.query

    const users = (
      await pool.query("SELECT * FROM users WHERE first_name || ' ' || last_name LIKE $1", [
        `%${name}%`
      ])
    ).rows

    res.json(users)
  } catch (err) {
    console.error(err.message)
  }
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`)
})
