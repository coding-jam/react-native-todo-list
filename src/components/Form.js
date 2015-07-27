var React = require('react-native');

var {
  StyleSheet,
  TextInput,
  View,
  TouchableHighlight,
  Text
} = React;

var styles = StyleSheet.create({
 row: { 
    flexDirection: 'row', 
    margin: 30
  },
  input:{
    flex:9,
    borderWidth:1,
    borderColor:'black'
  },
  button:{
    flex:3,
    padding:5,
    borderWidth:1,
    marginLeft:10,
    borderColor:'black',
    borderRadius:5
  }
});

module.exports = class extends React.Component{

  constructor(props) {
      super(props);
      this.state = {};
  }

	render() {
	    return (
        <View style={styles.row}>
	    	  <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}/>
          <TouchableHighlight
            style={styles.button}>
              <Text style={{textAlign:'center'}}>Salva</Text>
          </TouchableHighlight>        
        </View>
	    );
	}
}