import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import slidePicture from '../../assets/rockpaperstrategy-1600.jpg';
import elipseOrange from '../../assets/ellipse-orange.png';
import evanPhoto from '../../assets/evan-lahti.jpg';
import jadaPhoto from '../../assets/jada-griffin.jpg';
import aaronPhoto from '../../assets/aaron-williams.jpg';
import twitterCard from '../../assets/twitter-card.png';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import youtube from '../../assets/vector.svg';
import twitch from '../../assets/twitch.svg';
import skull from '../../assets/skull.png';

export default function Home() {
  return (
    <body>
      {/* <!-- MAIN SCREEN --> */}
      <div className="mainScreen">
        <div className="navbar">
          <div className="logo">LOGO</div>
          <div className="navigation">
            <div>HOME</div>
            <div>WORK</div>
            <div>CONTACT</div>
            <div>ABOUT ME</div>
          </div>
          <div className="sign">
            <Link to="/register">
              <div>SIGN UP</div>
            </Link>
            <Link to="/login">
              <div>LOGIN</div>
            </Link>
          </div>
        </div>
        <div className="hero">
          <h1>PLAY TRADITIONAL GAME</h1>
          <p>Experience new traditional game play</p>
        </div>
        <div className="buttonWrapper">
          <Link to="/login">
            <button
              type="button"
              className="btn btn-warning btn-lg py-2 px-5 fw-bold"
            >
              Play Now
            </button>
          </Link>
        </div>
        <p className="scroller">THE STORY</p>
        <div className="scrollLogo">
          <svg
            width="23"
            height="12"
            viewBox="0 0 23 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.5786 1.83362H1.32422L11.338 10.0027L21.5786 1.83362Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {/* <!-- MAIN SCREEN END --> */}

      {/* <!-- GAME CHOICE --> */}
      <div className="gameChoice">
        <div className="leftText">
          <h3>Whats so special?</h3>
          <h1>THE GAMES</h1>
        </div>
        <div className="carouselPersonal">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={slidePicture} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={slidePicture} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={slidePicture} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      {/* <!-- GAME CHOICE END --> */}

      {/* <!-- FEATURES PAGE --> */}
      <div className="featuresPage">
        <div className="featureLine">
          <div className="step">
            <div>
              <div className="circle">
                <i className="fa fa-check" />
              </div>
            </div>
            <div />
          </div>
          <div className="step step-active">
            <div>
              <div className="circle" />
            </div>
            <div>
              <div className="featureText">
                <h3>Whats so special?</h3>
                <h1>FEATURES</h1>
                <h4 className="firstList">TRADITIONAL GAMES</h4>
                <p>
                  if you miss your childhood, we provide
                  <br />
                  many traditional games here
                </p>
                <h4 className="secondList">GAME SUIT</h4>
                <h4 className="thirdList">TBD</h4>
              </div>
              <div className="garisVertic" />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- FEATURES PAGE END --> */}

      {/* <!-- SISTEM REQUIREMENT --> */}
      <div className="requirements">
        <p className="smallTitle">Can My Computer Run this game?</p>
        <div className="textWrapRequirements">
          <h1>
            SYSTEM
            <br />
            REQUIREMENTS
          </h1>
        </div>
        <div className="sidedTabel">
          <div className="leftTabel">
            <div className="tabel os">
              <table className="opsis">
                <tr>
                  <p>OS:</p>
                  <h6>
                    Windows 7 64-bit only
                    <br />
                    (No OSX support at this time)
                  </h6>
                </tr>
              </table>
            </div>
            <div className="tabel memo">
              <table className="opsis">
                <tr>
                  <p>MEMORY:</p>
                  <h6>4 GB RAM</h6>
                </tr>
              </table>
            </div>
          </div>
          <div className="rightTabel">
            <div className="tabel proc">
              <table className="opsis">
                <tr>
                  <p>PROCESSOR:</p>
                  <h6>
                    Intel Core 2 Duo @ 2.4 GHZ or
                    <br />
                    AMD Athlon X2 @ 2.8 GHZ
                  </h6>
                </tr>
              </table>
            </div>
            <div className="tabel store">
              <table className="opsis">
                <tr>
                  <p>STORAGE:</p>
                  <h6>8 GB available space</h6>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="bottomTabel">
          <div className="graph">
            <table className="opsis">
              <tr>
                <p>GRAPHICS:</p>
                <h6>
                  NVIDIA GeForce GTX 660 2GB or
                  <br />
                  AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)
                </h6>
              </tr>
            </table>
          </div>
        </div>
      </div>
      {/* <!-- SISTEM REQUIREMENT END --> */}

      {/* <!-- TOP SCORES --> */}
      <div className="topScores">
        <div className="scoreLeft">
          <h1>TOP SCORES</h1>
          <p>
            This top score from various games provided
            <br />
            on this platform
          </p>
          <button
            type="button"
            className="btn btn-score btn-warning btn-lg fw-bold seemore"
          >
            See More
          </button>
        </div>
        <div className="scoreRight">
          <div className="comment">
            <div className="tweet evan">
              <img className="photoShadow" src={elipseOrange} alt="" />
              <img className="photo" src={evanPhoto} alt="" />
              <div className="name-row">
                <h3 className="name">Evan Lahti</h3>
                <img className="twitterCard-1" src={twitterCard} alt="" />
              </div>
              <p className="job">PC Gamer</p>
              <p className="commIvan">
                &ldquo;One of my gaming highlights of the year.&rdquo;
              </p>
              <p className="date">October 18, 2018</p>
            </div>
            <div className="tweet jada">
              <img className="photoShadow" src={elipseOrange} alt="" />
              <img className="photo" src={jadaPhoto} alt="" />
              <div className="name-row">
                <h3 className="name">Jada Griffin</h3>
                <img className="twitterCard-1" src={twitterCard} alt="" />
              </div>
              <p className="job">Nerdreactor</p>
              <p className="comm">
                &ldquo;The next big thing in the world of streaming
                <br />
                and survival games.&rdquo;
              </p>
              <p className="date">December 21, 2018</p>
            </div>
            <div className="tweet aaron">
              <img className="photoShadow" src={elipseOrange} alt="" />
              <img className="photo" src={aaronPhoto} alt="" />
              <div className="name-row">
                <h3 className="name">Aaron Williams</h3>
                <img className="twitterCard-2" src={twitterCard} alt="" />
              </div>
              <p className="job">Uproxx</p>
              <p className="comm">
                &ldquo;Snoop Dogg Playing The Wildly Entertaining
                <br />
                SOS Is Ridiculous.&rdquo;
              </p>
              <p className="date">December 24, 2018</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- TOP SCORES END --> */}

      {/* <!-- NEWSLETTER --> */}
      <div className="newsletter">
        <div className="container6">
          <div className="image-newsletter">
            <img src={skull} alt="" />
          </div>
          <div className="text-newsletter">
            <h3>
              Want to stay in
              <br />
              touch?
            </h3>
            <h2>
              newsletter
              <br />
              subscribe
            </h2>
            <p>
              In order to start receiving our news, all you have to do is enter
              your email
              <br />
              address. Everything else will be taken care of by us. We
              will send you emails
              <br />
              containing information about game. We dont spam.
            </p>
            <div className="email-subs">
              <div id="address" className="row g-2">
                <div className="col-10">
                  <div className="form-floating">
                    <label htmlFor="floatingInputGrid">
                      Your email address
                      <input
                        type="email"
                        className="form-control bg-dark"
                        id="floatingInputGrid"
                        placeholder="name@example.com"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="subsekarang">
                <button type="button" className="btn btn-warning fw-bold">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer --> */}
        <div className="footer">
          <div className="footer-up">
            <div className="navigasi mx-3">
              <a className="mx-4 mb-2" href="#main" alt="">
                main
              </a>
              <a className="mx-4 mb-2" href="#about" alt="">
                about
              </a>
              <a className="mx-4 mb-2" href="#features" alt="">
                game features
              </a>
              <a className="mx-4 mb-2" href="#sytem" alt="">
                system requirement
              </a>
              <a className="mx-4 mb-2" href="#quotes" alt="">
                quotes
              </a>
            </div>
            <div className="sosmed mx-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img className="mx-4 mb-2" src={facebook} alt="" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img className="mx-4 mb-2" src={twitter} alt="" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <img className="mx-4 mb-2" src={youtube} alt="" />
              </a>
              <a href="https://twitch.tv" target="_blank" rel="noreferrer">
                <img className="mx-4 mb-2" src={twitch} alt="" />
              </a>
            </div>
          </div>
          <div className="footer-line" />
          <div className="footer-close">
            <p className="left-foot">&copy; 2018 Your games, inc. all rights reserved</p>
            <p className="right-foot">
              privasi policy | terms of services | code of conduct
            </p>
          </div>
        </div>
      </div>
      {/* <!-- NEWSLETTER END --> */}
    </body>
  );
}
