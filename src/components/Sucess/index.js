import react from 'react'
import './index.css'
import { useState } from "react";
function Sucess() {
    const [bgClr, setBgClr] = useState("white");

    const AnnualHandler = () => {
        setBgClr("rgb(255, 97, 85)");
    };
    return (

        <div className="sucess-container-newspaper-app">
            <div className='sucess-container-app' >
                <div className="sucess-container-app-left">
                    <h1 className='heading'>Stay updated!</h1>
                    <p className='paragraph'>Join 60,000+ product managers receiving monthly <br /> updates on:</p>
                    <div className='list-container'>
                        <img src='/assets/images/icon-list.svg' alt='icon '
                            className='icon-container' />
                        <p className='paragraph-icon'> Product discovery and building what matters</p>
                    </div>
                    <div className='list-container'>
                        <img src='/assets/images/icon-list.svg' alt='icon'
                            className='icon-container' />
                        <p className='paragraph-icon'> Measuring to ensure updates are success</p>
                    </div>

                    <div className='list-container'>
                        <img src='/assets/images/icon-list.svg'
                            alt='icon'
                            className='icon-container' />
                        <p className='paragragh-icon'> And much more!</p>
                    </div>

                    <div className="input-container-design">

                        <label for="eadress">Email adress:</label><br />
                        <input className="input-container" type="text" id="eadress" name="email adress" placeholder="email adress.." />
                        <br />
                    </div>

                    <button className='subscribe-container' onClick={AnnualHandler} style={{ background: bgClr }}>
                        Subscribe to monthly newsletter</button>


                </div>

                <div className='image-container-right'>

                    <img className='image-right' src='/assets/images/illustration-sign-up-desktop.svg'
                        alt='image desktop' />
                </div>
            </div>
        </div>
    )
}
export default Sucess