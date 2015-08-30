var React = require('react-native');
var Store = require('../Store');
var Actions = require('../Actions');

var {
  StyleSheet,
  View,
  ListView,
  Text,
  TouchableHighlight
} = React;

var styles = StyleSheet.create({
	row: {
	    flex: 1,
	    flexDirection: 'row',
	    borderWidth:1,
    	marginLeft:10,
    	borderColor:'black',
    	borderRadius:2,
    	marginTop:5,
    	padding: 5
	},
	todoText:{
		flex:9
	},
	deleteButton:{
	    flex:3,
	    borderWidth:1,
	    borderColor:'black',
	    borderRadius:5,
	    backgroundColor:'red'
  	},	
	listView: {
   		paddingLeft: 30,
   		paddingRight: 30
  	}
});

module.exports = class extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = {
			dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
	    };

	    this.listener = this._listener.bind(this);
	    this.renderRow = this._renderRow.bind(this);
	}

	_listener(){
		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(Store.get())
	    });
	}

	_onDeletePress(rowId){
		console.log(rowId);
		Actions.delete(parseInt(rowId,10));
	}


	componentDidMount() {
	    Store.addChangeListener(this.listener);
	}

	componentWillUnmount() {
		Store.removeChangeListener(this.listener);
	}

	_renderRow(todo,sectionID,rowId) {
		return (
	      <View style={styles.row}>
	        <Text style={styles.todoText}>{todo}</Text>
	        <TouchableHighlight
	            onPress={this._onDeletePress.bind(this,rowId)}
	            style={styles.deleteButton}>
	              <Text style={{textAlign:'center'}}>Delete</Text>
          	</TouchableHighlight>     
	      </View>
	    );
	}
	
	render() {
	    return (
	        <View>
	        	<ListView
	        		style={styles.listView}
	        		automaticallyAdjustContentInsets={false}
  					dataSource={this.state.dataSource}
          			renderRow={this.renderRow}/>
	        </View>
	    );
	}
}
