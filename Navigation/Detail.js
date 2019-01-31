import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import HTML from 'react-native-render-html';

export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, content, created_at } = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View>
            <Text style={{ textAlign: 'justify', fontSize: 20 }}>{title}</Text>
          </View>
          <View style={{ paddingTop: 10 }}>
            <Text>{created_at}</Text>
          </View>
          <View>
            <HTML html={content} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
