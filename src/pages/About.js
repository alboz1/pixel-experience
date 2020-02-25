import React from 'react';
import Layout from '../components/Layout';

import aboutStyles from '../styles/about.module.sass';

const About = () => {
    return (
        <Layout>
            <h2 className="page-header">About</h2>
            <div className={aboutStyles.aboutContainer}>
                <header className="about-header">
                    <p className="hero">Pixel Experience, an AOSP based ROM</p>
                    <p className="sub-hero">It includes Google apps and all Pixel goodies <br/> (launcher, wallpapers, icons, fonts, bootanimation)</p>
                    <p>Our mission is to offer the maximum possible stability and security,<br/> along with essential and useful features for the proper functioning of the device</p>
                </header>

                <section className="donate-section">
                    <p>Did you like the project? Show your support by donating</p>
                    <button>Donate using PayPal</button>
                </section>
            </div>
        </Layout>
    );
}

export default About;