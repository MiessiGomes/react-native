import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            numero: 0,
            botao: 'Iniciar',
            lastTime: null
        }


        this.timer = null //variavel do timer do relógio
        this.iniciar = this.iniciar.bind(this)
        this.limpar = this.limpar.bind(this)
    } 

    iniciar(){

        if(this.timer != null){
            //Parar o timer
            clearInterval(this.timer);
            this.timer = null
            
            this.setState({botao: 'Iniciar'})
        }else{
            //Começar girar o timer
            this.timer = setInterval( () =>{
                this.setState({numero: this.state.numero + 0.1})
            }, 100)

            this.setState({botao: 'Parar'})
        }

    }

    limpar(){
        if(this.timer != null){
            clearInterval(this.timer)
        }
        this.setState({
            lastTime: this.state.numero,
            numero: 0,
            botao: 'Iniciar'
        })
    }

    render(){
    return(
        <View style = {styles.container}>

        <Image
        source = {require('./src/cronometro.png')}
        style = {styles.cronometro} 
        />

        <Text style = {styles.timer}>{this.state.numero.toFixed(1)}</Text>


        <View style = {styles.btnArea}>

            <TouchableOpacity style = {styles.botao} onPress = {this.iniciar} >
                <Text style = {styles.btnTexto}>{this.state.botao}</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.botao} onPress = {this.limpar} >
                <Text style = {styles.btnTexto}>Limpar</Text>
            </TouchableOpacity>

        </View>

        <View style = {styles.lastArea}>
                <Text style = {styles.textTempo}>
                    {this.state.lastTime > 0 ? 'Último Tempo: ' + this.state.lastTime.toFixed(2) + 's' : ''}
                </Text>
        </View>


        </View>

        
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#371a52'
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
  botao:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 40,
    margin: 20,
    borderRadius: 20
  },
  btnArea: {
    marginTop: 80,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center' 
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#371a52'
  },
  timer: {
    marginTop: -160,
    color: 'white',
    fontSize: 65,
    fontWeight: 'bold'
  },
  lastArea: {
    marginTop: 40
  },
  textTempo: {
    fontSize: 25,
    fontStyle: 'italic',
    color: 'white'
  }
})

export default App;