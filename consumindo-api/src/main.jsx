import { render } from 'preact'
import { App } from './app'
import { AppAxios } from './AppAxios'
import './index.css'

render(<AppAxios />, document.getElementById('app'))
