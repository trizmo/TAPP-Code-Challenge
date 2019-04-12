import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

// COMPONENTS
import SearchResults from '../components/SearchResults';
import SearchBar from '../components/SearchBar';

export default class SearchScreen extends Component {
  state = {
    search: ""
  }

  static navigationOptions = {
    title: "Search"
  }

  onChange = e => {
    this.setState({
      search: e
    })
  }

  render() {
    return (
      <Container>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" name="search" onChangeText={(text) => this.onChange(text)} />
        </Item>
        <SearchResults search={this.state.search} navigation={this.props.navigation} bookmarks={this.props.bookmarks}/>
      </Container>
    );
  }
}