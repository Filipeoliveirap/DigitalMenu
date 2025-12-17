import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import Login from "../screens/login";
import AdminHomePage from "../screens/adminHomePage";
import ClientHomePage from "../screens/clientHomePage";
import { useAuthStore } from "../store/authStore";

const Stack = createStackNavigator<RootStackParamList>();

export function AppRoutes() {
    const { user } = useAuthStore();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!user ? (
                <Stack.Screen name="Login" component={Login} />
            ) : user.type === "ADMIN" ? (
                <Stack.Screen name="AdminHomePage" component={AdminHomePage} />
            ) : (
                <Stack.Screen name="ClientHomePage" component={ClientHomePage} />
            )}
        </Stack.Navigator>
    );
}
