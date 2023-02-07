import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const PrimaryButton = (props) => {
    return(
        <TouchableOpacity style={style.primaryButton} onPress={props.onPress}>
            <Text style={style.onPrimaryButton}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    primaryButton: {
        backgroundColor: '#B10E0E',
        borderRadius: 100,
        width: '80%'
    },
    onPrimaryButton: {
        color: '#fbfaff',
        margin: 16,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600'
    }
})

export default PrimaryButton
