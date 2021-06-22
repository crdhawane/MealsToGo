import React from "react";
import styled from 'styled-components/native'

import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Card } from "react-native-paper";

const Title = styled.Text`
    padding: 16px;
    color: red;
`;
export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = "Shiv Thali",
        icon,
        photos = [
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bas5nvjlclyexgp87zfa",
        ],
        address = "magan wadi wardha",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant;
    return (
        <Card elevation={5} style={styles.card}>
            <Card.Cover style={styles.cover} source={{ uri: photos[0] }} />
            <Title>{name}</Title>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: { backgroundColor: "white" },
    cover: { padding: 20, backgroundColor: "white" },
    //title: { padding: 16 }
})