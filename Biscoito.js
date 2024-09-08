import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, TouchableOpacity } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/Biscoito/biscoito.png')
    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = [
      'Acredite em si mesmo e você será capaz de conquistar qualquer coisa.',
      'O sucesso não é final, a derrota não é fatal: é a coragem de continuar que conta.',
      'Você é mais forte do que pensa, mais capaz do que imagina e mais inteligente do que acredita.',
      'A vida é 10% o que acontece com você e 90% como você reage a isso.',
      'Não é a queda que define você, é a forma como você se levanta.',
      'Acredite no seu potencial e você será capaz de realizar grandes coisas.',
      'O medo é uma escolha, não uma condição.',
      'Você não pode mudar o passado, mas pode criar um futuro melhor.',
      'A motivação é o que você precisa para começar, mas a disciplina é o que você precisa para continuar.',
      'Você é capaz de criar o seu próprio destino, então vá em frente e faça isso.',
    ]
  }

  quebraBiscoito(){
    let randomNumber = Math.floor(Math.random() * this.frases.length)

    this.setState({
      textoFrase: '"' + this.frases[randomNumber] + '"',
      img: require('./src/biscoitoAberto.png')
    })
  }

  render(){
  return(
    <View style = {styles.container}>

    <Image 
      style = {styles.img}
      source = {this.state.img} 
    />

    <Text style = {styles.texto}> {this.state.textoFrase} </Text>

    <TouchableOpacity style = {styles.botao} onPress = {this.quebraBiscoito} >
      <View style = {styles.btnArea}>
        <Text style = {styles.btnTexto}>Quebrar Biscoito</Text>
      </View>
    </TouchableOpacity>

    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
    color: '#dd7b22',
    margin: 20,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  img: {
    width: 250,
    height: 250
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center' 
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})

export default App;