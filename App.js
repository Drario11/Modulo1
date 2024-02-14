import{useState} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Slider from '@react-native-community/slider'

export default function App(){
  const [size, setSize] = useState(10)

  return(
    <View style={style.continer}>
      <Image
        source={require("./src/assets/logo.png")}
        style={style.logo}
      />
      <Text style={style.title}>{size} caracteres</Text>

      <View style={style.area}>
        <Slider
          style={{ height: 50}}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor='#ff0000'
          minimumTrackTintColor='#000'
          value={size}
          onValueChange={ (value)=> setSize(value.toFixed(0))}
        />
      </View>
      <TouchableOpacity style={style.button}>
        <Text style={style.buttonText}>Entrar Site</Text>
      </TouchableOpacity>
    </View> 

  )  
}

const style = StyleSheet.create({
  continer:{
    flex:1,
    backgroundColor:'#F3F3FF',
    justifyContent: 'center',
    alignItems:'center'    
  },
  logo:{
    marginBottom:60
  },
  area:{
    marginTop:14,
    marginBottom:14,
    width:"80%",
    backgroundColor:'#FFF',
    borderRadius: 10,
    padding: 5,
  },
  button:{
    backgroundColor: '#392de9',
    width:'80%',
    height: 50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8,
    marginBottom:18,
  },
  buttonText:{
    color:'#FFF',
    fontSize:20,
    
  },
  title:{
    fontSize:30,
    fontWeight:'bold',
  }
})