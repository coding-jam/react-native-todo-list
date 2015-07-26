var React = require('react-native');

var {
  StyleSheet,
  TextInput,
  View
} = React;

var styles = StyleSheet.create({
  input: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1
  }
});

module.exports = class extends React.Component{

  constructor(props) {
      super(props);
      this.state = {};
  }

	render() {
	    return (
        <View>
	    	  <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}/>
        </View>
	    );
	}
}