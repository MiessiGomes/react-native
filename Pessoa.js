import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Pessoa from './src/Pessoa';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            feed: [
                {id: '1', nome: 'José', idade: 24, email: 'jose@gmail.com'},
                {id: '2', nome: 'Thiago', idade: 22, email: 'thiago@gmail.com'},
                {id: '3', nome: 'Natan', idade: 24, email: 'natan@gmail.com'},
                {id: '4', nome: 'Maria', idade: 22, email: 'maria@gmail.com'},
                {id: '5', nome: 'Luana', idade: 22, email: 'luana@gmail.com'}
            ]
        }
    }
    
    
    render() {
        return (
            <View style = {styles.container}>
                <FlatList
                data = {this.state.feed}
                keyExtractor={(item) => item.id}
                renderItem = { ({item}) => <Pessoa data  = {item}/> }

                />
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
  
export default App;
