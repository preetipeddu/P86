import React, {Component} from "react";
import {Text, View, StyleSheet} from "react-native";

export default class DashboardScreen extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text>Dashboard</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       justifyContent: "center",
       alignItems: "center"
      }
})