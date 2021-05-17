import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import _ from 'lodash';
import UserRow from './component/UserRow';
import {
  fetchUsers,
  activeUser,
  deleteUser,
} from '../actions/user/fetchUserAction';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

const statusBarStyle = 'default';
const statusBarTransition = 'fade';

function MainScreen(props) {
  const {navigation} = props;
  const [userJson, setuserJson] = useState(0);
  const [hidden] = useState(false);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    props.fetchUsers().then(resp => {
      if (resp.status === 200) {
        return resp;
      }
    });
  }, []);
  useEffect(() => {
    setuserJson(props.updatedUserDir.user);
  }, [props.updatedUserDir]);

  useEffect(() => {
    props.deleteUser(props.fetchUser.user);
  }, [props.fetchUser.user]);

  const handleUserClick = user => {
    props.activeUser(user);
    navigation.navigate('detailScreen', {user: user});
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />
      <ScrollView>
        <View style={styles.container}>
          {_.map(userJson, (user, i) => (
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#DDDDDD"
              onPress={() => handleUserClick(user)}
              key={`user-${user.name}-${user.id}`}>
              <UserRow user={user} />
            </TouchableHighlight>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function mapStateToProps(state) {
  return {
    fetchUser: state.fetchUser,
    updatedUserDir: state.deleteUser,
  };
}

const actionCreators = {
  fetchUsers: fetchUsers,
  activeUser: activeUser,
  deleteUser: deleteUser,
};
const MainScreenContainer = connect(
  mapStateToProps,
  actionCreators,
)(MainScreen);

export default MainScreenContainer;
