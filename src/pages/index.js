import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos'

import PreviewImg from '../images/preview.jpg'

import "aos/dist/aos.css"

const Home = () => {

    const [scrollPosition, setScrollPosition] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])

    const styleMenu = {
        backgroundColor: scrollPosition && scrollPosition.pageY > 188 ? "white" : "",
        boxShadow: scrollPosition && scrollPosition.pageY > 188 ? "0 0 3px #ccc" : ""
    }

    return (
        <div className="home" onWheel={e => setScrollPosition(e)}>
            <div className="home__menu" data-aos="fade-down" style={styleMenu}>
                <Link to='/'>
                    <img src="https://www.befunky.com/images/site/logo-darker.svg" alt="" className="home__menu-logo" />
                </Link>
                <ul className="home__menu-list">
                    <li className="home__menu-item">
                        <Link className="home__menu-link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="home__menu-item">
                        <Link className="home__menu-link" to="/edit">
                            Editor
                        </Link>
                    </li>
                    <li className="home__menu-item">
                        <Link className="home__menu-link" to="/swapface">
                            Face Swaping
                        </Link>
                    </li>
                </ul>
                <button className="home__menu-started">
                    <Link to="/edit">
                        Get Started
                    </Link>
                </button>
            </div>
            <div className="home__desc">
                <div className="home__desc-info" data-aos="fade-right">
                    <div className="home__desc-title"> The Best Online Photo Editor, Ever.</div>
                    <div className="home__desc-main">Anything you want to do to your photo, you can do with BeFunky</div>
                    <button className="home__desc-started">
                        <Link to="/edit" className="home__desc-link" >
                            Get Started
                        </Link>

                    </button>
                </div>
                <img className="home__desc-img" src={PreviewImg} alt="" />
                <svg className="home__desc-svg" viewBox="0 0 1412 940" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><pattern id="hero-svg-c" width="22" height="22" x="47.4" y="518" patternUnits="userSpaceOnUse"><use xlinkHref="#hero-svg-a" transform="scale(.1)"></use></pattern><pattern id="hero-svg-d" width="22" height="22" x="897.8" y="-8.1" patternUnits="userSpaceOnUse"><use xlinkHref="#hero-svg-a" transform="scale(.1)"></use></pattern><image id="hero-svg-a" width="220" height="220" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAADcBAMAAADpdNKyAAAAMFBMVEUAAAA+Mc8/Ms4/M88/Ms4+Ms4/Ms8/Ms4/Mc8/Ms9AMtA/NM5ANM9GNtFNM+Y+Mc5BOS4eAAAAD3RSTlMA+bJN7ObTzL+VZ1k/IQrbwsVwAAABDUlEQVR42u3YTS5EQRTF8cML4qsXIOIxEjEwNrEHIwuwAFuwAekt2AE7YGABBjbSNGJ0RCLd3quBmtwnN/6/HVSq6t57rgAAAAAAAAAAAAAAAAAA+Fuj4/3Ts4MTDWN9z18mhxpCc+Fv54q3OfbMlcI9eG56r2BrrX/YUrAbd1wr1Ebrjm2FenLX9FGRxu65VKDGfS8KtOy+NwW6c+FWcY5c2FWYUevCjsI09pBvZdWlD4VZdOlZYVZceleYJZdeFWbBpYlmkp/u97vL/DIr/l3iqlJTM/N2hMp+l7WbV80qaSexyjkz6xRdmRGyJqDKfJc1vdZm86Sbh/leBQAAAAAAAAAAAAAAAACAf+UTBht88nYZa5oAAAAASUVORK5CYII="></image></defs><g fillRule="nonzero" fill="none"><path fill="url(#hero-svg-c)" d="M69.4 540h416.4v352H69.4z"></path><path fill="url(#hero-svg-d)" d="M919.8 13.9h464v417.6h-464z"></path><path d="M284 662.6C59.6 631.7 29.3 316.2 249.4 262 506 198.8 444.1 32.4 623.3 3.8c179.2-28.6 194.3 142.7 277.6 151.4 83.3 8.7 143-94.3 238.9-38.6 95.9 55.8 15.4 149 171.6 220.8 156.2 71.9 118.4 358.4-32.8 393.7-151.2 35.3-162-66-260.2 50C920.2 897.3 809.4 978 637.6 920s-129-226.6-353.5-257.4z" fill="currentColor"></path><circle fill="currentColor" cx="69.4" cy="716.4" r="69.4"></circle></g></svg>

            </div>
            <ul className="home__info-list">
                <li className="home__info-item" data-aos="fade-up">
                    <img className="home__info-item-img" src="https://www.befunky.com/images/prismic/15c58e21a80fd14a0518b9d0640305eb479379a5_landing-photo-editor-img-2.png?auto=webp&format=jpg&width=1000" alt="" />
                    <div className="home__info-detail">
                        <div className="home__info-title">
                            It's Fun
                        </div>
                        <div className="home__info-main">
                            Fun is literally BeFunky's middle name (no, really! be-FUN-ky) With BeFunky's Photo Editor, you can play with hundreds of amazing photo effects that you can't find anywhere else, like our world-famous Cartoonizer®, oil painting, and Digital Art effects. You can also add extra flair to your photo with our huge library of customizable graphics, frames, overlays, and textures. And if adding text to photos is your thing, our Photo Editor has tons of fonts for you to choose from, including access to Google Fonts and any of the fonts stored on your computer! Taking pictures is fun – shouldn't your photo editor be fun, too?
                        </div>
                    </div>
                </li>
                <li className="home__info-item">
                    <img className="home__info-item-img" data-aos="fade-left" src="https://www.befunky.com/images/prismic/15c58e21a80fd14a0518b9d0640305eb479379a5_landing-photo-editor-img-2.png?auto=webp&format=jpg&width=1000" alt="" />
                    <div className="home__info-detail" data-aos="fade-right">
                        <div className="home__info-title">
                            It's Fun
                        </div>
                        <div className="home__info-main">
                            Fun is literally BeFunky's middle name (no, really! be-FUN-ky) With BeFunky's Photo Editor, you can play with hundreds of amazing photo effects that you can't find anywhere else, like our world-famous Cartoonizer®, oil painting, and Digital Art effects. You can also add extra flair to your photo with our huge library of customizable graphics, frames, overlays, and textures. And if adding text to photos is your thing, our Photo Editor has tons of fonts for you to choose from, including access to Google Fonts and any of the fonts stored on your computer! Taking pictures is fun – shouldn't your photo editor be fun, too?
                        </div>
                    </div>
                </li>
                <li className="home__info-item" data-aos="fade-right">
                    <img className="home__info-item-img" src="https://www.befunky.com/images/prismic/15c58e21a80fd14a0518b9d0640305eb479379a5_landing-photo-editor-img-2.png?auto=webp&format=jpg&width=1000" alt="" />
                    <div className="home__info-detail">
                        <div className="home__info-title">
                            It's Fun
                        </div>
                        <div className="home__info-main">
                            Fun is literally BeFunky's middle name (no, really! be-FUN-ky) With BeFunky's Photo Editor, you can play with hundreds of amazing photo effects that you can't find anywhere else, like our world-famous Cartoonizer®, oil painting, and Digital Art effects. You can also add extra flair to your photo with our huge library of customizable graphics, frames, overlays, and textures. And if adding text to photos is your thing, our Photo Editor has tons of fonts for you to choose from, including access to Google Fonts and any of the fonts stored on your computer! Taking pictures is fun – shouldn't your photo editor be fun, too?
                        </div>
                    </div>
                </li>
                <li className="home__info-item" data-aos="fade-left">
                    <img className="home__info-item-img" src="https://www.befunky.com/images/prismic/15c58e21a80fd14a0518b9d0640305eb479379a5_landing-photo-editor-img-2.png?auto=webp&format=jpg&width=1000" alt="" />
                    <div className="home__info-detail">
                        <div className="home__info-title">
                            It's Fun
                        </div>
                        <div className="home__info-main">
                            Fun is literally BeFunky's middle name (no, really! be-FUN-ky) With BeFunky's Photo Editor, you can play with hundreds of amazing photo effects that you can't find anywhere else, like our world-famous Cartoonizer®, oil painting, and Digital Art effects. You can also add extra flair to your photo with our huge library of customizable graphics, frames, overlays, and textures. And if adding text to photos is your thing, our Photo Editor has tons of fonts for you to choose from, including access to Google Fonts and any of the fonts stored on your computer! Taking pictures is fun – shouldn't your photo editor be fun, too?
                        </div>
                    </div>
                </li>
                <li className="home__info-item" data-aos="flip-up">
                    <img className="home__info-item-img" src="https://www.befunky.com/images/prismic/15c58e21a80fd14a0518b9d0640305eb479379a5_landing-photo-editor-img-2.png?auto=webp&format=jpg&width=1000" alt="" />
                    <div className="home__info-detail">
                        <div className="home__info-title">
                            It's Fun
                        </div>
                        <div className="home__info-main">
                            Fun is literally BeFunky's middle name (no, really! be-FUN-ky) With BeFunky's Photo Editor, you can play with hundreds of amazing photo effects that you can't find anywhere else, like our world-famous Cartoonizer®, oil painting, and Digital Art effects. You can also add extra flair to your photo with our huge library of customizable graphics, frames, overlays, and textures. And if adding text to photos is your thing, our Photo Editor has tons of fonts for you to choose from, including access to Google Fonts and any of the fonts stored on your computer! Taking pictures is fun – shouldn't your photo editor be fun, too?
                        </div>
                    </div>
                </li>
                <li className="home__info-item" data-aos="zoom-in-up">
                    <img className="home__info-item-img" src="https://www.befunky.com/images/prismic/15c58e21a80fd14a0518b9d0640305eb479379a5_landing-photo-editor-img-2.png?auto=webp&format=jpg&width=1000" alt="" />
                    <div className="home__info-detail">
                        <div className="home__info-title">
                            It's Fun
                        </div>
                        <div className="home__info-main">
                            Fun is literally BeFunky's middle name (no, really! be-FUN-ky) With BeFunky's Photo Editor, you can play with hundreds of amazing photo effects that you can't find anywhere else, like our world-famous Cartoonizer®, oil painting, and Digital Art effects. You can also add extra flair to your photo with our huge library of customizable graphics, frames, overlays, and textures. And if adding text to photos is your thing, our Photo Editor has tons of fonts for you to choose from, including access to Google Fonts and any of the fonts stored on your computer! Taking pictures is fun – shouldn't your photo editor be fun, too?
                        </div>
                    </div>
                </li>

            </ul>
            <div className="home__final" data-aos="flip-left" data-aos-easing="ease-out-cubic">
                <div className="home__final-title">
                    BeFunky Photo Editor
                </div>
                <button className="home__final-button">
                    <Link to="/edit" className="home__final-link">
                        Get Started
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default Home;
