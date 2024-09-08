import React, {Component} from 'react'
import {View, StyleSheet, Text, Switch} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import Slider from '@react-native-community/slider'

export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            status: false
        }
    }
    
    render(){

        return (
            <View style = {styles.container}>
            


            <Switch
            value = {this.state.status}
            onValueChange = {(valorSwitch) => this.setState({status: valorSwitch})}
            thumbColor = 'blue'
            />

            <Text style={styles.logo}>
                {this.state.status ? 'Ligado' : 'Desligado'}
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