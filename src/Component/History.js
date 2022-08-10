import AsyncStorage from "@react-native-community/async-storage";
import React from "react";
import { View, Button,Text, ImageBackground, ScrollView } from "react-native";
import background2 from '../assets/img/background4.jpg'

export default function HistoryScreen({navigation}){
    const [higherPoint, sethigherPoint] = React.useState(0);
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
    React.useEffect(()=>{
        navigation.addListener('focus',()=>{
            setPoint();
        })
    },[])
    const setPoint = async()=>{
        const point = await AsyncStorage.getItem("POINT");
        console.log(point);
        if(point !== null){
            sethigherPoint(point)
        }
    }
    return(
        <ImageBackground
            source={background2}
            resizeMode="cover" 
            style={{flex:1}}
        >
        <ScrollView
            style={{
            flex:1,
            backgroundColor: 'rgba(0,0,0, .7)',
            paddingHorizontal: 20
            }}
        >
            <Text style={{fontSize:20, marginHorizontal:10,marginVertical:20,color:'tomato',fontWeight:'bold'}}>
                Your higher point is : {higherPoint}
            </Text>
            <Text style={{fontSize:20, marginHorizontal:10,marginVertical:10,color:'white'}}>Tips to have higher point</Text>
            <Text 
                style={{fontSize:16, marginHorizontal:10,marginVertical:10,color:'white'}}
            >
            1. Slower is Better
                More tapping isn't always better in Flappy Bird, but your flappy bird falls so flapping fast that it's easy to overdo it. Flappy Bird is all about finding the right rhythm, so get used to a slower pace. This is especially true for the critical moment when you pass between pipes and score points. You move upward so quickly in this game that it's better to aim low and give yourself room to rise.
            </Text>
            <Text 
                style={{fontSize:16, marginHorizontal:10,marginVertical:10,color:'white'}}
            >
            2. Let Yourself Fall
                Though it often feels like you're fighting against gravity the whole game, never forget your real enemy: the game's developer. No, sorry, I meant the oncoming randomly placed pipes. I know those sudden drops toward bird-killing ground seem horrifying, but you'll need that burst of speed for when the openings suddenly change altitude.Also, you're not going to be able to stay level. That's just now how the game works. Find the Zen in a bobbing rhythm and remember these words from The Tick: "gravity is a harsh mistress."
            </Text>
            <Text
                style={{fontSize:16, marginHorizontal:10,marginVertical:10,color:'white'}}
            >
            3. Stay Calm
                This might seem obvious, but it's really important. The more tense and stressed you get, the worse you're going to play. If you're really shooting for a high score, walk away from the game when you start feeling frustrated and come back refreshed. The time it took to set up the iPad in the above tip was probably as useful as the larger format toward getting me a better score.


            </Text>
        </ScrollView>
        </ImageBackground>
    )
}