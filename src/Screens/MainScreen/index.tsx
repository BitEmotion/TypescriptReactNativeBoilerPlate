import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native';

const MainScreen = () => {
    const [ number, setNumber ] = useState(0);
    return (
        <View 
            onLayout={(event) => {
                const { x, y, width, height } = event.nativeEvent.layout;
                console.log("x, y, width, height", x, y, width, height);
            }}
            style={{
                flex:1,
                flexDirection:"column",
                justifyContent:"center"
            }}
        >
            <Text style={{
                textAlign:"center"
            }}>
                MainScreen {number}
            </Text>

            <View style={{
                flexDirection:"row",
                justifyContent:"center"
            }}>
                <TouchableOpacity
                    onPress={() => setNumber(number + 1)}>
                    <Text style={{
                        padding:10
                    }}>
                        클릭
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MainScreen;