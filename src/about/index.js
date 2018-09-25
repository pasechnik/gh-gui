import React from 'react'
import Helmet from 'react-helmet'
import { Container } from 'reactstrap'
import './style.css'

const version = '0.3.1'

function About() {
  return (
    <div id='about'>
      <Helmet title='About the app' />
      <Container>
        <h2 className='text-center'>
          About
        </h2>
        <p>
          About page content
        </p>
        <p>
          version
          <b>
            {version}
          </b>
        </p>
      </Container>
    </div>
  )
}

export default About
