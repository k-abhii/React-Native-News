
import  { useState } from 'react';
import { View, Text,  StyleSheet } from 'react-native';
import { Slider } from '@react-native-assets/slider'

const CustomSlider = () => {
    const [value,setValue]= useState(0)
    return (  
        <View style={styles.container}>
            <Text  style={styles.text}>
                Slider Value:{value.toFixed(2)}

            </Text>
            <Slider 
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            value={value}
            onValueChange={(value)=> setValue(value)}>

            </Slider>
        </View>
    );
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
      },
      slider: {
        width: 300,
      },
  });


export default CustomSlider;