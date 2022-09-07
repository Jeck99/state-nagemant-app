import "./Home.css";
import { connect } from "react-redux";
import {createUserAction} from "../../../store/actions/user-actions"
const mapStateToProps = (state) => {
  return {user: state.user };
};
const mapDispatchToProps =(dispatch)=>({
  createUser : (newUser)=> dispatch(createUserAction(newUser))
})
function Home(props) {
  const changeUser = ()=>{
    props.createUser({user:{fName:"Jacob"}})
  }
  return (
    <div className="home">
      <h1>Home</h1>
      <p>{props.user.fName}</p>
      <button onClick={changeUser}>change</button>
    </div>
  );
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);