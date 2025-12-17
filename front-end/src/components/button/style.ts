import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  boxBottom: {
    width: "100%",
    alignItems: "center",
    marginTop: theme.spacing.lg,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.colors.background,
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
});
