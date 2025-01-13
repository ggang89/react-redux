import {connect} from "react-redux";
import { actionCreators } from "./todoSore";

// type Todo = {
//   id: string;
//   todoTitle: string;
// };

const ToDo = ({ todoTitle, onBtnClick }) => {
  return (
    <li>
      {todoTitle}
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteTodo(ownProps.id))
  }
}
export default connect(null,mapDispatchToProps)(ToDo);
