import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Container } from 'native-base';

export default class PlaceDetailsScreen extends Component {

  handleAddToBookmarks = () => {
    console.log("added to bookmark")
  }


  render() {
    return (
      <Container>
        <Text> {this.props.navigation.getParam("params")} </Text>
        <Button onPress={() => this.handleAddToBookmarks()}><Text>Add to Bookmarks</Text></Button>
      </Container>
    )
  }
}

const styles = StyleSheet.create({})
