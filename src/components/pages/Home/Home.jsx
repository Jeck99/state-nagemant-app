import "./Home.css";
import React from "react";
const mapStateToProps = (state) => {
  return { ...state, user: state.user };
};
function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
    </div>
  );
}

export default Home;
