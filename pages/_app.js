import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import resetCSS from '../reset.css.js'
const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;600&display=swap" rel="stylesheet"/>
        <style>
        {`
          body {
            font-family: 'Roboto', sans-serif;
          }
          h3 {
            font-weight: 600;
          }
          p {
            font-weight: 300;
          }
          h3, p {
            font-size: 14px;
            line-height: 1.28;
          }
        `}
        {resetCSS}
        </style>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      </>
    )
  }
}
