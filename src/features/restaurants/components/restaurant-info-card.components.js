import React from "react";
import styled from 'styled-components/native'

import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
    background-color: white;
`;
const RestaurantCardCover = styled(Card.Cover)`
    padding: 20px;
    background-color: white;
`;
const Title = styled(Text)`
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
        <RestaurantCard elevation={5}>
            <RestaurantCardCover source={{ uri: photos[0] }} />
            <Title>{name}</Title>
        </RestaurantCard>
    );
};

// const styles = StyleSheet.create({
//     card: { backgroundColor: "white" },
//     cover: { padding: 20, backgroundColor: "white" },
//     title: { padding: 16 }
// })