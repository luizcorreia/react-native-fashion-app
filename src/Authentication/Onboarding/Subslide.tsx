import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import { Button } from "../../components";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 44,
  },
  subtitle: {
    fontFamily: "SFProText-Semibold",
    fontSize: 20,
    lineHeight: 30,
    marginBottom: 12,
    color: "#0C0D34",
  },
  description: {
    fontFamily: "SFProText-Regular",
    fontSize: 14,
    lineHeight: 24,
    color: "#0C0D34",
    textAlign: "center",
    marginBottom: 40,
  },
});

interface SubslideProps {
  description: string;
  subtitle: string;
  last?: boolean;
  onPress: () => void;
}

const Subslide = ({ subtitle, description, last, onPress }: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        label={last ? "Let's get Started" : "Next"}
        variant={last ? "primary" : "default"}
        {...{ onPress }}
      />
    </View>
  );
};

export default Subslide;
