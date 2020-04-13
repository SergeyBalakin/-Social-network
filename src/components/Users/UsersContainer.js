import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unFollowAC, setUsersAC } from "../../redux/users-reducer";
// eslint-disable-next-line no-unused-vars
let mapStateToProps = state => {
  return {
    users: state.usersPage.users
  };
};

let mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId));
    },
    unfollow: userId => {
      dispatch(unFollowAC(userId));
    },
    setUsers: users => {
      dispatch(setUsersAC(users));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
