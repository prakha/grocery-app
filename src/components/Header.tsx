import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Touchable,
  Image,
} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {height, width} = Dimensions.get('window');

const Header = ({
  title,
  leftIcon,
  rightIcon,
  onClickLeftIcon,
  onClickRightIcon,
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          onClickLeftIcon();
        }}>
        <Image source={leftIcon} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.btn}>
        <Image
          source={rightIcon}
          style={[styles.icon, {width: 40, height: 40}]}
        />
      </TouchableOpacity>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  header: {
    width: width,
    height: 60,
    backgroundColor: '#00448D',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btn: {
    width: 40,
  },
  icon: {
    width: 30,
    height: 30,
    color: '#000000',
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
});
