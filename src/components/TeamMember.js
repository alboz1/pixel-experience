import React from 'react';
import teamMemberStyles from '../styles/teamMember.module.sass';

const TeamMember = () => {
    return (
        <div className={teamMemberStyles.teamMember}>
            <p className="name">Member Name</p>
            <a href="#">XDA Profile</a>
            <div className="team-member-devices">
                <span>Xiaomi Poco F1</span>
                <span>Xiaomi Redmi Note 5 Pro</span>
                <span>Redmi K20 Pro</span>
            </div>
        </div>
    );
}

export default TeamMember;