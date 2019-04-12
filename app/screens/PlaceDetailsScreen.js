import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, ImageBackground } from 'react-native';
import { Text, Button, Container, Grid, Row, Col } from 'native-base';
import bg from '../assets/bg/bg.jpg'


const placeSearchAPI = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key="
const placeAutocompleteAPI = "https://maps.googleapis.com/maps/api/place/autocomplete/json?sessiontoken=1234567890&key="
const placeDetailsAPI = "https://maps.googleapis.com/maps/api/place/details/json?fields=name,rating,formatted_phone_number,formatted_address,photo,place_id&key="
const key = "AIzaSyA4EPg2DZIsrS6_OwTpYo-afD1mjq_IWBI"
const input = "mongolian%20grill"
const placeAutocompleteInput = "1600+Amphitheatre"
const placeID = "ChIJh7FIUrTHwoARp_VawUlSQAY&"
const placePhotoRef = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" // don't forget to add &key= after reference, followed by API KEY last



export default class PlaceDetailsScreen extends Component {
  constructor(props) {
    super(props),
      this.state = {
        placeDetails: {}
      }
    // this.handleAddToBookmarks = this.props.navigation.getParam('handleAddToBookmarks').bind(this)
    params = this.props.navigation.getParam('params')
  }

  static navigationOptions = {
    title: "Details"
  }


  componentDidMount() {
    fetch(placeDetailsAPI + key + "&placeid=" + params.place_id)
      .then(response => response.json())
      .then(resp => {
        this.setState({ placeDetails: resp }, () => {
        })
      })
  }


  render() {
    const handleAddToBookmarks = this.props.navigation.getParam('handleAddToBookmarks')
    bookmarks = this.props.navigation.getParam('bookmarks')


    return (
      // photoref to be used for background image
      <ImageBackground source={bg} style={{ width: "100%", height: "100%" }}>
        <Container style={styles.container}>
          {Object.keys(this.state.placeDetails).length > 0 ?
            (<Grid>
              <Row style={styles.infoHi}>
                <Col size={80} style={styles.nameTextContainer}>
                  <Text style={styles.nameText}>{this.state.placeDetails.result.name}</Text>
                </Col>
                <Col style={styles.ratingContainer} size={20}>
                  <Text style={styles.rating}>{this.state.placeDetails.result.rating}</Text>
                </Col>
              </Row>
              <Row style={styles.infoLow}>
              {/* CONDITIONAL RENDERING ONLY AFTER REFRESH */}
                {bookmarks.includes(this.state.placeDetails.result.place_id) > 0 ? (<Text>ADDED</Text>) : (<Text>NOT ADDED</Text>)}
                <Button onPress={() => {
                  handleAddToBookmarks(this.state.placeDetails.result.place_id)
                }} style={styles.addButton}><Text>Add to Bookmarks</Text></Button>

                <Text style={styles.address}>{this.state.placeDetails.result.formatted_address}</Text>
                {/* static map image to be used here */}
              </Row>
            </Grid>
            ) :
            (

              <ActivityIndicator size="large" color="#020202" style={styles.loading} />
            )
          }
        </Container>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent"
  },
  loading: {
    justifyContent: "center",
    alignItems: "center"
  },
  infoHi: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  infoLow: {
    flexDirection: "column",
    alignItems: "center",
    flexGrow: 1,
    backgroundColor: "lightgrey",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 5,
  },
  nameText: {
    fontSize: 25,
    padding: 12,
    fontWeight: "600",
    color: "#fff"
  },
  address: {
    fontSize: 18,
    padding: 5,
    color: "#020202"
  },
  rating: {
    fontSize: 16,
    fontWeight: "700",
    padding: 5,
    color: "#0B3142",
  },
  ratingContainer: {
    borderRadius: 50,
    backgroundColor: "lightgrey",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  addButton: {
    alignSelf: "center",
    backgroundColor: "#0B3142",
    borderRadius: 50
  }
})

// green for selected: #09814A
