import React, { useState } from 'react'
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

export default function RegistrationForm({ navigation }) {
  const [email, setEmail] = useState('sambabhouria@gmail.com')
  const [phoneNumber, setPhoneNumber] = useState('+33678329035')
  const [password, setPassword] = useState('password')

  return (
    <View style={styles.regform}>
      <Text style={styles.header}>Registration</Text>

      <TextInput
        style={styles.textinput}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      ></TextInput>
      <TextInput
        style={styles.textinput}
        placeholder="Phone number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      ></TextInput>
      <TextInput
        style={styles.textinput}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      ></TextInput>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log('🚀 ~ RegistrationForm ~ phoneNumber:', phoneNumber)

          fetch('http://localhost:2000/verify', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              phoneNumber,
            }),
          })
            .then((res) => res.json())
            .then((json) => {
              if (json.success) {
                navigation.navigate('VerificationForm', {
                  email,
                  phoneNumber,
                  password,
                })
              } else {
                Alert.alert('Error', 'Could not sign up')
              }
            })
            .catch((e) => {
              Alert.alert('Error', 'Could not sign up')
            })
        }}
      >
        <Text style={styles.btntext}>Sign up</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  regform: {
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    borderBottomWidth: 1,
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold',
  },
})
