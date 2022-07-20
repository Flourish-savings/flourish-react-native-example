import React, { useState, useEffect } from 'react'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'
import { FLOURISH_BASE_URL, PARTNER_UUID, PARTNER_SECRET } from "@env"

import AppNavigation from '../AppNavigation/AppNavigation'

export default function AppState() {

    const [ accessToken, setAccessToken ] = useState([])

    useEffect(() => {
        const data = {
            partner_uuid: PARTNER_UUID,
            partner_secret: PARTNER_SECRET,
            customer_code: uuidv4()
        }
        fetch(`${FLOURISH_BASE_URL}/access_token`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }).then(response => {
            if (response.status !== 200 && response.status !== 201) {
                throw new Error("Access token request failed")
            }
            return response.json()
        }).then(responseData => {
            setAccessToken(responseData.access_token)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    
    const AppState = {
        accessToken
    }

    return <AppNavigation AppState={ AppState }/>
}
