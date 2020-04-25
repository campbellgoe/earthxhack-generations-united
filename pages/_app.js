import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import resetCSS from '../reset.css.js'
import theme from '../theme.json'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;600&display=swap" rel="stylesheet"/>
        <style>
        {resetCSS}
        {`
          body {
            font-family: 'Roboto', sans-serif;
          }
          h1 {
            font-size: 24px;
            font-weight: 600;
          }
          h2 {
            font-size: 16px;
            font-weight: 300;
            color: #C4C4C4;
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
            margin: 14px 0;
          }
        `}
        </style>
      </Head>
      <ThemeProvider theme={theme}>
        <Component className="Page" {...pageProps} />
      </ThemeProvider>
      </>
    )
  }
}
