import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

function MyApi() {
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(true)
    const url = "https://jsonplaceholder.typicode.com/posts";

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setloading(false));
    }, []);

    return (
        

        
        <View style={styles.container}>
            {loading ? (<Text>Loading...</Text>) : (
                data.map((post) => (
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:16, fontFamily:'gilroy-bold',color:'blue'}}>{post.title}</Text>
                        <Text style={{fontSize:16, fontFamily:'gilroy-regular',color:'red',marginBottom:20}}>{post.body}</Text>
                    </View>
                ))
            )
        }
           
        </View>
      
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        justifyContent:'center'
    }
})
export default MyApi