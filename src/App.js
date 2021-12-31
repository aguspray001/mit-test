import React, {useState} from 'react';
import {Button, LogBox, StyleSheet, Text, TextInput, View} from 'react-native';
import {verticalFlip} from './Action';
// ignore all logs for production mode
LogBox.ignoreAllLogs();

const App = () => {
  const [inputText, setInputText] = useState('');
  const [typeTransform, setTypeTransform] = useState('');
  const [outputTransform, setOutputTransform] = useState('');

  const onSubmit = data => {
    // destructuring data
    const {input, type} = data;

    // if input not empty string / ""
    if (input !== '') {
      // splt and looping type transform as array
      const arrayOfType = type.split(",");

      for (let i = 0; i < arrayOfType.length; i++) {
        // if input of submit is "v", then verticalflip function will execute and set output value.
        const filterType = type[i].toLowerCase().replace(/ /g, '');
        if (filterType === 'v') {
          const res = verticalFlip(input, setOutputTransform);
          setOutputTransform(res);
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>MIT-Test: Text Transform</Text>
      <TextInput
        style={styles.textAreaInput}
        multiline={true}
        numberOfLines={10}
        onChangeText={e => setInputText(e)}
        value={inputText}
      />
      <TextInput
        style={styles.textInput}
        onChangeText={e => setTypeTransform(e)}
        value={typeTransform}
      />
      <Button
        onPress={() => onSubmit({input: inputText, type: typeTransform})}
        title="Transform"
        color="orange"
      />
      <Text style={{...styles.text, marginTop: 20}}>
        Output: {outputTransform}
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    width: '80%',
    padding: 10,
    marginTop: 20,
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 2,
    marginBottom: 20,
  },
  textAreaInput: {
    height: 40,
    width: '80%',
    padding: 10,
    marginTop: 20,
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 2,
  },
  text: {fontWeight: 'bold', fontSize: 20, color: 'white'},
});
