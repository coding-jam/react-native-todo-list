var React = require('react-native');
var Actions = require('../Actions');

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
      this.state = {
        todoText:""
      };

      this.onSavePress = this._onSavePress.bind(this);
      this.onChangeInput = this._onChangeInput.bind(this);
  }

  _onSavePress(){
    Actions.add(this.state.todoText);
  }

  _onChangeInput(event){
    this.setState({
      todoText:event.nativeEvent.text
    });
  }

	render() {
	    return (
        <View style={styles.row}>
	    	  <TextInput
            placeholder="Add a ToDo..."
            onChange={this.onChangeInput}
            style={styles.input}
            value={this.state.todoText}/>
          <TouchableHighlight
            onPress={this.onSavePress}
            style={styles.button}>
              <Text style={{textAlign:'center'}}>Salva</Text>
          </TouchableHighlight>        
        </View>
	    );
	}
}