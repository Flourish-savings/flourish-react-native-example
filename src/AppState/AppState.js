import React, { useState, useEffect } from 'react'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'
import { PARTNER_UUID, PARTNER_SECRET } from "@env"

import AppNavigation from '../AppNavigation/AppNavigation'
import api from '../services/api'

export default function AppState() {

    const [ accessToken, setAccessToken ] = useState([])

    useEffect(() => {
        api.post('access_token', {
            partner_uuid: PARTNER_UUID,
            partner_secret: PARTNER_SECRET,
            customer_code: uuidv4()
        }).then(response => {
            setAccessToken(response.data.access_token)
        })
    }, [])

    
    const AppState = {
        accessToken
    }

    return <AppNavigation AppState={ AppState }/>
}
