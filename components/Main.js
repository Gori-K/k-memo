import classes from './Main.module.css'
import { Links } from '../components/Links'
import {Headline} from '../components/Headline'

export  function Main(props) {
  return (
    
<div>
      <main className={classes.main}>
        <Headline  page={props.code}>
        <code className={classes.code}>pages/{props.code}.js</code>
        </Headline>
        
        
      <Links />
      </main>
      </div>
  )
}
