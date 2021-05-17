import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  Text,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-paper';
import Icons from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import _, {map} from 'lodash';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
  },
  avtaarIcon: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: 'skyblue',
    alignSelf: 'center',
    margin: 5,
  },
  dipslayCenter: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  detailsBox: {
    alignItems: 'center',
  },
  userName: {
    fontSize: 30,
    marginBottom: 10,
  },
  leftContent: {
    fontSize: 18,
    lineHeight: 20,
    paddingTop: 20,
  },
  LeftIcon: {
    paddingTop: 10,
    paddingRight: 10,
  },
  rightSide: {
    paddingTop: 15,
  },
});
const statusBarStyle = 'default';
const statusBarTransition = 'fade';

function DetailScreen(props) {
  const [activeUser, setactiveUser] = useState([]);
  useEffect(() => {
    setactiveUser(props.setActiveUser.user);
  }, [props.setActiveUser.user]);
  console.log(props.setActiveUser);
  const {
    name = '',
    phone = '',
    email = '',
    website = '',
    address = {},
  } = activeUser;
  const {suite = '', street = '', city = '', zipcode = ''} = address;
  const BoxArray = [
    {
      rightContent: phone,
      leftContent: (
        <Icons name="phone" style={styles.iconStyle} size={30} color="grey" />
      ),
    },
    {
      rightContent: email,
      leftContent: (
        <Fontisto
          name="email"
          style={styles.iconStyle}
          size={30}
          color="grey"
        />
      ),
    },
    {
      rightContent: `${suite}, ${street}, ${city}, ${zipcode}`,
      leftContent: (
        <Fontisto name="home" style={styles.iconStyle} size={30} color="grey" />
      ),
    },
    {
      rightContent: website,
      redirect: true,
      leftContent: (
        <Fontisto
          name="earth"
          style={styles.iconStyle}
          size={30}
          color="grey"
        />
      ),
    },
  ];
  const handleWebsiteClick = redirect => {
    const url = _.includes(redirect, 'http') ? redirect : `http:${redirect}`;
    Linking.canOpenURL(url).then(supported => {
      console.log(supported);
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };
  const getBoxComp = (nameIcon, rightContent, redirect, i) => (
    <View style={styles.dipslayCenter} key={`box-${i}`}>
      <View style={[styles.LeftIcon]}>{nameIcon}</View>
      <View style={[styles.rightSide]}>
        {redirect ? (
          <TouchableOpacity onPress={() => handleWebsiteClick(rightContent)}>
            <Text>{rightContent}</Text>
          </TouchableOpacity>
        ) : (
          <Text>{rightContent}</Text>
        )}
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={false}
      />
      <ScrollView>
        <View styles={styles.container}>
          <Image
            source={require('./assets/imgs/defaultContact.webp')}
            style={styles.avtaarIcon}
          />
        </View>
        <View style={[styles.dipslayCenter]}>
          <Text style={styles.userName}>{name}</Text>
        </View>
        <Card>
          {_.map(BoxArray, (each, i) =>
            getBoxComp(each.leftContent, each.rightContent, each.redirect, i),
          )}
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

function mapState(state) {
  return state;
}

const DetailScreenContainer = connect(mapState)(DetailScreen);
export default DetailScreenContainer;
