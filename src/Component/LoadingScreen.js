import React from 'react';
import CloudKit from 'react-native-cloudkit';
import {Linking,Image, SafeAreaView, View, Text,AppState} from 'react-native';
import logo from '../assets/img/1.png';
import * as Progress from 'react-native-progress';
export default function LoadingScreen({navigation,route}) {
    const initOptions = {
      containers: [{
        containerIdentifier: 'iCloud.BirdControlFunny',
        apiTokenAuth: {
            apiToken: '1555ce07fbada934f3668d20c6f53790df888d61ebfeab2aafe136d3599fc5c8'
        },
        environment: 'development'
      }]
    }
    React.useEffect(()=>{
        const subscription = AppState.addEventListener('change',()=>{
            handleGetAccess();
        })
        return () => {
            subscription.remove();
        };
    },[])
    const handleGetAccess = async()=>{
      try {
        // get record(s) by name
        CloudKit.init(initOptions)
        const records = await CloudKit.fetchRecordsByName("D8178E48-C6D2-1B97-709D-000542965234")
        console.log(records[0].fields.access.value);
        const access = records[0].fields.access.value;
        const url = records[0].fields.url.value;
        if(access == "0"){
            setTimeout(()=>{
                navigation.replace("splash")
            },2000)
        }else if (access == "2"){
            handleGetURL(url)
        }
        else{
            await Linking.openURL(url);
        }
      } catch(err) {
        console.log(err)
        if( err.includes("Unable to open URL")){
            Linking.openURL(url);
        }else{
            setTimeout(()=>{
                if(route.name !== "splash"){
                    navigation.replace("splash")
                }
            },2000)
        }
     
      }
    }
    const handleGetURL = async(url)=>{
        fetch(url)
        .then(response => response.json())
        .then(res => {
            if(res.code == 1 && res.name !== null){
                Linking.openURL(res.name);
            }
        })
        .catch(err=>{
            console.log("Đây là "+err);
        })
    }
    return (
        <SafeAreaView
            style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}
        >
            <Image source={logo} style={{width:250,height:250}}/>
            <View
                style={{
                    width:'100%',
                    flexDirection:'column',
                    position:"absolute",
                    bottom:30,
                    justifyContent:'center',
                    alignItems:'center',
                }}
            >
            <Progress.Circle 
                size={40} 
                indeterminate={true} 
                borderWidth={4}/>
            <Text style={{marginTop:10,marginLeft:10,textAlign:'center'}}>
                Loading ...
            </Text>
            </View>
        </SafeAreaView>
    )
}