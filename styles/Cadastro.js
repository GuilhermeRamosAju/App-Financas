import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 39,
  },
  title: {
    fontSize: 24,
    marginBottom: 26,
  },
  input: {
    marginBottom: 16,
    padding: 10,
    height: 54,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#898989',
    color: '#898989',

  },
  button: {
    marginBottom: 16,
    padding: 15,
    height: 54,
    backgroundColor: '#00C950',
    borderRadius: 5,
  },
  orText: {
    marginVertical: 16,
    textAlign: 'center',
    color: '#898989',
  },
  loginWith:{
    marginBottom: 16,
    padding: 15,
    height: 54,
    backgroundColor:'#000000',
    borderRadius: 5,

  },
  underlineText: {
    marginTop: 13,
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: '#00C950',

  },
})