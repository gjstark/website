import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './base.css'
import Container from './container'
import Navigation from './navigation'
import Footer from './footer'

const Layout = ({ location, children, hideNav = false, hideFooter = false }) => {
  return (
    <Container>
      {!hideNav && <Navigation />}
      <main>{children}</main>
      {!hideFooter && <Footer />}
    </Container>
  )
}

export default Layout
