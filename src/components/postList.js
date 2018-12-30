import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions/";
import UserHeader from "./userHeader";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPost();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle align icon user"></i>
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      )
    });
  }

  render() {
    console.log(this.props.posts);
    return (
      <div className="ui relaxed divided list">
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps({posts}) {
  return {posts}
}

export default connect(
  mapStateToProps,
  { fetchPost }
)(PostList);
