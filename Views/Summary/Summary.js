import React, {Component} from 'react';
import {StyleSheet, ScrollView, Dimensions, Platform, Text, View} from 'react-native';

const DeviceWidth = Dimensions.get('window').width;
type Props = {};

export default class Summary extends Component<Props> {

  static navigationOptions = {
    title: 'Order confirmed',
  };

  constructor(props){
    super(props)

    this.state = {
    }
  }

  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name', 'Name');
    const surname = navigation.getParam('surname', 'surname');
    const birthDate = navigation.getParam('birthDate', new Date());
    const startDay = navigation.getParam('startDay', new Date());
    const endDay = navigation.getParam('endDay', new Date());
    const beds = navigation.getParam('beds', 1);
    const room = navigation.getParam('room', 'Standard');
    const breakfast = navigation.getParam('breakfast', true);
    const height = navigation.getParam('height',180);
    const telNumber = navigation.getParam('telNumber',555555555);

    return (
      <ScrollView  style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.leftName}>Name:</Text>
          <Text>{name}</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.leftName}>Surname:</Text>
          <Text>{surname}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.leftName}>Birthday:</Text>
          <Text>{birthDate.toDateString()}</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.leftName}>Height:</Text>
          <Text>{height} cm</Text>
        </View>
        
        <View style={styles.row}>
          <Text style={styles.leftName}>Tel number:</Text>
          <Text>{telNumber}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.leftName}>Start day:</Text>
          <Text>{startDay.toDateString()}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.leftName}>End day:</Text>
          <Text>{endDay.toDateString()}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.leftName}>Beds amount:</Text>
          <Text>{beds}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.leftName}>Romm class:</Text>          
          <Text>{room}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.leftName}>Breakfast:</Text>
          <Text>{breakfast == true ? 'With breakfast' : 'Without breakfast'}</Text>
        </View>
      </ScrollView>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  row: {
    marginLeft: 20,
    flexDirection: 'row',
    textAlign: 'left',
    marginBottom:20,
    height:50,
    alignItems:'center'
  },
  leftName:{
    fontWeight:'bold',
    width: DeviceWidth * 0.3
  }
});
