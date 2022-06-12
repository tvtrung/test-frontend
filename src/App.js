import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Homepage from './components/homepage';

function App() {
    return (
        <div>
        	<Header/>

    		<Route path='/' component={Homepage} exact/>
    		<Route path='/about' component={Homepage} exact/>
    		<Route path='/services' component={Homepage} exact/>
    		<Route path='/portfolio' component={Homepage} exact/>
    		<Route path='/contacts' component={Homepage} exact/>
            
			<Footer/>
        </div>
    );
}

export default App;
