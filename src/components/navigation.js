import React from "react"
import { Link } from "gatsby"

const Navigation = (props) => (
    <div
      style={{
          background: 'black',
          marginBottom: `1.45rem`,
          color: 'white',
          padding: `1.25rem 1.055rem`
      }}>
    <Link to="/" style={{
        color: `white`,
        textDecoration: `none`,
    }}>Home</Link>
    </div>
)

export default Navigation;
