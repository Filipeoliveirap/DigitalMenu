import React, { forwardRef, Fragment, LegacyRef } from "react";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Octicons from "@expo/vector-icons/Octicons";

import { styles } from "./styles";
import { theme } from "../../theme/theme";

type IconComponent =
  | React.ComponentType<React.ComponentProps<typeof MaterialIcons>>
  | React.ComponentType<React.ComponentProps<typeof FontAwesome>>
  | React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
  IconLeft?: IconComponent;
  IconRight?: IconComponent;
  IconLeftName?: string;
  IconRightName?: string;
  title?: string;
  onIconLeftPress?: () => void;
  onIconRightPress?: () => void;
};

const Input = forwardRef((props: Props, ref: LegacyRef<TextInput>) => {
  const {
    IconLeft,
    IconRight,
    IconLeftName,
    IconRightName,
    title,
    onIconLeftPress,
    onIconRightPress,
    ...rest
  } = props;

  const calculaSizeWidth = () => {
    if (IconLeft && IconRight) {
      return "80%";
    } else if (IconLeft || IconRight) {
      return "90%";
    } else {
      return "100%";
    }
  };

  const calculaSizePaddingLeft = () => {
    if (IconLeft && IconRight) {
      return 0;
    } else if (IconLeft || IconRight) {
      return 10;
    } else {
      return 20;
    }
  };

  return (
    <>
      {title && <Text style={styles.titleInput}> {title}</Text>}
      <View
        style={[styles.boxInput, { paddingLeft: calculaSizePaddingLeft() }]}
      >
        {IconLeft && IconLeftName && (
          <TouchableOpacity onPress={onIconLeftPress} style={styles.Button}>
            <IconLeft
              name={IconLeftName as any}
              size={20}
              color={theme.colors.primary}
              style={styles.Icon}
            />
          </TouchableOpacity>
        )}

        <TextInput
          style={[styles.input, { width: calculaSizeWidth() }]}
          {...rest}
        />
        {IconRight && IconRightName && (
          <TouchableOpacity onPress={onIconRightPress} style={styles.Button}>
            <IconRight
              name={IconRightName as any}
              size={20}
              color={theme.colors.primary}
              style={styles.Icon}
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
});

export default Input;
