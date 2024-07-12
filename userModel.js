class User {
  static list = {}
  constructor(email, phoneNumber, password) {
    this.email = email
    this.phoneNumber = phoneNumber
    this.password = password
  }
  static add(email, password, phoneNumber) {
    if (!email || this.list[email]) return false

    this.list[email] = new User(email, phoneNumber, password)
    return true
  }
}

module.exports = { User }
