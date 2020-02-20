import React from 'react';
import { Link } from '@reach/router';
import layoutStyles from '../styles/layoutStyles.module.sass';

const Layout = ({ children }) => {
    return (
        <div className={layoutStyles.container}>
            <header>
                <div className="wrapper">
                    <Link to='/'>
                        <img src="./logo_p.png" alt="logo" />
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
                    <Link to='#'>CI</Link>
                    <Link to='#'>Blog</Link>
                    <Link to='#'>Statistics</Link>
                    <Link to='#'>Github</Link>
                    <Link to='#'>Telegram channel</Link>
                </nav>
                <p>Made by ErdVuca</p>
            </footer>
        </div>
    );
}

export default Layout;