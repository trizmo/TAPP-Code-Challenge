import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';


export default class SearchBar extends Component {
  render(props) {
    return (
      <Item>
      <Icon name="ios-search" />
      <Input placeholder="Search" name="search" onChangeText={(text) => props.onChange(text)} />
    </Item>
    )
  }
}

const styles = StyleSheet.create({})
