import React from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'


import Card from '../components/Card'
import Input from '../components/Input'
import  Colors from '../constants/colors'


const StartGameScreen = props => {

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text >Select a Number</Text>
          <Input style={styles.input}/>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" color={Colors.primary} onPress={() => console.log("reset")} />
            </View>
          <View style={styles.button}>
            <Button title="Confirm" color={Colors.accent}  onPress={() => console.log("confirm")} />
            </View>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: 'center'
  }
})

export default StartGameScreen