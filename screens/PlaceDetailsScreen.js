import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { Text, Button, Container, Grid, Row, Col } from 'native-base';

const placeSearchAPI = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key="
const placeAutocompleteAPI = "https://maps.googleapis.com/maps/api/place/autocomplete/json?sessiontoken=1234567890&key="
const placeDetailsAPI = "https://maps.googleapis.com/maps/api/place/details/json?fields=name,rating,formatted_phone_number,formatted_address,photo&key=AIzaSyA4EPg2DZIsrS6_OwTpYo-afD1mjq_IWBI"
const key = "AIzaSyA4EPg2DZIsrS6_OwTpYo-afD1mjq_IWBI&input="
const input = "mongolian%20grill"
const placeAutocompleteInput = "1600+Amphitheatre"
const placeID = "ChIJh7FIUrTHwoARp_VawUlSQAY&"
const placePhotoRef = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=YOUR_API_KEY"


export default class PlaceDetailsScreen extends Component {
  constructor(props) {
    super(props),
      this.state = {
        placeDetails: {}
      }
    params = this.props.navigation.getParam('params')
    bookmarks = this.props.navigation.getParam('bookmarks')
  }


  componentDidMount() {
    console.log(params.place_id)
    // fetch(placeDetailsAPI + key + "&placeid=" + params.place_id)
    fetch("https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJh7FIUrTHwoARp_VawUlSQAY&fields=name,rating,formatted_phone_number,formatted_address,photo&key=AIzaSyA4EPg2DZIsrS6_OwTpYo-afD1mjq_IWBI")
      .then(response => response.json())
      .then(resp => {
        // console.log(resp)
        this.setState({ placeDetails: resp }, () => {
          console.log(this.state.placeDetails.length)
          console.log(this.state)
        })
      })
  }



  render() {
    const handleAddToBookmarks = this.props.navigation.getParam('handleAddToBookmarks')


    return (
      <Container>
        {Object.keys(this.state.placeDetails).length > 0 ?
         ( <Grid>
            <Row style={styles.infoHi}>
              <Col>
                <Text>{this.state.placeDetails.result.name}</Text>
              </Col>
              <Col>
                <Text>{this.state.placeDetails.result.rating}</Text>
              </Col>
            </Row>
            <Row style={styles.infoLow}>
             
                <Button onPress={() => handleAddToBookmarks(params)}><Text>Add to Bookmarks</Text></Button>

                <Text>{this.state.placeDetails.result.formatted_address}</Text>

            </Row>
          </Grid> 
         ):
         (
         
         <ActivityIndicator size="large" color="#020202" style={styles.loading}/>
         )
        }

        {/* <Text> {params.structured_formatting.main_text} </Text> */}
        {/* <Text> {params.place_id} </Text> */}
        {/* <Text> {this.props.navigation.getParam("bookmarks")} </Text> */}
        {/* {bookmarks.includes(params) ? (<Text>Added!</Text>) : (<Text>Add to Bookmarks</Text>)} */}
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  loading:{
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
  }
})
