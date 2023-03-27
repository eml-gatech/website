import React from "react";
import styled from "styled-components";

const TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem 2rem;
  max-width: 250px;

  img {
    border-radius: 50%;
    margin-top: 0rem;
    object-fit: cover;
    object-position: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  p {
    font-size: 1.2rem;
    color: #666;
    margin: 0;
    text-align: center;
  }

  @media (min-width: 768px) {
    flex-basis: calc(33.33% - 2rem);
  }

  @media (min-width: 1024px) {
    flex-basis: calc(25% - 2rem);
  }

  .circle {
    border-radius: 50%;
    height: 150px;
    width: 150px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
   }
`;

const TeamMembers = ({team}) => {
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {team.map((member) => (
          <TeamMember key={member.id}>
            <a href={`${member.link}`}>
            <div className="circle">
                <img src={member.photoUrl} alt={member.name} />
            </div>
            <h2>{member.name}</h2>
            <p>{member.designation}</p>
            </a>
          </TeamMember>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
