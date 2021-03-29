import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";

import useResult from "../hooks/useResult";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, result, errMsg] = useResult();

  const filterResultByPrice = (price) => {
    return result.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        setTerm={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errMsg ? <Text>{errMsg}</Text> : null}

      <ScrollView>
        <ResultList
          results={filterResultByPrice("$")}
          title="Cost Effective"
        />
        <ResultList
          results={filterResultByPrice("$$")}
          title="Big Pricer"
        />
        <ResultList
          results={filterResultByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
