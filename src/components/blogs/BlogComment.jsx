import React, { Component } from 'react';

class BlogComment extends Component {
    render() {
        return (
            <div>
                {this.props.commentText}
            </div>
        )
    }
}

export default BlogComment;