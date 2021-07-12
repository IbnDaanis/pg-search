import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/users', async (req, res) => {
  try {
  } catch (err) {
    console.error(err.message)
  }
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`)
})
