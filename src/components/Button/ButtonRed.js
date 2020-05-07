import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import stylesButton from './styles';
import PropTypes from 'prop-types';

const ButtonRed = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onPress()}>
      <View style={stylesButton.container}>
        <Text style={stylesButton.text}>{props.buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

ButtonRed.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default ButtonRed;
