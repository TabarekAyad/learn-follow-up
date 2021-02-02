import React, { Component } from 'react';
import BlogContent from "./BlogContent";
import BlogComment from "./BlogComment";

class BlogPost extends Component {
    render() {
        return (
            <div>
                <BlogContent articleText = {"Dear Reader: Bjarne Stroustrup has the perfect lecture oration."} />
                <BlogComment commentText={"I agree with this statement. - Angela Merkel"}/>
                <BlogComment commentText={"A universal truth. - Noam Chomsky"}/>
                <BlogComment commentText={"Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451"}/>
            </div>
        )
    }
}

export default BlogPost;
