import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { styles } from "./styles";
import ProfileLogo from "../../assets/profileLogo.jpeg";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { useAuth } from "../../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/navigation";
import Input from "../../components/input";
import { Button } from "../../components/button";

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;
export default function Login() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { handleLogin, loading, error } = useAuth();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleLoginPress = async () => {
    if (!email || !password) {
      Alert.alert("Preencha todos os campos");
      return;
    }
    try {
      const user = await handleLogin(email, password);
      if (user?.type === "ADMIN") {
        navigation.navigate("AdminHomePage");
      } else if (user?.type === "CLIENTE") {
        navigation.navigate("ClientHomePage");
      }
    } catch (err: any) {
      Alert.alert("Erro", err.message || "Erro ao fazer login");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
        <Image style={styles.logo} source={ProfileLogo} />
        <Text style={styles.title}>Bem vindo de volta!</Text>
      </View>
      <View style={styles.boxMid}>
        <Input
          value={email}
          onChangeText={setEmail}
          title="ENDEREÇO DE E-MAIL"
          IconRight={MaterialIcons}
          IconRightName="email"
        />
        <Input
          value={password}
          onChangeText={setPassword}
          title="SENHA"
          IconRight={Octicons}
          IconRightName={showPassword ? "eye-closed" : "eye"}
          secureTextEntry={!showPassword}
          onIconRightPress={() => setShowPassword(!showPassword)}
        />

        <Text style={styles.textMid}>Esqueceu sua senha ?</Text>
      </View>
      <View style={styles.boxBottom}>
        <Button text="ENTRAR" loading={loading} onPress={handleLoginPress} />
      </View>
      <View style={styles.bottomTextContainer}>
        <Text style={styles.textBottom}>Não tem conta? </Text>
        <TouchableOpacity
          onPress={() => console.log("Navegar para criar conta")}
        >
          <Text style={styles.textBottomLink}>Criar agora!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
