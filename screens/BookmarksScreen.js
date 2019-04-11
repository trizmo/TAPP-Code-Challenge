import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { Text, Container, Button, Content } from 'native-base'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { Ionicons } from '@expo/vector-icons'
import bg from '../assets/bg/bg.jpg'


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

  render() {
    return (
      <ImageBackground source={bg} style={{ width: "100%", height: "100%" }}>
        {this.state.fontLoaded ? (
          <Container style={styles.container}>
            <Grid>
              <Row>
                <Col><Text>Good morning!</Text></Col>
                <Col style={styles.addButton} onPress={() => this.props.navigation.navigate("Search")} ><Ionicons name={"ios-add"} size={130} color="#01a699" /></Col>
              </Row>
              <Row>
                {this.state.bookmarks.length > 0 ? this.state.bookmarks.map(bookmark => <Text key={bookmark}>{bookmark}</Text>) : <Text>No Bookmarks!</Text>}
              </Row>
              <Row>
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
    // display: "flex",
    justifyContent: "center",
    alignItems: "center"

  },
  container: {
    backgroundColor: "transparent"
  }
})