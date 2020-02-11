import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';

const Feed = props => {
  const theme = useTheme();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Details')}
        style={{
          backgroundColor: theme.colors.primary,
          borderRadius: 40,
          padding: 5,
        }}>
        <Text style={{color: theme.colors.background}}>Got To Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Feed;
