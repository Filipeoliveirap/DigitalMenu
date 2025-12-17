import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
    justifyContent: "center",
  },

  boxTop: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.lg,
    marginTop: theme.spacing.lg,
  },

  boxMid: {
    paddingHorizontal: theme.spacing.md,
  },

  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },

  textMid: {
    fontSize: 16,
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.lg,
    color: theme.colors.textSecondary,
    textDecorationLine: "underline",
    fontWeight: "bold",
    alignSelf: "flex-end",
    paddingRight: theme.spacing.md,
  },

  textBottomLink: {
    fontSize: 16,
    color: theme.colors.primary,
    fontWeight: "bold",
  },

  textBottom: {
    fontSize: 16,
    color: theme.colors.textSecondary,
  },

  bottomTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: theme.spacing.md,
  },

  boxBottom: {
    width: "100%",
    alignItems: "center",
    marginTop: theme.spacing.lg,
  },
});
