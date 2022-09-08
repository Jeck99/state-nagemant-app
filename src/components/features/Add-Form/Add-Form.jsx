import "./Add-Form.css";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addUser } from "../../../store/actions/users-actions";

const mapDispatchToProps = (dispatch) => ({
  addNewUser: (userObj) => dispatch(addUser(userObj)),
});
function AddForm({ addNewUser }) {
  const [newUser,setNewUser] = useState({})
  const [toggle, setToggle] = useState(false);
  const changeInput = (e) => {
    newUser[e.target.name] = e.target.value;
  };
  return (
    <>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "X" : "add new user"}{" "}
      </button>
      <div className={toggle ? "show" : "hide"}>
        <div className="my-form">
          <label htmlFor="">first name</label>
          <input
            name="fName"
            onChange={changeInput}
            type="text"
          />
          <label htmlFor="">last name</label>
          <input
            name="lName"
            onChange={changeInput}
            type="text"
          />
          <label htmlFor="">age</label>
          <input
            name="age"
            onChange={changeInput}
            type="number"
          />
          <label htmlFor="">email</label>
          <input
            name="email"
            onChange={changeInput}
            type="email"
          />
          <button onClick={() => addNewUser(newUser)}>add</button>
        </div>
      </div>
    </>
  );
}
export default connect(null, mapDispatchToProps)(AddForm);
