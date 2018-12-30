import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/";

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        const {user} = this.props;
        console.log(user);
        
        if(!user) {
            return <div className="header">Loading</div>    
        }

        return <div className="header">{user.name}</div>
    }
}

function mapstateToProps ({users}, ownProps) {
    return {user : users.find(user => user.id === ownProps.userId)}
}

export default connect(mapstateToProps, {fetchUser}) (UserHeader);