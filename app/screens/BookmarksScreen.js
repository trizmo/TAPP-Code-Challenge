import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, ImageBackground, View } from 'react-native'
import { Text, Container, Button, Content } from 'native-base'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { Ionicons } from '@expo/vector-icons'
import bg from '../assets/bg/bg.jpg'
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
    title: ""
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
    const bookmarks = this.state.bookmarks
    for (let i = 0; i < bookmarks.length; i++) {
      if (bookmarks[i].place_id !== placeDetails.place_id) {
        bookmarks.push(placeDetails)
      } else {
        bookmarks.splice(i, 1)
      }
    }
    // console.log("index of " + params + " is: " + index)

    this.setState({ bookmarks }, () => console.log(this.state))
  }


  render() {
    // console.log(this.state)
    return (
      <ImageBackground source={bg} style={{ width: "100%", height: "100%" }}>
        {this.state.fontLoaded ? (
          <Container style={styles.container}>
            <Grid>
              <Row size={50}>
                <Col style={styles.welcomeMsgContainer}><Text style={styles.welcomeMsg}>Good morning!</Text></Col>
                <Col
                  style={styles.addButton}
                  onPress={() => this.props.navigation.navigate("Search", { bookmarks: this.state.bookmarks, handleAddToBookmarks: this.handleAddToBookmarks })}
                // bookmarks={this.state.bookmarks} 
                // handleAddToBookmarks={this.handleAddToBookmarks}
                >
                  <Ionicons name={"ios-add"} size={130} color="#fff" />
                </Col>
              </Row>
              <Row size={50} style={styles.welcomeMsgContainer}>
                <Container>
                  <View>

                    {/* <BookmarksCarousel bookmarks={this.state.bookmarks}/> */}
                    {this.state.bookmarks.length > 0 ? <BookmarksCarousel bookmarks={this.state.bookmarks} /> : <Text style={styles.welcomeMsg}>No Bookmarks!</Text>}
                  </View>
                </Container>
              </Row>
              {/* <Row size={25}>
                <Text>Your Current Location:</Text>
              </Row> */}
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
    // display: "flex",
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
    // justifyContent: "center",
    // alignItems: "center"
  },
})