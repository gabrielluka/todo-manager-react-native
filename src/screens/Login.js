import React, {useState} from 'react';
import {CommonActions} from '@react-navigation/native';

import {
  KeyboardAvoidingView,
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

import buttonRed from './styles/buttonRed';
import {signInOnAsync} from '../services/FirebaseApi';

const img = require('../assets/list.png');

const Login = (props) => {
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState('');

  const _signIn = async () => {
    try {
      const {user} = await signInOnAsync(email, password);
      Alert.alert(
        'User Authenticated',
        `User ${user.email} has succesfuly been authenticated`,
      );
      props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'TaskList'}],
        }),
      );
    } catch (error) {
      Alert.alert('Login Falied', error.message);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.topView}>
        <Image style={styles.img} source={img} />
      </View>
      <View style={styles.bottomView}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          keyboardType={'email-address'}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(pass) => setPassword(pass)}
          placeholder="Password"
          secureTextEntry={true}
        />

        <TouchableOpacity onPress={() => _signIn()}>
          <View style={buttonRed.container}>
            <Text style={buttonRed.text}>Sign in</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.textConteiner}>
          <Text style={styles.textRemember}>Not a member? Let's </Text>
          <Text
            style={styles.textResgiter}
            onPress={() => {
              props.navigation.navigate('Register');
            }}
          >
            Register
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  topView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 80,
  },
  img: {
    width: 150,
    height: 150,
  },
  bottomView: {
    flexDirection: 'column',
    paddingRight: 20,
    paddingLeft: 20,
  },
  input: {
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#e1e1e1',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  textConteiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  textRemember: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
  textRegister: {
    fontWeight: 'bold',
  },
  textResgiter: {
    fontWeight: 'bold',
    fontSize: 16.5,
  },
});

export default Login;
