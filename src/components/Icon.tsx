import React, { ComponentProps } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export type IconControlProps = {
  icon: string;
  size?: number | undefined;
  color?: string | undefined;
  style?: ComponentProps<typeof Icon>["style"];
};

const IconControl: React.FC<IconControlProps> = ({
  icon, size, color, style,
}: IconControlProps) => {
    return (
      <Icon color={color}
        name={icon} size={size} style={style} />
    )
}

export default React.memo(IconControl);