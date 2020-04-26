import React, {Component} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import buttonRed from './styles/buttonRed';
import {createUser} from '../services/FirebaseApi';

const img = require('../assets/icon/list.png');

export default class Register extends Component {
  state = {
    email: '',
    password: '',
  };

  async _createUserAsync() {
    try {
      const user = await createUser(this.state.email, this.state.password);
      Alert.alert(
        'User Created!',
        `User ${user.email} has succesfuly been created!`,
        [
          {
            text: 'OK',
            onPress: () => {
              this.props.navigation.goBack();
            },
          },
        ],
      );
    } catch (error) {
      Alert.alert('Create User Failed!', error.message);
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.topView}>
          <Image source={img} style={styles.img} />
          <Text style={styles.title}>Registering new user</Text>
        </View>
        <View style={styles.bottomView}>
          <TextInput
            placeholder="Email"
            keyboardType={'email-address'}
            autoCapitalize="none"
            onChangeText={(email) => this.setState({email})}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
            style={styles.input}
          />
          <TouchableOpacity
            onPress={() => {
              this._createUserAsync();
            }}
          >
            <View style={buttonRed.container}>
              <Text style={buttonRed.text}>Sign in</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  topView: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  img: {
    width: 50,
    height: 50,
  },
  title: {fontSize: 20, fontWeight: 'bold', marginLeft: 20},
  bottomView: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  input: {
    paddingHorizontal: 20,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#e1e1e1',
    borderRadius: 10,
  },
});
