import React, {useState, useEffect} from 'react'
import { Text, View, StyleSheet, FlatList, Image } from 'react-native'

import yelp from '../api/yelp'

const ResultShowScreen = ({ route }) => {
  const id = route.params.id
  const [result, setResult] = useState(null)

  const getResult = async (id) => {
    const res = await yelp.get(`${id}`)
    setResult(res.data)
  }

  useEffect(() => {
    getResult(id);
  }, [])

  if (result === null) {
    return null;
  }
  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList 
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.img} source={{uri: item}}/>;
        }}
      />
    </View>
  )

}

const styles = StyleSheet.create({
  img: {
    width: 250,
    height: 120,
  }
})

export default ResultShowScreen;
