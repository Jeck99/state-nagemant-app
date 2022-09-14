import "./Profile.css";
import styled from "styled-components";
import React from "react";

function Profile() {
  const StyledDiv = styled.div`
    background: white;
    color: black;
  `;
  const StyledH1 = styled.h1`
    color: yellow;
  `;
  return (
    <>
      <button>asd</button>
      <StyledDiv>
        <div className="profile">
          <h1>Profile</h1>
          <StyledH1>Styled H1</StyledH1>
          <StyledH1>Styled H1 2</StyledH1>
        </div>
      </StyledDiv>
    </>
  );
}

export default Profile;
