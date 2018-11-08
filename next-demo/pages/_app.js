import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'

import createStore from '../redux/store'

class MyApp extends App {
  // static async getInitialProps({ Component, ctx}) {
  //   let pageProps = {}

  //   if(Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps({ ctx })
  //   }

  //   return { pageProps }
  // }

  render() {
    const { Component, pageProps, store, router } = this.props

    return (
      <Container>
        <Head>
          <title>Todo App</title>
        </Head>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
      </Container>
    )
  }
}

// export default MyApp

export default withRedux(createStore)(withReduxSaga({ async: true })(MyApp))

