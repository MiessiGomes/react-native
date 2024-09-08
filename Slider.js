import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import Slider from '@react-native-community/slider'

export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            valor: 0
        }
    }
    
    render(){

        return (
            <View style = {styles.container}>
                

            <Slider 
            minimumValue={0}
            maximumValue={100}
            onValueChange={(valorSelecionado) => this.setState({valor: valorSelecionado})}
            value={this.state.valor}
            minimumTrackTintColor='blue'
            maximumTrackTintColor='red'

            />

            <Text style = {styles.logo}>
                Você tem {this.state.valor.toFixed(0)} Kg
            </Text>


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