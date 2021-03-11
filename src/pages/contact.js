import React from "react"
import { Link } from "gatsby"
import Helmet from 'react-helmet'
import Hero from '../components/hero'

import Layout from "../components/layout"


const ContactPage = () => (
  <Layout pageInfo={{ pageName: "About" }}>
    <div style={{ background: '#fff' }}>

        <h2>Hi from the contact page</h2>
        <p>Welcome to contact page

            This is going to be my contact page. i am super stoked about it
        </p>
        <Link to="/">Go back to the homepage</Link>
    
    </div>
  </Layout>
)

export default ContactPage