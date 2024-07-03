/* eslint-disable */ 
import React from "react"
import databiz from '../images/client-databiz.svg'
import audiophiles from '../images/client-audiophile.svg'
import meet from '../images/client-meet.svg'
import maker from '../images/client-maker.svg'
import Nav from "../Components/Nav"
const Intro = () => {
  return (
    <>
      <div className="navs">
            <Nav/>   
      </div>
      <div className="container">
        <main className="main d-flex align-items-center mt-5">
            <div className="main-div col-md-10 m-auto">
              <div className="content">
                <h1>Make&nbsp;<br className="br"/>remote work</h1>
                <p className="para my-5">Get your team in sync, no matter your location. <br className="br"/> Streamline processes, create team rituals, and <br className="br"/> watch productivity soar.</p>
                <button className="more-btn">Learn more</button>
                <div className="img-slider mt-5">
                  <img src={databiz} alt="img" width={80} height={20}/>
                  <img src={audiophiles} alt="img" width={60} height={30}/>
                  <img src={meet} alt="img" width={50} height={15}/>
                  <img src={maker} alt="img" width={60} height={20}/>
                </div>
              </div>
              <div className="heroimg">
                {/* <img src={heroimg} alt="img" className="img-fluid" height={50} width={370}/> */}
              </div>
            </div>
          </main>
      </div>
    </>
  )
};

export default Intro;
