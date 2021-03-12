import React from "react"
import { Link } from "gatsby"
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import base from '../components/contactform.css'
import Layout from "../components/layout"


const ContactPage = () => (
  <Layout pageInfo={{ pageName: "Contact" }}>
    {/* <div style={{ background: '#fff' }}> */}
    <div class="container" style={{ background: '#fff' }}>
        <h2>Contact Form</h2> 
            Please use the below form to contact us for any enquires you may have. 

        <form method="POST" name="Contact" action="/thankyou/" netlify-honeypot="bot-field" data-netlify-recaptcha="true" data-netlify="true">
          <input type="hidden" name="form-name" value="Contact" />
          <input type="hidden" name="bot-field"/>
          <p>
              <label for="name">Name:</label>
              <input type="text" name="name" id="name"/>
          </p>
          <p>
              <label for="email">Email:</label>
              <input type="email" name="email" id="email"/>
          </p>
          <p>
              <label for="comments">Comments:</label><br/>
              <textarea name="comments" id="comments"></textarea>
          </p>
          <div data-netlify-recaptcha="true"></div>
          <p>
              <input type="submit"/>
          </p>
        </form>
    </div>
  </Layout>
)

export default ContactPage