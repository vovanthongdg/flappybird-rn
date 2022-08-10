import { StyleSheet, Text, TouchableOpacity, View,ImageBackground,SafeAreaView } from 'react-native'
import React from 'react'



const Splash = ({navigation}) => {
  
    
  return (

      <View
        style={{
          flex:1,
          backgroundColor: 'rgba(0,0,0, .5)',
          justifyContent:'center',
          alignItems:'center',
          paddingHorizontal: 20
        }}
      >
      <Text style={styles.welcome}>{`FlappyBird Game`}</Text>
      <View style={styles.view1}>
      <TouchableOpacity onPress={() => navigation.navigate('game')}>
        <Text style={styles.instructions}>Play Game </Text>
      </TouchableOpacity>
      </View>
     
      </View>
    
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