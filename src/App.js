import React, { Component } from 'react'; 
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'; 
import Home from './pages/home'; 
// import About from './component/about'; 
// import Contact from './component/contact'; 
import './App.css'; 
import Navbar from './component/nav';




class App extends Component { 
render() { 
	return ( 
    
		<Router> 
		<Navbar/>
		<div className="App"> 
			 
		<Routes> 
				<Route exact path='/' element={< Home />}></Route> 
				{/* <Route exact path='/about' element={< About />}></Route> 
				<Route exact path='/contact' element={< Contact />}></Route>  */}
		</Routes> 
		</div> 
	</Router> 
); 
} 
} 

export default App;
