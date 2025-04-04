import React from 'react';
import { Image, StyleSheet } from 'react-native';

interface AvatarProps {
  uri: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ uri, size = 50 }) => {
  return <Image source={{ uri }} style={[styles.avatar, { width: size, height: size }]} />;
};

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ddd',
  },
});

export default Avatar;
