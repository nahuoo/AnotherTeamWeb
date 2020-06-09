import React from 'react'
import Header3D from './components/Header3D'
import Navbar from './components/Navbar'
import GlobalStyle from './assets/styled-components/GlobalStyles'
import {AngleContextProvider} from './components/AngleContext'

const App = () => {
    return (
        <div style={{background: 'black', width: "100vw"}}>
            <GlobalStyle />
            <AngleContextProvider>
                <Navbar />
                <Header3D />
                <div style={{color: "white"}}>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse provident id nihil perspiciatis unde nam molestiae optio! Temporibus harum molestiae consequatur dignissimos soluta labore consectetur ipsum aperiam veniam, sapiente dolorem?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse provident id nihil perspiciatis unde nam molestiae optio! Temporibus harum molestiae consequatur dignissimos soluta labore consectetur ipsum aperiam veniam, sapiente dolorem?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse provident id nihil perspiciatis unde nam molestiae optio! Temporibus harum molestiae consequatur dignissimos soluta labore consectetur ipsum aperiam veniam, sapiente dolorem?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse provident id nihil perspiciatis unde nam molestiae optio! Temporibus harum molestiae consequatur dignissimos soluta labore consectetur ipsum aperiam veniam, sapiente dolorem?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse provident id nihil perspiciatis unde nam molestiae optio! Temporibus harum molestiae consequatur dignissimos soluta labore consectetur ipsum aperiam veniam, sapiente dolorem?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse provident id nihil perspiciatis unde nam molestiae optio! Temporibus harum molestiae consequatur dignissimos soluta labore consectetur ipsum aperiam veniam, sapiente dolorem?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse provident id nihil perspiciatis unde nam molestiae optio! Temporibus harum molestiae consequatur dignissimos soluta labore consectetur ipsum aperiam veniam, sapiente dolorem?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse provident id nihil perspiciatis unde nam molestiae optio! Temporibus harum molestiae consequatur dignissimos soluta labore consectetur ipsum aperiam veniam, sapiente dolorem?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse provident id nihil perspiciatis unde nam molestiae optio! Temporibus harum molestiae consequatur dignissimos soluta labore consectetur ipsum aperiam veniam, sapiente dolorem?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse provident id nihil perspiciatis unde nam molestiae optio! Temporibus harum molestiae consequatur dignissimos soluta labore consectetur ipsum aperiam veniam, sapiente dolorem?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse provident id nihil perspiciatis unde nam molestiae optio! Temporibus harum molestiae consequatur dignissimos soluta labore consectetur ipsum aperiam veniam, sapiente dolorem?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse provident id nihil perspiciatis unde nam molestiae optio! Temporibus harum molestiae consequatur dignissimos soluta labore consectetur ipsum aperiam veniam, sapiente dolorem?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse provident id nihil perspiciatis unde nam molestiae optio! Temporibus harum molestiae consequatur dignissimos soluta labore consectetur ipsum aperiam veniam, sapiente dolorem?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse provident id nihil perspiciatis unde nam molestiae optio! Temporibus harum molestiae consequatur dignissimos soluta labore consectetur ipsum aperiam veniam, sapiente dolorem?</p>
                    
                </div>
            </AngleContextProvider>
        </div>
    )
}

export default App
