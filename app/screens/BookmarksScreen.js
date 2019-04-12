import React, { Component } from 'react'
import { StyleSheet, ImageBackground } from 'react-native'
import { Text, Container, Button, Content, View } from 'native-base'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { Ionicons } from '@expo/vector-icons'

// ASSET IMPORT
import bg from '../assets/bg/bg.jpg'

// COMPONENTS
import BookmarksCarousel from '../components/BookmarksCarousel';

export default class BookmarksScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      bookmarks: [],
    }
  }

  static navigationOptions = {
    title: "Bookmarks"
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      // 'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
    this.setState({ fontLoaded: true })
  }

  handleAddToBookmarks = (placeDetails) => {
    const index = this.state.bookmarks.indexOf(placeDetails)
    if (index < 0) {
      this.state.bookmarks.push(placeDetails)
    } else {
      this.state.bookmarks.splice(index, 1)
    }
    this.setState( {bookmarks: [...this.state.bookmarks]} , () => console.log("handleAddToBookmarks state: ", this.state))
  }


  render() {
    return (
      <ImageBackground source={bg} style={{ width: "100%", height: "100%" }}>
        {this.state.fontLoaded ? (
          <Container style={styles.container}>
            <Grid>
              <Row size={25}>
                <Col style={styles.welcomeMsgContainer}><Text style={styles.welcomeMsg}>Good morning!</Text></Col>
                <Col
                  style={styles.addButton}
                  onPress={() => this.props.navigation.navigate("Search", { bookmarks: this.state.bookmarks, handleAddToBookmarks: this.handleAddToBookmarks })}
                >
                  <Ionicons name={"ios-add"} size={130} color="#fff" />
                </Col>
              </Row>
              <Row size={50} style={styles.welcomeMsgContainer}>

                {/* CAROUSEL NOT WORKING PROPERLY */}
                {/* TEMPERAORY DISPLAYING LENGTH OF ARRAY */}

                {/* <Container> */}
                {/* <View> */}
                {/* <BookmarksCarousel bookmarks={this.state.bookmarks}/> */}
                {/* {this.state.bookmarks.length > 0 ? <BookmarksCarousel bookmarks={this.state.bookmarks} /> : <Text style={styles.welcomeMsg}>No Bookmarks!</Text>} */}
                {/* </View> */}
                {/* </Container> */}

                {this.state.bookmarks.length > 0 ? <Text style={styles.welcomeMsg}>{this.state.bookmarks.length} Bookmarks Saved</Text> : <Text style={styles.welcomeMsg}>No Bookmarks!</Text>}

              </Row>
              <Row size={25}>
                <Text>Your Current Location:</Text>
              </Row>
            </Grid>
          </Container>
        ) : (null)}
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  test: {
    backgroundColor: '#000',
    fontSize: 20,
    color: "red"
  },
  addButton: {
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    backgroundColor: "transparent"
  },
  welcomeMsg: {
    fontSize: 20,
    color: "#fff"
  },
  welcomeMsgContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
})