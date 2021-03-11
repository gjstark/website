import React from "react"
import { Link } from "gatsby"
import Helmet from 'react-helmet'
import Hero from '../components/hero'

import Layout from "../components/layout"


const AboutPage = () => (
  <Layout pageInfo={{ pageName: "About" }}>
    <div style={{ background: '#fff' }}>

        <h1>Hi from the second page</h1>
        <p>Welcome to page 2

            This is going to be my about page. i am super stoked about it
        </p>
        <Link to="/">Go back to the homepage</Link>
    
    </div>
  </Layout>
)

export default AboutPage