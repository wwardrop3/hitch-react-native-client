import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { host } from "./App"
import * as SecureStore from "expo-secure-store"




export const loginUser = (user) => {
    return fetch(`${host}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            username: user.username,
            password: user.password
        })
    }).then(res => res.json()).catch((e) => console.log("asdf"))
}

export const registerUser = (newUser) => {
    return fetch(`${host}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newUser)
    }).then(res => res.json())
}

export const get_all_driver_trips = (lat, lng, token) => {


    return fetch(`${host}/driver_trips?lat=${lat}&lng=${lng}`, {
        headers: {
            "Authorization": `Token ${token}`
        }
    }).then(res => res.json().catch((e) => console.log(e)))
}


export const get_member = (token) => {
    return fetch(`${host}/members/1`, {
        headers: {
            "Authorization": `Token ${token}`
        }
    }).then(res => res.json().catch((e) => console.log(e)))
}

export const create_new_driver_trip = (trip, token) => {
    return fetch(`${host}/driver_trips`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        },
        body: JSON.stringify(trip)
    }).then(res => res.json().catch((e) => console.log(e)))
}


export const delete_driver_trip = (id, token) => {
    return fetch(`${host}/driver_trips/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Token ${token}`
        }
    }).catch(e => console.log(e))
}