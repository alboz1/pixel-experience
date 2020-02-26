import React from 'react';
import { Link } from '@reach/router';

import Logo from '../assets/logo_p.png';
import layoutStyles from '../styles/layoutStyles.module.sass';

const Layout = ({ children }) => {
    return (
        <div className={`${layoutStyles.container}`}>
            <header className="site-header">
                <div className="wrapper">
                    <Link to='/'>
                        <img src={ Logo } alt="logo" />
                    </Link>
                    <nav>
                        <Link to='/devices'>Devices</Link>
                        <Link to='/team'>Team</Link>
                        <Link to='/about'>About</Link>
                    </nav>
                </div>
                <input type="text" placeholder="Search" />
            </header>

            <main>
                { children }
            </main>
            
            <footer>
                <nav>
                    <Link to='/'>CI</Link>
                    <Link to='/'>Blog</Link>
                    <Link to='/'>Statistics</Link>
                    <Link to='/'>Github</Link>
                    <Link to='/'>Telegram channel</Link>
                </nav>
                <p>Made by ErdVuca</p>
            </footer>

            <nav className="mobile-nav">
                <Link to="/devices">
                    <div>
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>
                        </i>
                        <p>Devices</p>
                    </div>
                </Link>
                <Link to="/team">
                    <div>
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                        </i>
                        <p>Team</p>
                    </div>
                </Link>
                <Link to="/about">
                    <div>
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        </i>
                        <p>About</p>
                    </div>
                </Link>
            </nav>
        </div>
    );
}

export default Layout;