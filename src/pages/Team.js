import React from 'react';
import TeamMember from '../components/TeamMember';
import teamStyles from '../styles/team.module.sass';

const Team = () => {
    return (
        <>
            <h2 className="page-header">Team</h2>
            <div className={teamStyles.team}>
                <TeamMember />
                <TeamMember />
                <TeamMember />
                <TeamMember />
            </div>
        </>
    );
}

export default Team;