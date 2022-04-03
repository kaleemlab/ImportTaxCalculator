import {BrowserRouter, Route} from 'react-router-dom'

import {FormStep1} from '../pages/FormStep1/intex'
import {FormStep2} from '../pages/FormStep2'
import {FormStep4} from '../pages/FormStep4'

export const Router = () => {
    return (
        <BrowserRouter>
            <Route path='/' exact component={FormStep1}/>
            <Route path='/experience' component={FormStep2}/>
            i <Route path='/result' component={FormStep4}/>
        </BrowserRouter>
    )
}
