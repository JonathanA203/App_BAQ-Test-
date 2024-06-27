import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Iniciar Sesión </Text>
      <Text style={styles.subTituloitulo}> :) </Text>
      <TextInput 
        placeholder="Usuario ..."
        style={styles.txtInput}
      />
      <TextInput 
        placeholder="Contraseña ..."
        style={styles.txtInput}
        secureTextEntry={true}
      />
      <Text style={styles.subTituloitulo}> Verificando Datos ... </Text>
      <StatusBar style="auto" />
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
  titulo: {
    fontSize: 40,
    color: '#000',
    fontWeight: 'bold',
  },
  subTitulo: {
    fontSize: 30,
    color: 'gray',
    fontWeight: 'bold',
  },
  txtInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    paddingStart: 20,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#f1f1f1',
  },
});
