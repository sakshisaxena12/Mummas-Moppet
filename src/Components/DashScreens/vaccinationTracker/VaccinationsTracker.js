import React,{Component} from 'react'
import {
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from '@react-navigation/native';
import VaccinationView from './vaccinationView.js'


class VaccinationTracker extends Component{

	constructor(props){
		super(props);
	}

	static navigationOptions={
      title:'VaccinationTracker'
    }

	render(){
		return(

			<VaccinationView/>

			)
	}

}

const styles = StyleSheet.create({

	component:{
		flex : 1,
		backgroundColor : '#fce4ec'
	},

	container :{
	
		borderRadius: 20,
		height : 200,
		marginLeft: 10,
		marginRight : 10,
		shadowColor:'black',
        shadowOffset:{width:10,height:20},
        shadowOpacity:0.2,
        elevation:5,
        marginTop:10,
        backgroundColor:'#FFB1D8'
	}

})



export default VaccinationTracker