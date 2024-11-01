import { StyleSheet, Text, View, SafeAreaView, ScrollView,Image } from 'react-native'
import React, { useEffect, useState } from 'react'

function Transport() {

    const [data, setData] = useState([])
    const [loading, setloading] = useState(true)
    const url = "https://jsonplaceholder.typicode.com/albums/1/photos";

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setloading(false))
    }, []);

    return (
        <SafeAreaView style={styles.Main}>
            <ScrollView>
                {loading ? (<Text>loading...</Text>) : (
                    data.map((post) => (
                        <View key={post.id} style={styles.photosView}>
                            <Text style={styles.postText}>{post.title}</Text>
                            <Text style={styles.postbody}>{post.body}</Text>
                            <Image source={{ uri: post.url }} style={styles.ImageView} />
                            <Image source={{ uri: post.thumbnailUrl }} style={styles.ImageView} />
                        </View>
                    ))
                )

                }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Main : {
        flex: 1,
        backgroundColor: '#08003F',
    },

    photosView : {
        backgroundColor: '#ffffff',
        justifyContent:'center',
        alignSelf: 'center',
    },

    postText : {
        fontSize: 16,
        fontFamily: 'gilroy-bold',
        color: '#000000',
        textAlign:'center'
    },

    ImageView1: {
        width: 500, // Set your desired width
        height: 200, // Set your desired height
        marginTop: 10,

    },

    ImageView: {
        width: 500, // Set your desired width
        height: 200, // Set your desired height
        marginTop: 10,

    }
    

})

export default Transport