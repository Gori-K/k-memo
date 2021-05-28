import Link from "next/link";
import Image from 'next/image'

import classes from './Header.module.css'

export  function Header() {
  return (
   

      <header className={classes.header}>
        <Link href="/">
          <a className={classes.ancor}>Index</a>
        </Link>
      <Link href="/about">
        <a  className={classes.ancor}>About</a>
      </Link>

      </header>
    
  )
}
