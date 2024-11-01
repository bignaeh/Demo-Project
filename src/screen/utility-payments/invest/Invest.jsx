import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import React,{useEffect,useState} from 'react'

 function Invest() {
    const [data , setData] = useState ([])
    const [loading, setloading] = useState (true)
    const url = "https://jsonplaceholder.typicode.com/users/1/todos";

    useEffect (() => {
        fetch(url)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setloading(false))
    },[]);


  return (
    <SafeAreaView style={styles.Main}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.MotherView}>
                <View>
                 { loading ? (<Text>Loading...</Text>) : (
                    data.map ((post) => (
                        <View style={styles.todoView}>
                            <Text style={styles.postText}>{post.title}</Text>
                            <Text style={styles.Postbody}>{post.id}</Text>

                        </View>
                    ))

                
                 )

                 }   
                </View>

            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    Main :{
        backgroundColor: '#ffffff',
        flex: 1,
    },

    todoView: {
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    postText:{
        fontSize: 12,
        fontFamily: 'gilroy-bold',
        color:'red',
    },

    Postbody:{
        fontSize: 16,
        marginBottom: 20,
        fontFamily: 'gilroy-regular',
        color: 'blue',
    }


})

export default Invest