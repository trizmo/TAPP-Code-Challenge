import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, ScrollView, Grid, Row, Content } from 'native-base';

// export default class BookmarksCarousel extends Component {
//   render(props) {
//     return (
//       <Container>
//         <ScrollView
//           horizontal={true}
//           pagingEnabled={true}
//           showsHorizontalScrollIndicator={true}
//           indicatorStyle='white'
//         >
//           {this.props.bookmarks.map(bookmark => (
//             <View key={bookmark}>
//               <View style={{ backgroundColor: "#e5b83b" }}>
//                   <Text style={{ textAlign: "center", color: "#ffffff", padding: 10 }}>{bookmark}</Text>
//               </View>

//             </View>
//           ))}
//         </ScrollView>
//       </Container>
//     )
//   }
// }

export default class BookmarksCarousel extends Component {
  render(props) {
    return (

      <View>
        <DeckSwiper
          dataSource={this.props.bookmarks}
          renderItem={bookmark =>
            <Card style={{ elevation: 3, backgroundColor: "red" }}>
              <CardItem>
                <Left>
                  {/* <Thumbnail source={item.image} /> */}
                  <Body>
                    <Text>{bookmark.name}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Text note>card body</Text>
                {/* <Text style={{ height: 300, flex: 1 }} source={bookmark} /> */}
              </CardItem>
              <CardItem>
                <Icon name="star" style={{ color: '#020202' }} />
                <Text>bottom card text</Text>
              </CardItem>
            </Card>
          }
        />
      </View>

    )
  }
}

const styles = StyleSheet.create({})
