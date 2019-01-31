import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      rowData: ds.cloneWithRows([]),
    };
  }

  componentWillMount() {
    let postData = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    };
    fetch('http://apisiforsa.uwpdoit.com/api/index_get', postData)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          rowData: ds.cloneWithRows(responseJson),
          refresh: false,
          isLoading: false,
        });
      })
      .catch(error => {
        Alert.alert('error cek lagi');
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <ListView
          dataSource={this.state.rowData}
          enableEmptySections={true}
          onEndReachedThreshold={500}
          renderRow={rowData => (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Detail', rowData)}>
              <View style={{ padding: 10 }}>
                <Text>{rowData.title}</Text>
              </View>
              <View style={styles.dividerHorizontal} />
              <View style={{ marginBottom: 10 }} />
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dividerHorizontal: {
    backgroundColor: '#ebebeb',
    height: 1,
    width: width * 0.94,
    alignSelf: 'center',
  },
});
