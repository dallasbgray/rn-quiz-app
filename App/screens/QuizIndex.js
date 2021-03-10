import React, { Component } from "react";
import { ScrollView, StatusBar, StyleSheet, Animated, TouchableOpacity } from "react-native";

import spaceQuestions from "../data/space";
import westernsQuestions from "../data/westerns";
import computerQuestions from "../data/computers";
import carQuestions from "../data/cars";
import foodQuestions from "../data/food";
import { RowItem } from "../components/RowItem";

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#444444',
  },
  button: {
    backgroundColor: '#444444',
  }
});

export default ({ navigation }) => (

  <ScrollView style={styles.background}>
    <StatusBar barStyle="light-content" />
    <RowItem
      name="Space"
      color="#84CED2"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Space",
          questions: spaceQuestions,
          color: "#84CED2"
        })
      }
    />
    <RowItem
      name="Westerns"
      color="#F4CEC7"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Westerns",
          questions: westernsQuestions,
          color: "#F4CEC7"
        })
      }
    />
    <RowItem
      name="Computers"
      color="#C2CAFF"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Computers",
          questions: computerQuestions,
          color: "#C2CAFF"
        })
      }
    />
    <RowItem
      name="Cars"
      color="#84CED2"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Cars",
          questions: carQuestions,
          color: "#84CED2"
        })
      }
    />
    <RowItem
      name="Food"
      color="#F4CEC7"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Food",
          questions: foodQuestions,
          color: "#F4CEC7"
        })
      }
    />
  </ScrollView>
);
