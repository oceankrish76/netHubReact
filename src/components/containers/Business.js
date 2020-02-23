import React, { Component } from 'react'
import Tabs from './Tabs';
/* import Posts from '../containers/posts/Posts'; */
const styles = {
  fontFamily: 'sans-serif',
};
export default class Business extends Component {
    constructor(props) {
        super(props);
        this.state = {active: 'aTab'};
      }
      render() {
        const content = {
          aTab: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
          bTab: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
          cTab: 'Reputation, Respect, Result A small river named Duden flows by their place and supplies it with the necessary regelialia.',
        };
        return (
            <div>
                <div id="tg-banner" class="tg-banner">
                    <a id="tg-btnscroll" class="tg-btnscroll tg-btnsectionscroll" href="javascript:void(0);">
                        <img class="floating" src="http://items.lifeinsys.com/item/malena/demonstration/resources/img/mouse-img.png" alt="mouse-img" />
                    </a>
                    <div class="tg-banner-content">
                        <div class="business-container">
                            <h1 class="uppercase"><span class="blue">NetHub's - </span> Creative Business Approach</h1>
                            <p class="business-text">Interested to expand your business? Choose your Location</p>
                            <div class="tg-btnarea">
                                <a class="tg-btn tg-btnsectionscroll" href="javascript:void(0);">Africa</a>
                                <a class="tg-btn tg-active" href="https://themeforest.net/item/malena-creative-portfolio-template/23232081" target="_blank">Finland</a>
                            </div>
                        </div>
                    </div>
                </div>
                

                {/*<div className="business-section">
                    <div className="business-inner-section">
                        <i class="fas fa-hashtag icons-color"></i>

                        <p class="mv0 lh-copy white f5">
                        <span class="f6">“</span>
                        Pictures, abstract symbols, materials, and colors are among the ingredients with which a designer or engineer works. 
                        To design is to discover relationships and to make arrangements and rearrangements among these ingredients.
                        <span class="f6">”</span></p>
                    </div>
                </div>*/}
                {/*}
                <div class="card text-center">
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">
                    With vast users across Finland, NetHubs App is all about building networks and connections. 
                    It’s not only about who you know but about who your connections know. That’s the real power of the NetHubs App for business: the ability to tap into existing connections and grow your brand through word-of-mouth. 
                    It’s also the 21st-century social network for lead generation.
                    </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                <div class="card-footer text-muted">
                    2 days ago
                </div>
                </div>
            */}
            {/* <h1>Tabs Example</h1>*/}
                <Tabs
                active={this.state.active}
                onChange={active => this.setState({active})}
                >
                <div class="abctabs" key="aTab">Business In Finland</div>
                <div class="abctabs" key="bTab">Business In Africa</div>
                <div class="abctabs" key="cTab">{this.state.active === 'bTab' ? 'Africa & Finland' : 'Africa & Finland'}</div>
                </Tabs>
                {/* <h2>Content</h2> */}
                <p className="tabs-p">{content[this.state.active]}</p>

                <section class="page-section" id="services">
                    <div class="container">
                    <h2 class="text-center mt-0">At Your Service</h2>
                    <hr class="divider my-4" />
                    <div class="row">
                        <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <i class="fas fa-4x fa-gem text-primary mb-4"></i>
                            <h3 class="h4 mb-2">Sturdy Themes</h3>
                            <p class="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
                        </div>
                        </div>
                        <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <i class="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                            <h3 class="h4 mb-2">Up to Date</h3>
                            <p class="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
                        </div>
                        </div>
                        <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <i class="fas fa-4x fa-globe text-primary mb-4"></i>
                            <h3 class="h4 mb-2">Ready to Publish</h3>
                            <p class="text-muted mb-0">You can use this design as is, or you can make changes!</p>
                        </div>
                        </div>
                        <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <i class="fas fa-4x fa-heart text-primary mb-4"></i>
                            <h3 class="h4 mb-2">Made with Love</h3>
                            <p class="text-muted mb-0">Is it really open source if it's not made with love?</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    </section>

                    <section class="cid-rlf6rmW8WO" id="header07-7n">
                <div class="container align-center">
                    <div class="row">
                        <div class="col-lg-8 col-md-12 align-center">
                                <iframe width="80%" height="515" src="https://www.youtube.com/embed/dXUSAHTazxI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                        </div>
                        <div class="col-md-12 col-lg-4 py-4 m-auto">
                            <h2 class="mbr-section-title mbr-regular pb-3 align-left mbr-fonts-style display-2">Watch </h2>

                            <p class="mbr-text mbr-light pb-3 align-left mbr-fonts-style display-7">
                                Our products are very popular among yang people. We always have only positive feedbacks. The quality is absolutely positive.
                            </p>
                            <div class="align-left mbr-section-btn"><a class="btn btn-md btn-primary display-4 btn-theme" href="https://mobirise.co">READ MORE</a></div>
                        </div>
                    </div>
                </div>
            </section>
                <section class="page-section bg-business" id="about">
                    <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 text-center">
                        <h2 class="mb-4 mt-0" style={{padding:'1em', textDecoration:'underline'}}>We've got what you need!</h2>
                        <hr class="divider light my-4" />
                        <p class="mbr-text pb-3 align-left mbr-fonts-style display-7">Our products are very popular among yang people. We always have only positive feedbacks. The quality is absolutely positive.</p>
                        <a href="https://docs.google.com/forms/d/1vMSzDkxRfk8FePjCTXH77sops5AaGMW4MU5cNP48kIg/edit" target="_blank" class="btn btn-themes btn-lg">Vote Now  <i class="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                    </div>
                </section>
                <br />
                <br />

                <section class="page-section" id="contact">
                <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 text-center">
                    <h2 class="mt-0">Let's Get In Touch!</h2>
                    <hr class="divider my-4" />
                    <p class="text-muted mb-5">Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                    <i class="fas fa-phone fa-3x mb-3 text-muted"></i>
                    <div>+1 (202) 555-0149</div>
                    </div>
                    <div class="col-lg-4 mr-auto text-center">
                    <i class="fas fa-envelope fa-3x mb-3 text-muted"></i>
                    <a class="d-block" href="mailto:contact@yourwebsite.com">contact@yourwebsite.com</a>
                    </div>
                </div>
                </div>
            </section>
            </div>

        )
    }
}
