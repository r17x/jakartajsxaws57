import React from 'react'
import Footer from 'mdx-deck-footer'
import { deck } from './config'

export const Layout = ({ children, conf = deck.conf , speaker = deck.speaker } ) => (
  <Footer conf={conf} speaker={speaker} >
    {children}
  </Footer>
)
