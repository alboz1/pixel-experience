import React from 'react';
import Layout from '../components/Layout';
import TeamMember from '../components/TeamMember';
import teamStyles from '../styles/team.module.sass';

const Team = () => {
    return (
        <Layout>
            <h2 className="page-header">Team</h2>
            <div className={teamStyles.team}>
                <TeamMember />
                <TeamMember />
                <TeamMember />
                <TeamMember />
            </div>
        </Layout>
    );
}

export default Team;