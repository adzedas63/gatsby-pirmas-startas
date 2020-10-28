import { Link,graphql,useStaticQuery } from 'gatsby'
import React from 'react'

import headerStyles from './header.module.scss'

const Header = () => {
        const data = useStaticQuery(graphql`
          query {
            site {
              siteMetadata {
                title
                description
              }
            }
          }
        `)

    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to='/'>
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <h3 
            className={headerStyles.description}>{data.site.siteMetadata.description}
            </h3>
            <p> <img src='https://upload.wikimedia.org/wikipedia/de/thumb/6/6e/Sella_Ronda_Logo.svg/1280px-Sella_Ronda_Logo.svg.png' height='60px' alt='Sela_Ronda'></img></p>
            
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/'>Pradinis</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/about'>Apie mane</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/blog'>Pokalbiai</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/contact'>Kontaktai</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header