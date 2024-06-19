import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text StyleSheet={styles.titulo}> Iniciar Sesión </Text>
      <Text StyleSheet={styles.subTituloitulo}> :) </Text>
      <TextInput 
        placeholder="Usuario ..."
        StyleSheet={styles.TextInput}
      />
      <TextInput 
        placeholder="Contraseña ..."
        StyleSheet={styles.textInput}
        secureTextEntry={true}
      />
      <Text StyleSheet={styles.subTituloitulo}> Verificando Datos ... </Text>
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
    fontSize: 80,
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
