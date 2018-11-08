import React, { Component } from "react";
import styled from 'styled-components'

const GlobalFooter = styled.footer`
  color: ${props => props.fontColor};
  font-size: 20px;
`

GlobalFooter.defaultProps = {
  fontColor: '#6cf'
}

export default class Footer extends Component {
  constructor (props) {
      super(props)
      this.state = {
          fontColor: props.fontColor
      }
  }

  render() {
    return (
      <GlobalFooter>
        This is Footer
      </GlobalFooter>
    )
  }
}