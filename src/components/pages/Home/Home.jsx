import "./Home.css";
import { connect } from "react-redux";
import AddForm from "../../features/Add-Form/Add-Form";
import UpdateForm from "../../features/Update-Form";
const mapStateToProps = (state) => {
  return { users: state.usersReducer };
};

function Home({ users }) {
  console.log(users);
  const someUser = {};
  return (
    <div className="home">
      <h1>Home</h1>
      <AddForm />
      <UpdateForm user={someUser} />
    </div>
  );
}
export default connect(mapStateToProps)(Home);
