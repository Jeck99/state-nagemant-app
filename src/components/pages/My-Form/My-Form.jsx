import "./My-Form.css";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addUser } from "../../../store/actions/users-actions";

const mapStateToProps = (state) => {
  return { users: state.users };
};
const mapDispatchToProps = (dispatch) => ({
  addNewUser: (userObj) => dispatch(addUser(userObj)),
});
function MyForm(props) {
  const [user, setUser] = useState({});
  const changeInput = (e) => {
    user[e.target.name] = e.target.value;
  };
  return (
    <div className="my-form">
      <h1>My-Form</h1>
      <label htmlFor="">first name</label>
      <input name="fName" onChange={changeInput} type="text" />
      <label htmlFor="">last name</label>
      <input name="lName" onChange={changeInput} type="text" />
      <label htmlFor="">age</label>
      <input name="age" onChange={changeInput} type="number" />
      <label htmlFor="">email</label>
      <input name="email" onChange={changeInput} type="email" />
      <button onClick={() => props.addNewUser(user)}>add</button>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(MyForm);
