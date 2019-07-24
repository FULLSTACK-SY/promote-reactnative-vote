import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApiUrl from './settings'


export default App = () => {
  const [text, setText] = useState(null)
  useEffect(() => {
    fetch(`${ApiUrl}/test`)
      .then((response) => response.json())
      .then((responseJson) => {
        const { test } = responseJson
        setText(test)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])
  return (
    <View style={styles.container}>
      <Text>{ text }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
