import React from "react"
import { Link } from "gatsby"
import Helmet from 'react-helmet'
import Hero from '../components/hero'

import Layout from "../components/layout"


const ThankYouPage = () => (
  <Layout pageInfo={{ pageName: "ThankYou" }}>
    <div style={{ background: '#fff' }}>

        <h1>Thank You!</h1>
        <p>We will reply to your message shortly.
        </p>
        <Link to="/">Go back to the homepage</Link>
    
    </div>
  </Layout>
)

export default ThankYouPage