import "./Home.css";
import {Counter} from '../'
import NumberInput from "../../featurs/NumberInput/NumberInput";
function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      <Counter/>
      <NumberInput/>
    </div>
  );
};

export default Home;
