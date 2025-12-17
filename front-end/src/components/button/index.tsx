import React from "react";
import {TouchableOpacityProps, TouchableOpacity,  ActivityIndicator, Text } from "react-native";
import { styles } from "../button/style";

type Props = TouchableOpacityProps & {
  text: string;
  loading?: boolean;
};
export function Button({ text, loading, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.buttonText}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}