import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, Button, List, ListItem } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { Grid, Row, Col } from 'react-native-easy-grid'

const placeSearchAPI = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key="
const placeAutocompleteAPI = "https://maps.googleapis.com/maps/api/place/autocomplete/json?sessiontoken=1234567890&key="
const key = "AIzaSyA4EPg2DZIsrS6_OwTpYo-afD1mjq_IWBI&input="
const input = "mongolian%20grill"
const placeAutocompleteInput = "1600+Amphitheatre"

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
    fetch(placeAutocompleteAPI + key + this.props.search)
      .then(response => response.json())
      .then(resp => this.setState({ placesResults: resp }))
  }



  render() {
    return (
      <Grid>

        {this.state.placesResults.predictions ? (this.state.placesResults.predictions.map(cand => (
          <Row key={cand.id} >

               <Text onPress={() => this.props.navigation.navigate("PlaceDetails", {params: cand.place_id})} >{cand.description} </Text>

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
