import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import * as styles from '../styles/home.module.scss'
import { HelloWorld } from 'components/HelloWorld'

const HomePage = () => (
  <div className={styles.container}>
    <HelloWorld />
    <StaticImage
      src="../images/print.png"
      alt="A dinosaur"
      className={styles.img}
    />
  </div>
)

export default HomePage
