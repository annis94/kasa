import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <div className="container header__nav">
          <Link to="/" aria-label="Accueil">
            <svg
              width="150" height="50" // Ajuste la taille selon tes besoins
              viewBox="0 0 211 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="header__logo"
            >
              <path d="M20.0745 34.6485L8.84014 46.1362V62.2561H0V0H8.84014V34.8338L42.359 0H52.4883L26.1521 27.9782L54.33 62.2561H44.0165L20.0745 34.6485Z" fill="#FF6060"/>
              <path d="M118.789 57.2535L122.289 50.5832C126.34 53.3625 132.602 55.4006 138.68 55.4006C146.599 55.4006 149.73 52.9919 149.73 48.9156C149.73 38.3543 120.078 47.4333 120.078 28.7194C120.078 20.1963 127.629 14.6377 139.6 14.6377C145.678 14.6377 152.676 16.3053 156.728 18.8993L153.045 25.5696C148.809 22.7903 144.205 21.8639 139.6 21.8639C132.234 21.8639 128.55 24.6431 128.55 28.3489C128.55 39.466 158.202 30.387 158.202 48.7303C158.202 57.2535 150.466 62.6268 137.943 62.6268C130.392 62.8121 122.657 60.4034 118.789 57.2535Z" fill="#FF6060"/>
              <path d="M210.322 33.7221V62.2562H202.218V55.9565C199.456 60.2181 194.115 62.6268 186.748 62.6268C176.066 62.6268 169.436 56.8829 169.436 48.7303C169.436 41.1336 174.224 35.0191 188.221 35.0191H201.666V33.3516C201.666 26.1254 197.43 22.0491 189.142 22.0491C183.617 22.0491 177.908 24.0873 174.224 27.0518L170.725 20.5668C175.514 16.6758 182.512 14.4524 190.063 14.4524C203.139 14.6377 210.322 20.9374 210.322 33.7221ZM201.85 47.8039V41.1336H188.774C180.302 41.1336 177.908 44.4687 177.908 48.3597C177.908 52.9919 181.775 55.9565 188.221 55.9565C194.667 56.1418 199.824 53.3625 201.85 47.8039Z" fill="#FF6060"/>
              <path d="M91.5323 49.842V62.4415L96.8732 59.2916V46.6921L91.5323 49.842Z" fill="#FF6060"/>
              <path d="M106.266 34.4633L84.3497 21.6786L72.1945 14.6377L60.2234 35.575L60.4076 55.2153L82.1396 68.0001L84.3497 66.7031V48.1745L94.1106 30.9429L104.056 36.6867V55.2153L106.266 53.9184V34.4633Z" fill="#FF6060"/>
            </svg>
          </Link>
          <nav>
            <ul className="header__menu">
              <li>
                <NavLink to="/">Accueil</NavLink>
              </li>
              <li>
                <NavLink to="/about">A Propos</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main container">
        {children}
      </main>

      <footer className="footer">
  <div className="container">
    <svg
      width="122"
      height="40"
      viewBox="0 0 122 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="footer__logo"
    >
      <path d="M11.6445 20.0984L5.12785 26.762V36.1125H0V0H5.12785V20.2058L24.5709 0H30.4466L15.1699 16.2292L31.5149 36.1125H25.5324L11.6445 20.0984Z" fill="white"/>
      <path d="M68.9054 33.2106L70.9352 29.3414C73.2855 30.9536 76.9177 32.1358 80.4431 32.1358C85.0368 32.1358 86.8529 30.7386 86.8529 28.3741C86.8529 22.2479 69.6532 27.5143 69.6532 16.659C69.6532 11.7151 74.0333 8.49072 80.9772 8.49072C84.5026 8.49072 88.5622 9.45802 90.9124 10.9627L88.7758 14.8319C86.3187 13.2197 83.648 12.6824 80.9772 12.6824C76.704 12.6824 74.5674 14.2945 74.5674 16.4441C74.5674 22.8928 91.7671 17.6263 91.7671 28.2666C91.7671 33.2106 87.2802 36.3275 80.0158 36.3275C75.6357 36.435 71.1489 35.0377 68.9054 33.2106Z" fill="white"/>
      <path d="M122 19.5608V36.1123H117.299V32.4581C115.697 34.9301 112.599 36.3273 108.326 36.3273C102.13 36.3273 98.2837 32.9955 98.2837 28.2665C98.2837 23.8599 101.061 20.3131 109.18 20.3131H116.979V19.3458C116.979 15.1542 114.522 12.7896 109.715 12.7896C106.51 12.7896 103.198 13.9719 101.061 15.6915L99.0315 11.9298C101.809 9.67279 105.869 8.38306 110.249 8.38306C117.834 8.49053 122 12.1448 122 19.5608ZM117.086 27.7291V23.8599H109.501C104.587 23.8599 103.198 25.7945 103.198 28.0515C103.198 30.7384 105.441 32.4581 109.18 32.4581C112.919 32.5656 115.911 30.9534 117.086 27.7291Z" fill="white"/>
      <path d="M53.0946 28.9116V36.2201L56.1927 34.393V27.0845L53.0946 28.9116Z" fill="white"/>
      <path d="M61.641 19.9909L48.9282 12.5749L41.8774 8.49072L34.9335 20.6357L35.0403 32.0284L47.6462 39.4443L48.9282 38.692V27.9442L54.5902 17.9488L60.359 21.2806V32.0284L61.641 31.276V19.9909Z" fill="white"/>
    </svg>
    <p>© 2025 Kasa. All rights reserved</p>
  </div>
</footer>

    </div>
  );
};

export default Layout;
