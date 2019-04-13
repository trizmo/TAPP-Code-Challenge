import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, Button, List, ListItem } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { Grid, Row, Col } from 'react-native-easy-grid'
import placeAPI from '../config/placeAPI'

// API CONFIG
const placeAutocompleteAPI = "https://maps.googleapis.com/maps/api/place/autocomplete/json?sessiontoken=1234567890&key="
const apiKey = placeAPI.APIKEY


export default class SearchResults extends Component {
  constructor(props) {
    super(props),
      this.state = {
        placesResults: {}
      }
  }
  static navigationOptions = {
    title: ""
  }

  componentWillReceiveProps() {
    fetch(placeAutocompleteAPI + apiKey + "&input=" +this.props.search)
      .then(response => response.json())
      .then(resp => this.setState({ placesResults: resp }))
  }



  render() {
    const bookmarks = this.props.navigation.getParam('bookmarks')
    const handleAddToBookmarks = this.props.navigation.getParam('handleAddToBookmarks')
    return (
      <Grid>

        {this.state.placesResults.predictions ? (this.state.placesResults.predictions.map(cand => (
          <Row key={cand.id} >

               <Text onPress={() => this.props.navigation.navigate("PlaceDetails", {params: cand, bookmarks: bookmarks, handleAddToBookmarks: handleAddToBookmarks})} 
                handleAddToBookmarks={this.props.handleAddToBookmarks}
                place={cand}
               >
                {cand.description}
               </Text>

          </Row>
        ))) : (null)}
      </Grid>
    )
  }
}

const styles = StyleSheet.create({
  results: {
    padding: 8,
    color: "#020202",
    fontWeight: "700"
  },
  detailsButton: {
    justifyContent: "center",
    alignItems: "center"
  },
})
