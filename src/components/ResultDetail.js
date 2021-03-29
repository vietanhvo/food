import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

const ResultDetail = ({ results }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: results.image_url }} />
      <Text style={styles.text}>{results.name}</Text>
      <Text>{results.rating} Starts, {results.review_count} Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  img: {
    width: 250,
    height: 120,
    borderRadius:4,
    marginBottom: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  }
})

export default ResultDetail
