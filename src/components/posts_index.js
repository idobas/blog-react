import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router';

class PostsIndex extends Component {
  componentWillMount() {
    // will be called on the first time this component is rendered
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="posts/new" className="btn btn-primary" >
            Add a post
          </Link>
        </div>
        List of blog posts
      </div>
    );
  }
}

// we dont need this since we used the object definition in connect
/*function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPosts}, dispatch);
}
*/
export default connect(null, {fetchPosts})(PostsIndex);
