// Started/Forked from: https://github.com/jkasun/stack-abuse-express-authentication/tree/master
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const crypto = require('crypto')
const app = express()
const authTokens = {}

const users = [
  // This user is added to the array to avoid creating new user on each restart
  {
    firstName: 'John',
    email: 'johndoe@email.com',
    // This is the SHA256 hash for value of `password`
    password: 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg='
  }
]

const getHashedPassword = password => {
  const sha256 = crypto.createHash('sha256')
  const hash = sha256.update(password).digest('base64')
  return hash
}

const generateAuthToken = () => {
  return crypto.randomBytes(30).toString('hex')
}

// to support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.use(cookieParser())

app.use((req, res, next) => {
  const authToken = req.cookies.AuthToken
  req.user = authTokens[authToken]
  next()
})

app.post('/login', (req, res) => {
  const { email, password } = req.body
  const hashedPassword = getHashedPassword(password)

  const user = users.find(u => {
    return u.email === email && hashedPassword === u.password
  })

  if (user) {
    const authToken = generateAuthToken()

    authTokens[authToken] = email

    // res.cookie("AuthToken", authToken);
    res.status(200).send({ message: 'Login Successful', authToken })
    return
  } else {
    res.status(404).send({ message: 'User not found' })
    return
  }
})

app.get('/register', (req, res) => {
  res.render('register')
})

app.post('/register', (req, res) => {
  const { email, firstName, password } = req.body

  if (users.find(user => user.email === email)) {
    res.status(404).send({ message: 'User already registered' })
    return
  }

  const hashedPassword = getHashedPassword(password)

  users.push({
    firstName,
    email,
    password: hashedPassword
  })

  res.status(201).send({ message: 'User created', email })
  return
})

app.listen(3000)
