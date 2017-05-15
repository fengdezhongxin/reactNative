'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  Text,
  TextInput,
  View,
  StyleSheet,
} = ReactNative;
var DongKai = React.createClass({
  getInitialState: function() {
    return {
      curText: '<No Event>',
      prevText: '<No Event>',
      prev2Text: '<No Event>',
    };
  },

  updateText: function(text) {
    this.setState((state) => {
      return {
        curText: text,
        prevText: state.curText,
        prev2Text: state.prevText,
      };
    });
  },

  render: function() {
    return (
      <View style={styles.body}>
        <View style={styles.main}>
          <View style={styles.nav}>

          </View>
        </View>
      </View>
    );
  }
});
const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  main: {
    flex: 1,
    padding: 15
  },
  nav: {
    flex: 1,
    backgroundColor: "red"
  }
});
AppRegistry.registerComponent('DongKai', () => DongKai);