import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { Picker } from '@react-native-picker/picker'

export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            pizza: 0,
            pizzas: [
                {key: 1, nome: 'Strogonoff', valor: 39.90},
                {key: 1, nome: 'Calabresa', valor: 70.90},
                {key: 1, nome: 'Bacon', valor: 40.90},
                {key: 1, nome: 'Brigadeiro', valor: 25.0},
            ]
        }
    }
    
    render(){
        let pizzasItem = this.state.pizzas.map( (v, key) => {
            return <Picker.Item key = {key} value = {key} label = {v.nome} />
        })

        return (
            <View style = {styles.container}>
                <Text style = {styles.logo}>Menu Pizza</Text>
                
                <Picker
                selectedValue = {this.state.pizza}
                onValueChange = {(itemValue, itemIndex) => this.setState({pizza:  itemValue})}


                >
                  {pizzasItem}  
                </Picker>

                <Text style = {styles.pizzas}>Você escolhe: {this.state.pizzas[this.state.pizza].nome}</Text>
                <Text style = {styles.pizzas}>R$: {this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    logo: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold'
    },
    pizzas: {
        marginTop: 15,
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})