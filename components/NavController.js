import React from 'react';
import {View} from "react-native"
import { useIsLoggedIn } from "../AuthContext";
import AuthNavigation from '../navigation/AuthNavigation';
import MainNavigation from "../navigation/MainNavigation";
import TabNavigation from "../navigation/TapNavigation";

export default () => {
    
    const isloggedIn =  useIsLoggedIn();
    return (
        <View style={{flex:1}}>
             {isloggedIn ? <MainNavigation /> : <AuthNavigation />}
        </View>
    )
}