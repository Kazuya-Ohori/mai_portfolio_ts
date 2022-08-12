import { memo } from 'react'
import styles from './Footer.module.css';

export const Footer = memo(() => (
  <footer className={styles.footer}>
    <p className={styles.footer__copyrights}>MAIVALDENAIRE © 2020</p>
  </footer>
))

Footer.displayName = 'footer'