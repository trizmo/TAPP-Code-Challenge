import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions } from 'react-native'
import staticMapAPI from '../config/staticMapAPI'

const apiKey = staticMapAPI.APIKEY
const staticMapsAPI_Route = "https://maps.googleapis.com/maps/api/staticmap?"
const staticMapsAPI_Center = "&center="
const staticMapsAPI_Coords = "&markers=color:red%7C"
const sampleCOORDS = "33.982188,-118.05064"
const staticMapsAPI_Details = "&zoom=13&size=600x300&maptype=roadmap&key="

const deviceWidth = Dimensions.get('window').width;


export default class StaticMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staticMap: '',
      placePostal_Code: '',
      cordinates: '',
    }
  }

  componentWillMount() {
    this.setState({ cordinates: this.props.placeDetails.result.geometry.location })
    this.props.placeDetails.result.address_components.map(comp =>
      comp.types[0] === "postal_code" ? this.setState({ placePostal_Code: comp.long_name },
        () => console.log(staticMapsAPI_Route + staticMapsAPI_Details + apiKey + staticMapsAPI_Center + this.state.placePostal_Code + staticMapsAPI_Coords + sampleCOORDS)) : (null)
    )
  }

  render() {
    return (
      <View>
        {this.placePostal_Code !== '' ? (
          <Image
            style={{ width: deviceWidth, height: "100%" }}

            source={{ uri: staticMapsAPI_Route + staticMapsAPI_Details + apiKey + staticMapsAPI_Center + this.state.cordinates.lat + "," + this.state.cordinates.lng + staticMapsAPI_Coords + this.state.cordinates.lat + "," + this.state.cordinates.lng }}
          ></Image>
        ) : (<Text>Loading...</Text>)}

      </View>
    )
  }
}

const styles = StyleSheet.create({})
