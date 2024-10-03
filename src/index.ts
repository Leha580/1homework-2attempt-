import {app} from './app'
import {SETTINGS} from './settings'

app.listen(SETTINGS.PORT, () => {
    console.log('...serverrr started in port ' + SETTINGS.PORT)
})