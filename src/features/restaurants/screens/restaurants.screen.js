import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled(View)`
    padding: ${(props) => props.theme.space[3]};
`;
const ReastaurantListContainer = styled(View)`
    flex: 1;
    padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => (
    <SafeArea>
        <SearchContainer>
            <Searchbar />
        </SearchContainer>
        <ReastaurantListContainer>
            <RestaurantInfoCard />
        </ReastaurantListContainer>
    </SafeArea>

);
