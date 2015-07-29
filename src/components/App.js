var React = require('react-native');
var Form = require('./Form');
var List = require('./List');

var {
  StyleSheet,
  Text,
  View
} = React;

var styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

module.exports = class extends React.Component{
	render() {
	    return (
	    	<View>
	    		<Text style={styles.title}>
      			React Native Todo-List
      		</Text>
      		<Form/>
          <List/>
    		</View>
	    );
	}
}