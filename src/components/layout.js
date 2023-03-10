import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                  Home
              </Link>
          </li>
          <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                  About
              </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>
            {pageTitle}
        </h1>
        {children}
      </main>
    </div>
  )
}

export default Layout

// /**
//  * Layout component that queries for data
//  * with Gatsby's useStaticQuery component
//  *
//  * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
//  */
//
// import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"
//
// import Header from "./header"
// import "./layout.css"
//
// import { Link } from 'gatsby'
//
//
// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)
//
//   return (
//     <>
//       <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
//       <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: `var(--size-content)`,
//           padding: `var(--size-gutter)`,
//         }}
//       >
//         <main>{children}</main>
//         <footer
//           style={{
//             marginTop: `var(--space-5)`,
//             fontSize: `var(--font-sm)`,
//           }}
//         >
//           © {new Date().getFullYear()} &middot; Built with
//           {` `}
//           <a href="https://www.gatsbyjs.com">Gatsby</a>
//         </footer>
//       </div>
//     </>
//   )
// }
//
// export default Layout
