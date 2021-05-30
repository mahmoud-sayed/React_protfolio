import React from 'react';
import { BrowserRouter , Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar/index.jsx';
import Index from './components/index/index.jsx';
import Contact from './components/contact/index.jsx';


const App = () => {
        console.log('1')
        return(
            <BrowserRouter>
                    <Navbar/>
                <Switch>
                <Route exact path="/" component={Index} />
                    <Route path="/contact" component={Contact} />
                </Switch>

                </BrowserRouter>
        )
};

export default App;