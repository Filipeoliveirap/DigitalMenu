import React from "react";
import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
  boxInput: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: theme.radius.lg,
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.md,
    paddingHorizontal: theme.spacing.md,
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.border,
  },

  input: {
    flex: 1,
    height: 40,
    marginLeft: theme.spacing.sm,
    color: theme.colors.textPrimary,
    fontSize: 16,
  },

  titleInput: {
    marginLeft: theme.spacing.md,
    color: theme.colors.textPrimary,
  },

  Icon: {
    marginRight: theme.spacing.sm,
  },

  Button: {
    width: "10%"
  },

  
});
