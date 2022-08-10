import React from 'react';
import { View,Button,Text,ImageBackground } from 'react-native';
import background2 from '../assets/img/background5.jpg'
export default function Tutorial({navigation}) {
  const textTutorial = "Tap the arrow to start. Tap the screen again to allow your bird to fly and to start the game.easure your tap heights to go between the two pipes.The faster you tap, the higher you go. Each tap represents a wing flap and higher flight. Once you stop, you drop towards the ground."
    React.useEffect(()=>{
        navigation.setOptions({
          headerLeft: () => (
            <Button
              onPress={() => {
                navigation.goBack();
              }}
              title="Back"
            />
          ),
          headerRight:null
        });
    },[])
    
    return(
      <ImageBackground 
          source={background2}
          resizeMode="cover" 
          style={{flex:1}}
        >
        <View
            style={{
              flex:1,
              backgroundColor: 'rgba(0,0,0, .7)',
              alignItems:'center',
              paddingHorizontal: 20
            }}
          >
            <Text 
              style={{
                paddingHorizontal:10,
                paddingTop:10,
                fontSize:18,
                color:'white'
              }}
            >
              {textTutorial}
            </Text>
        </View>
        </ImageBackground>
    )
}