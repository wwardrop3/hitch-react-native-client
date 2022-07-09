import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { DatePickerIOS, View, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';

export default function SelectDateTime({ showDate, setShowDate, setStartDate, chosenDate, setChosenDate }) {

    const handleChange = (chosenDate) => {
        setChosenDate(chosenDate)
    }

    return (
        <View style={styles.container} >
            <DatePickerIOS
                style={{ backgroundColor: "rgba(1,5,2,0.5)", borderRadius: 10, }}
                date={chosenDate}
                pickerStyle="inline"
                onDateChange={handleChange}
                collapsable="true"
                mode="datetime"

            />
            <MaterialIcons
                name="add"
                size={24}
                onPress={() => setShowDate(!showDate)}
                style={globalStyles.modalToggle}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        position: "absolute",
        padding: 15,
        borderRadius: 10,
        backgroundColor: "transparent"
    }
});

