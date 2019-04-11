import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

// COMPONENTS
import SearchResults from '../components/SearchResults';
import SearchBar from '../components/SearchBar';

export default class SearchScreen extends Component {
  state = {
    search: ""
  }

  onChange = e => {
    // console.log(e)
    this.setState({
      search: e
    })
  }


  render() {
    return (
      <Container>
        {/* <Header searchBar rounded> */}
        {/* <SearchBar onChange={() => this.onChange()}/> */}
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" name="search" onChangeText={(text) => this.onChange(text)} />
        </Item>
        {/* </Header> */}
        <SearchResults search={this.state.search} navigation={this.props.navigation}/>
      </Container>
    );
  }
}