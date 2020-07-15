import React from 'react'
import {View, StyleSheet, Text, TextInput, Button} from 'react-native'
import Card from '../components/Card'


const StartGameScreen = props => {
  
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text >Select a Number</Text>
          <TextInput/>
        <View style={styles.buttonContainer}>
          <View style={styles.button}><Button title="Reset" color="#c7171c" onPress={() => console.log("reset")} /></View>
          <View style={styles.button}><Button title="Confirm" color="#f7287b" onPress={() => console.log("confirm")} /></View>
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
  }

})

export default StartGameScreen