import {
Dimensions,
ImageBackground,
SafeAreaView,
Stylesheet,
Text,View
}
from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TouchableOpacity } from "react-native";
const{height}=Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList,"Welcome">;

const WelcomeScreen:React.FC<Props> = ({navigation:{navigation}}) => {
   return(
    <SafeAreaView>
      <View>
    <ImageBackground style={{
      height:height / 2.5,
      }} 
      resizeMode="contain" 
    source={require("../assets/logo.png")} / >
      <View style={{
        paddingHorizontal:  Spacing = 4 ,
        paddingTop: Spacing = 4,
      }}
      >
        <Text style={{
          fontSize:fontSize.xxLarge,
          color:Colors.primary,
          fontFamily:Font["poppins-bold"],
          textAlign:"center",
        }}
        >Discover More</Text>
        <Text style={{
          fontSize: fontSize.small,
          color: Colors.text,
          fontFamily:Font["poppins-regular"],
          textAlign:"center",
          marginTop:Spacing*2,
        }}
        >Explore more</Text>
      </View>
      <View style={{
        paddingHorizontal:Spacing*2,
        paddingTop:Spacing*6,
        flexDirection:"row"
      }}
      >
        <TouchableOpacity
        onPress={()=> navigate("Login")}
         style={{
          
          backgroundColor:Colors.primary,
          paddingVertical:Spacing*1.5,
          paddingHorizontal:Spacing*2,
          width:"48%",
          borderRadius:Spacing,
        }}
        >
          <Text style={{
            fontFamily:Font["poppins-bold"],
            color:Colors.onPrimary,
            fontSize:fontSize.large,
            textAlign:"center"
          }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=> navigate("Register")}
        style={{
          backgroundColor:Colors.primary,
          paddingVertical:Spacing*1.5,
          paddingHorizontal:Spacing*2,
          width:"48%",
          borderRadius:Spacing,
        }}>
        <Text style={{
            fontFamily:Font["poppins-bold"],
            color:Colors.onPrimary,
            fontSize:fontSize.large,
            textAlign:"center" 
            }}>Rester</Text>
              </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
    
   );
};

export default WelcomeScreen;
const style = StyleSheet.create({});



