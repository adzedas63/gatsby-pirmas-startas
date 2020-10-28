import React from 'react'
import { Link,graphql,useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.scss'


const Footer = () => {
    const data = useStaticQuery(graphql`
          query {
            site {
              siteMetadata {
                author
              }
            }
          }
        `)
    return (
        <footer className={footerStyles.footer}>
            <Link to='/contact'>
            <p className={footerStyles.footerText}>Created by {data.site.siteMetadata.author} <img src='http://www.pngall.com/wp-content/uploads/2017/05/Copyright-All-Rights-Reserved-Symbol-PNG-Image.png' height='60px' alt='Original'></img>2020</p>
            </Link>
            
        </footer>
    )
}

export default Footer