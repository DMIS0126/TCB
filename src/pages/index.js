// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


// Step 2: Define your component
const IndexPage = () => {
  return (
          <Layout pageTitle="TCB">
      <h1>
         Reinvent Education with Technology
      </h1>
              <br></br>

              <h2>
                  Keyword <br></br>🎛 수학 전문 🎛 Interactive 🎛 수험서비스 🎛 New Technology
              </h2>
              <br></br>
      <h3>
          Brand Slogan
            수학이 고민될 때, 수학대왕
      </h3>
    </Layout>
    // <main>
    //   <h1>Welcome to my Gatsby site!</h1>
    //      <Link to="/about">About</Link>
    //   <p>I'm making this by following the Gatsby Tutorial.</p>
    // </main>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>✏️TCB</title>

// Step 3: Export your component
export default IndexPage