import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from '../styles/home.module.scss'

const IndexPage = () => (
  <div className={styles.container}>
    <h1>olar pessoas</h1>
    <StaticImage src="../images/print.png" alt="A dinosaur" className={styles.img} />
  </div>
)

export default IndexPage
