import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import indexStyles from './index.module.scss'


const IndexPage = () => {
  return (
    <Layout>
            <h1>Kalnu slidinejimas +Plius</h1>
      <h2>Kokius kalnus aptarsime</h2>
             <nav>
                <ul className={indexStyles.navList}>
                    <li>
                        <Link className={indexStyles.navItem} activeClassName={indexStyles.activeNavItem} to='/'>Italija</Link>
                    </li>
                    <img src='https://himountains.lt/wp-content/uploads/hero_home_2020@2x_0e7f8c53.jpg' height='200px' alt='ArunasDz_2020'></img>

                    <li>
                        <Link className={indexStyles.navItem} activeClassName={indexStyles.activeNavItem} to='/'>Prancuzija</Link>
                    </li>
                    <img src='https://himountains.lt/wp-content/uploads/hero_home_2020@2x_0e7f8c53.jpg' height='200px' alt='ArunasDz_2020'></img>

                    <li>
                        <Link className={indexStyles.navItem} activeClassName={indexStyles.activeNavItem} to='/'>Austrija</Link>
                    </li>
                    <img src='https://himountains.lt/wp-content/uploads/hero_home_2020@2x_0e7f8c53.jpg' height='200px' alt='ArunasDz_2020'></img>

                    <li>
                        <Link className={indexStyles.navItem} activeClassName={indexStyles.activeNavItem} to='/'>Lenkija</Link>
                    </li>
                    <img src='https://himountains.lt/wp-content/uploads/hero_home_2020@2x_0e7f8c53.jpg' height='200px' alt='ArunasDz_2020'></img>

                </ul>
            </nav>    
            </Layout>
  )
}

export default IndexPage