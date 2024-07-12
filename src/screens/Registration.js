import React from 'react'
import { StyleSheet, View } from 'react-native'
import RegistrationForm from '../components/registration-form'

const Registration = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <RegistrationForm navigation={navigation} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#36485f',
    paddingLeft: 60,
    paddingRight: 60,
  },
})

export default Registration
