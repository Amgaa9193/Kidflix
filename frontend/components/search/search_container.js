import SearchResult from "./search_result";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  // debugger;
  return {
    searchresults: state.searchresult,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {

//   };
// };

export default connect(mapStateToProps)(SearchResult);
