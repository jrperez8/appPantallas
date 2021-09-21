import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import contacts from './contacts';
import fotos from './fotos';

//export default function App() {
  function App(props){
  const [contador, setContador] = useState(0);
  const contar = () => {setContador(anterior => anterior + 1)};
  const descontar = function () {setContador(anterior => anterior - 1)}
  return (
    <View style={styles.container}>
      <View>
       <Text style= {styles.titulo}>Navegando entre Pantallas</Text>
      </View>
      <View>
        <Text>Contador: {contador}</Text>  
      </View> 
      <View style={{flexDirection: 'row', backgroundColor: 'lime'}}>
        <TouchableOpacity style={styles.button}> 
          <Text style= {styles.textico} onPress={contar}>Contar</Text>
        </TouchableOpacity>  
        <TouchableOpacity style={styles.button}>
          <Text style= {styles.textico} onPress={descontar}>Descontar</Text>
        </TouchableOpacity>
      </View> 

      <View style={{flexDirection: 'row', backgroundColor: 'lime'}}>
        <TouchableOpacity style={styles.button} 
        onPress={()=> props.navigation.navigate('Somos',{
          edad: 41,
          nombre : 'John Doe',
          salario : 7500000
        })}
        > 
          <Text style= {styles.textico}>Quienes Somos</Text>
        </TouchableOpacity>  
        <TouchableOpacity style={styles.button} 
          onPress={()=>props.navigation.navigate('Contactenos')}
        >
          <Text style= {styles.textico}>Contactenos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} 
          onPress={()=>props.navigation.navigate('Fotos')}>
          <Text style= {styles.textico}>Fotos</Text>
        </TouchableOpacity>
      </View>     
      <StatusBar style="auto" />
    </View>
  );
}

class Qsomos extends React.Component {
  static navigationOptions = {
    title: 'Quienes Somos',
    headerStyle: {
      backgroundColor: 'orange',
    },
    headerTintColor: 'red',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    const { navigation } = this.props;
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Quienes Somos como Titulo</Text>
        <Button
          title="Ir a Inicio"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Text>
          Edad: {JSON.stringify(navigation.getParam('edad', 'NO EDAD'))}
          {/* itemId: {navigation.getParam('itemId', 'NO-ID')} */}
        </Text>
        <Text>
          Nombre: {navigation.getParam('nombre', 'SIN NOMBRE')}
          {/* otherParam: {JSON.stringify(navigation.getParam('otherParam', 'default value'))} */}
        </Text>
        <Text>
          Apellido: {navigation.getParam('apellido', '')}
          {/* otherParam: {JSON.stringify(navigation.getParam('otherParam', 'default value'))} */}
        </Text>
        <Text>
          Salario: {navigation.getParam('salario', '0') * 2}
        </Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: App,
    Somos: Qsomos,
    Contactenos : contacts,
    Fotos : fotos
    /*Contacts: Contactus,
    Photos: Photos,
    CUs: CUs,*/
    
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App1 extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'peru',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo : {
    fontWeight: 'bold',
    color: 'blue'
  },
  button : {
    backgroundColor:'gray',
    borderRadius:5,
    margin:10, 
    padding: 5
  },
  textico: {
    color: 'orange', 
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
