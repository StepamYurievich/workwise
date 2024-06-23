import './App.css';

import {Routes, Route, BrowserRouter} from 'react-router-dom'

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Companies from "./components/pages/companies/Companies";
import HomeS from "./components/pages/HomeSignIn/Home";
import HomeR from "./components/pages/HomeSignUp/Home";
import Help from "./components/pages/HelpCenter/Help";


function App() {
    return (
        <div className="App">
            <div className={'conteiner'}>
                <BrowserRouter>
                    <div className={'container_inner'}>
                        <Header/>
                    </div>
                    <Routes>
                        <Route path={'/companies'} element={<Companies/>}/>
                        <Route path={'/login'} element={<HomeS/>}/>
                        <Route path={'/register'} element={<HomeR/>}/>
                        <Route path={'/help'} element={<Help/>}/>
                    </Routes>
                    <div className={'footer'}>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </div>

        </div>
    );
}

export default App;
