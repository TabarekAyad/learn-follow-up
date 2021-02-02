import React, { Component } from 'react'

class BlogContent extends Component {
    render() {
        return (
            <div>
                {this.props.articleText}
            </div>
        )
    }
}

export default BlogContent;
