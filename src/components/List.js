var React = require('react-native');
var Store = require('../Store');

var {
  StyleSheet,
  View,
  ListView,
  Text
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
	listView: {
   		paddingLeft: 30,
   		paddingRight: 30
  	}
});

module.exports = class extends React.Component{

	constructor(props) {
	    super(props);
	    this.state = {
			dataSource: new ListView.DataSource({
	        	rowHasChanged: (row1, row2) => true,
	      	})
	    };

	    this.listener = this._listener.bind(this);
	    this.renderRow = this._renderRow.bind(this);
	}

	_listener(){
		console.log(Store.get());
		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(Store.get())
	    });
	}

	_renderRow(todo,sectionID,rowId) {
		return (
	      <View style={styles.row}>
	        <Text>{rowId} - {todo}</Text>
	      </View>
	    );
	  }

	componentDidMount() {
	    Store.addChangeListener(this.listener);
	}

	componentWillUnmount() {
		Store.removeChangeListener(this.listener);
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
