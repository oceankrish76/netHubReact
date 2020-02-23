import React, { Component } from 'react';

import axios from 'axios';

class MarketplaceComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blogs: []
        };
    }
    componentDidMount() {
        axios.get('/blogs')
            .then(({ data }) => this.setState({ blogs: data })) // <-- set state
            .catch(e => console.log(e))
    }
    render() {

        const items = this.state.blogs.map(blogs => (
            <div key={blogs._id}>
                <h1>{blogs.title}</h1>
                <p>{blogs.imageUrl}</p>
                <h1>Cities</h1>
            </div>
        ));
        return (
            <div>
                <form action="/MarketPLace" method="post" enctype="multipart/form-data">
                    <div> <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" /> </div>
                    <div>
                        <label htmlFor="image">Image</label>
                        <input type="file" name="image" id="image" />
                    </div>
                    <button type="submit">Add Blog</button>
                </form>
                <div class="row">
                    <div class="card" style={{ width: '18rem' }}>
                        <h2>{this.state.title}</h2>
                        <img class="card-img-top" src={this.state.imageUrl} alt="Card image cap" />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default MarketplaceComponent