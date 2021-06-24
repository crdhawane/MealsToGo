import React from "react";
import styled from 'styled-components/native'

import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from 'react-native-svg';

import star from '../../../../assets/star';
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";

const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;
const Address = styled(Text)`
        font-family: ${(props) => props.theme.fonts.heading};
        font-size: ${(props) => props.theme.fontSizes.caption};

`;
const Title = styled(Text)`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
    color: ${(props) => props.theme.colors.ui.primary};
`;
const Info = styled(View)`
    padding: ${(props) => props.theme.space[3]};
`;
const Rating = styled(View)`
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[2]};
    padding-bottom: ${(props) => props.theme.space[2]};
`;
const Section = styled(View)`
    flex-direction: row;
    align-items: center;
`;
const SectionEnd = styled(View)`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = "Shiv Thali",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bas5nvjlclyexgp87zfa",
        ],
        address = "magan wadi wardha",
        isOpenNow = true,
        rating = 4.2,
        isClosedTemporarily = true,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover source={{ uri: photos[0] }} />
            <Info>
                <Title>{name}</Title>
                <Section>
                    <Rating>
                        {ratingArray.map(() => (
                            <SvgXml xml={star} height={20} width={20} />
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                            <Text variant="label" style={{ color: "red" }}>
                                CLOSED TEMPORARILY
                            </Text>
                        )}
                        <Spacer position="left" size="large">
                            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                        </Spacer>
                        <Spacer position="left" size="large">
                            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
                        </Spacer>
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
};