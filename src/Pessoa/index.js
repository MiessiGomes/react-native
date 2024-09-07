import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"

class Pessoa extends Component{
    render(){
        return(
            <View style = {styles.areaPessoa}>
                <Text style = {styles.textoPessoa}>Nome: {this.props.data.nome}</Text>
                <Text style = {styles.textoPessoa}>Idade: {this.props.data.idade}</Text>
                <Text style = {styles.textoPessoa}>Email: {this.props.data.email}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textoPessoa: {
        textAlign: 'center',
        fontSize: 30,
        color: '#fff',
        margin: 20,
        fontStyle: 'italic',
        textAlign: 'center'
        },
        areaPessoa: {
            backgroundColor: 'gray',
            height: 250,
            marginBottom: 20
        }
})

export default Pessoa