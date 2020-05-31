import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
        <p>
            <h3>Hello!</h3>
            My name is Jonathon. I am a young developer eager to get started programming.
        </p>
    </div>
  </Layout>
)

export default IndexPage
