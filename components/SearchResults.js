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

  // displayResults = (props) => {
  //   // console.log("UPDATE!")
  //   return (
  //     this.state.placesResults.predictions ? (this.state.placesResults.predictions.map(cand => (
  //       <Row key={cand.id}>
  //         {/* <Col size={90}> */}
  //         <Text
  //           onPress={() => this.props.navigation.navigate("Search")}
  //           style={styles.results}>
  //           {cand.description}
  //         </Text>
  //         {/* <Button title="place-details" onPress={() => this.props.navigation.navigate("PlaceDetails")}><Text>PlaceDetails</Text></Button> */}
  //         {/* </Col> */}
  //         {/* <Col size={10}>
  //           <Ionicons name={"ios-add"} onPress={() => this.props.navigation.navigate("Bookmarks")} size={33} color="#020202" />
  //         </Col> */}
  //       </Row>
  //     ))) : (null)
  //   )
  // }

  // render(props) {


  //   return (
  //     <Grid>
  //       {/* <Text> Search Results </Text>
  //       <Text> Search {this.props.search} </Text> */}
  //       {/* <Button title="fetch-data" onPress={this.getData.bind(this)}><Text>fetch data</Text></Button> */}
  //       {/* {this.getData()} */}
  //       {this.displayResults()}
  //     </Grid>
  //   )
  // }

  handleTouchablePress = () => {
    this.props.navigation.navigate("PlaceDetails")
  }

  render(props) {


    return (
      <Grid>

        {this.state.placesResults.predictions ? (this.state.placesResults.predictions.map(cand => (
          <Row key={cand.id} onPress={() => this.props.navigation.navigate("PlaceDetails")}>
            {/* <Col size={90}> */}
            <List>

              <ListItem
                // onPress={() => this.handleTouchablePress()}
                style={styles.results}
              >
               <Text>{cand.description}</Text>
              </ListItem>
            </List>
            {/* <Button title="place-details" onPress={() => this.props.navigation.navigate("PlaceDetails")}><Text>PlaceDetails</Text></Button> */}
            {/* </Col> */}
            {/* <Col size={10}>
            <Ionicons name={"ios-add"} onPress={() => this.props.navigation.navigate("Bookmarks")} size={33} color="#020202" />
          </Col> */}
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
