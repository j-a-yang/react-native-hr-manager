import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    {/*
      Style prop is passed an array,
      the style on the right will overwrite
      the one to the left
    */},
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
