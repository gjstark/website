import React from "react"
import { Link } from "gatsby"
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import base from '../components/contactform.css'
import Layout from "../components/layout"


const ContactPage = () => (
  <Layout pageInfo={{ pageName: "About" }}>
    {/* <div style={{ background: '#fff' }}> */}
    <div class="container" style={{ background: '#fff' }}>
        {/* <h2>Hi from the contact page</h2>
        <p>Welcome to contact page

            This is going to be my contact page. i am super stoked about it
        </p>*/}
        <h2>Contact Form</h2> 
            Please use the below form to contact us for any enquires you may have. 


        <form method="post" name="Contact Form" action="/thankyou" data-netlify="true">
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
        <p>
            <input type="submit"/>
        </p>
        </form>






        {/* <Link to="/">Go back to the homepage</Link> */}
    
    </div>
  </Layout>
)

export default ContactPage