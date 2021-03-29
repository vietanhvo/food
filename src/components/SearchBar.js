import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = ({ term, setTerm, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <AntDesign name="search1" style={styles.iconStyle} />
      <TextInput
        placeholder="Search"
        style={styles.input}
        value={term}
        onChangeText={setTerm}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "gray",
    flexDirection: "row",
    height: 50,
    marginHorizontal: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  iconStyle: {
    alignSelf: "center",
    marginHorizontal: 15,
    fontSize: 35,
  },
  input: {
    borderColor: "black",
    paddingHorizontal: 15,
    borderWidth: 2,
    flex: 1,
    fontSize: 18,
  },
});

export default SearchBar;
