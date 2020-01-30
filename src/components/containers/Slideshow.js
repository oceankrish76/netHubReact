import React, { Component } from 'react'
/* import { Slide } from './lib'; */
import { Slide } from 'react-slideshow-image';
/* import slideImages from  './images/slide_2.jpg';
 *//* import './app.css';
*/
const slideImages = [
  './images/slide_2.jpg',
  './images/slide_3.jpg',
  './images/slide_4.jpg',

];

const properties = {
  duration: 10000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}


const Slideshow = () => {
  return (
    <div className="slide-container">

      <Slide {...properties}>

        <div className="each-slide" style={{ height: '640px' }}>

          <div className="slider-images" style={{ height: '640px', 'backgroundImage': `url(http://theNetHub.com/aaa19/aaa19-04.jpg)` }}>
            {/* <section className="slidersection">
              <div class="mbr-overlay"></div>

              
              <div class="container">
              <div class="mbr-row">
                  <div class="mbr-col-sm-12 mbr-col-md-12 mbr-col-lg-12">
                      <h1 class="mbr-section-title align-left mbr-fonts-style mbr-semibold mbr-pb-4 display-1">Planner App</h1>
                  </div>
              </div>

              <div class="mbr-row mbr-pb-5 mbr-jc-e">
                  <div class="mbr-col-sm-12 mbr-col-md-12 mbr-col-lg-10">
                      <p class="mbr-text align-left mbr-semibold mbr-fonts-style mbr-pt-2 display-2">Lorem
                          ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque congue mi nec lobortis. Sed
                          placerat lobortis.</p>
                  </div>
              </div>
          </div>
          </section> */}
            <span>CLICK ON THE LINK BELOW TO VOTE
                <div class="cta-btn typewriter"><h1>YOU CAN VOTE ONLY ONCE,</h1> SO  REMEMBER TO VOTE FOR ALL YOUR NOMINEES! Voting ends November 5th  <a href="#" target="_blank" class="btn btn-themes btn-lg">Vote Now  <i class="fa fa-angle-right"></i></a></div>
            </span> *
              </div>
        </div>

        <div className="each-slide" style={{ height: '640px' }}>
          <div className="slider-images" style={{ height: '640px', background: 'transparent', 'backgroundImage': `url(https://NetHub.files.wordpress.com/2019/02/cropped-dsc_0081x.jpg)` }}>
            <h1 class="mbr-section-title align-left mbr-fonts-style mbr-semibold mbr-pb-4 display-1 slider-text-2-3">Community Based</h1>
            <span>To elevate, encourage and support more self reliance within the community. Join us please by contacting NetHub leading team.
                </span>
          </div>
        </div>
        <div className="each-slide" style={{ height: '640px' }}>
          {/*              <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
*/}             <h1 class="mbr-section-title align-left mbr-fonts-style mbr-semibold mbr-pb-4 display-1 slider-text-2-3" style={{ paddingTop: '1em' }}>Events Driven</h1>
          <div className="slider-images" style={{ height: '640px', 'backgroundImage': `url(http://theNetHub.com/images/img1.jpg)` }}>  {/* https://react-slideshow.herokuapp.com/images/slide_2.jpg */}
            <span>The Wait Is Over, Our Product is About To Release</span>
          </div>
        </div>

      </Slide>
    </div>
  )
}
export default Slideshow;