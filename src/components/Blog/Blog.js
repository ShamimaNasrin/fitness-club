import React from 'react';
import './Bolg.css';

const Blog = () => {
    return (
        <div className='blog-container'>
            <h1>Blog</h1>
            <div className="question">
                <div className="blog-text-container">
                    <h3>How React Work?</h3>
                    <p className="blog-p">
                        Ans: Each time something in the DOM changes. Since DOM is represented as a tree structure, changes to the DOM is pretty quick but the changed element, and it's children's has to go through Reflow/Layout stage and then the changes has to be Re-painted which are slow. <br /> So here comes Virtual DOM, it tries to minimize these two stages, and thereby getting a better performance for a big complex app.
                        <br />So internally react perform the following steps: <br />Compares the previous internal instance with the next internal instance. <br />Updates the internal Instance which is a Component Tree structure in JavaScript Object(Virtual DOM). <br />And updates the actual DOM only at the node where there is an actual change along with it's children.
                    </p>
                </div>

            </div>
            <div className="question">
                <div className="blog-text-container">
                    <h3>Q2: Differences between Props and State</h3>
                    <p className="blog-p">
                        Ans: 1. Props are read only but state changes can be asynchronous. <br />2. Props can not be modified on the other hand state can be modified using this.setState.
                    </p>
                </div>

            </div>
            <div className="question">
                <div className="blog-text-container">
                    <h3>Q3: Usage of useEffect hook except API call</h3>
                    <p className="blog-p">
                        Ans: manipulating DOM directly, using timer functions like setTimeout(), Side Effect Runs After Every Render, Side Effect Runs After State Value Changes, Side Effect Runs After Props Value Change etc.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blog;