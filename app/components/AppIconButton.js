import React from 'react';
import { Button, Icon } from '@ui-kitten/components';
import colors from '../config/colors';

function IconButton({
  buttonBackgroundColor = colors.primary,
  buttonBorderColor = colors.primary,
  buttonAppearance = 'filled',
  buttonWidth = 16,
  buttonHeight = 16,
  iconWidth = 8,
  iconHeight = 8,
  isIconRequired,
  iconName = 'hash-outline',
  iconFill = 'white',
  status = 'basic',
  borderRadius = 0,
  name,
  size = 'medium',
  onPress,
}) {
  const ButtonIcon = props => (
    <Icon
      {...props}
      style={{ width: iconWidth, height: iconHeight }}
      fill={iconFill}
      name={iconName}
    />
  );

  const style1 = {
    width: buttonWidth,
    height: buttonHeight,
    borderRadius: borderRadius,
    backgroundColor: buttonBackgroundColor,
    borderColor: buttonBorderColor,
  };
  const style2 = {
    width: buttonWidth,
    height: buttonHeight,
    borderRadius: borderRadius,
  };

  return (
    <Button
      style={buttonAppearance === 'ghost' ? style2 : style1}
      appearance={buttonAppearance}
      status={status}
      size={size}
      onPress={onPress}
      accessoryLeft={isIconRequired ? ButtonIcon : null}>
      {name}
    </Button>
  );
}

export default IconButton;
