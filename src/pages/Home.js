import React from 'react';
import { Link } from '@reach/router';
import Layout from '../components/Layout';
import showcase from '../assets/images/showcase.png';
import homeStyles from '../styles/home.module.sass';

const Home = () => {
    return (
        <Layout>
            <div className={ homeStyles.container }>
                <span>
                    <h2>Pixel Experience</h2>
                    <h2>FAST</h2>
                    <h2>RELIABLE</h2>
                    <h2>MINIMAL</h2>
                    <Link to={`${process.env.PUBLIC_URL}/devices`}>
                        <button>Download</button>
                    </Link>
                </span>

                <div>
                    <img src={ showcase } alt="showcase" />
                </div>
            </div>
        </Layout>
    );
}

export default Home;