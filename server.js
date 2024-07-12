// https://medium.com/@tharindugimras/typescript-setup-with-nodejs-yarn-package-manager-nodemon-fa9fb2275655
const express = require('express')
var bodyParser = require('body-parser')
const textflow = require('textflow.js')
const { User } = require('./userModel')

textflow.useKey(
  'B8o53nayR8ZMIfhwbsNjD5vH3KS2e1JXau3282LIFMQFlKVmhV9uL17qRctOeUTj'
)

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/register', async (req, res) => {
  const { email, phoneNumber, password, code } = req.body

  var result = await textflow.verifyCode(phoneNumber, code)

  if (!result.valid) {
    return res.status(400).json({ success: false })
  }

  if (User.add(email, phoneNumber, password)) {
    return res.status(200).json({ success: true })
  }

  return res.status(400).json({ success: false })
})
app.post('/verify', async (req, res) => {
  const { phoneNumber } = req.body
  console.log('🚀 ~ app.post ~ phoneNumber:', phoneNumber)

  var result = await textflow.sendVerificationSMS(phoneNumber)
  console.log('🚀 ~ app.post ~ result:', result)

  if (result.ok) {
    //send sms here
    return res.status(200).json({ success: true })
  }

  return res.status(400).json({ success: false })
})
app.get('/', function (req, res) {
  res.send('Hello listening on port 2000')
})

app.listen(2000)
