import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Image, Dimensions} from 'react-native';
import Icons from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  avtaarIcon: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: 'skyblue',
    margin: 5,
  },
  flex1: {
    justifyContent: 'flex-start',
    display: 'flex',
    alignItems: 'flex-start',
    flex: 1,
    paddingVertical: 10,
  },
  arrowBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  flexRow: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingLeft: 10,
  },
  iconStyle: {
    position: 'absolute',
    right: 0,
    top: -20,
  },
});

export default function UserRow({user}) {
  //   const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
  });

  return (
    <View style={[styles.container]}>
      <View>
        <Image
          source={require('../assets/imgs/defaultContact.webp')}
          style={styles.avtaarIcon}
        />
      </View>
      <View style={styles.flex1}>
        <Text style={styles.flexRow}>{user.name}</Text>
        {user.phone ? <Text style={styles.flexRow}>{user.phone}</Text> : null}
      </View>
      <View style={[styles.arrowBlock]}>
        <Icons
          name="chevron-right"
          style={styles.iconStyle}
          size={25}
          color="grey"
        />
      </View>
    </View>
  );
}
