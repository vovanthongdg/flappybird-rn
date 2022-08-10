import { StyleSheet, Text, TouchableOpacity, View,ImageBackground,SafeAreaView } from 'react-native'
import React from 'react';
import background2 from '../assets/img/background4.jpg'

const Splash = ({navigation}) => {
  return (
    <ImageBackground 
          source={background2}
          resizeMode="cover" 
          style={{flex:1}}
        >
      <View
        style={{
          flex:1,
          backgroundColor: 'rgba(0,0,0, .5)',
          justifyContent:'center',
          alignItems:'center',
          paddingHorizontal: 20
        }}
      >
      <Text style={styles.welcome}>{`Bird Control Funny Game`}</Text>
      <View style={styles.view1}>
      <TouchableOpacity onPress={() => navigation.navigate('game')}>
        <Text style={styles.instructions}>Play Game </Text>
      </TouchableOpacity>
      </View>
      <View style={{...styles.view1,marginTop:20}}>
      <TouchableOpacity onPress={() => navigation.navigate('tutorial')}>
        <Text style={styles.instructions}>Tutorial Game </Text>
      </TouchableOpacity>
      </View>
      <View style={{...styles.view1,marginTop:20}}>
      <TouchableOpacity onPress={() => navigation.navigate('history')}>
        <Text style={styles.instructions}>History And Tips</Text>
      </TouchableOpacity>
      </View>
      </View>
    </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
      },
      welcome: {
        fontSize: 30,
        marginBottom: 54,
        textAlign: 'center',
        color: 'white',
        fontWeight: '900',
      },
      view1: {
        height: 50,
        width: 200,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10,
        shadowColor: "#fff",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      instructions: {
        textAlign: 'center',
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
      },
})