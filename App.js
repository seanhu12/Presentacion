import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Button } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'boton 1',
  },


  // Crear mas datos 



];
const BotonItem = ({ title }) => (

  <Button title={title} onPress={click} >
  </Button>
);

const click = () => {  

   //crear accion para el boton
}


const App = () => {
  const renderItem = ({ item }) => (
    <BotonItem title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        
      />

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;