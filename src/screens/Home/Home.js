import React from 'react'
import { WebView } from 'react-native-webview'

export default function Home(AppState) {

    const accessToken = AppState.AppState.AppState.accessToken
    const iframeUrl = `https://flourish-app-stg.flourishfi.com/pt/?token=${accessToken}`

    if (accessToken.length === 0) return null

    return (
        <WebView source={{uri: iframeUrl}} />
    )
}