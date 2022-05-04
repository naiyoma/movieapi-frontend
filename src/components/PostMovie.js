import React, {Component} from "react"
import axios from "axios"

class PostMovie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: "",
            title: "",
            genre: "",
            popularity: "",
            poster:"",
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://monamovieapi.herokuapp.com/movie/', this.state)
        .then(response => {
            console.log(response)
        })
    }

    render() {
        const {type,title, genre, popularity, poster} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>type</label>
                        <input
                        type="text"
                        name="type"
                        value={type}
                        onChange={this.handleChange}
                        ></input>
                    </div>
                    <div>
                        <label>title</label>
                        <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={this.handleChange}
                        ></input>
                    </div>
                    <div>
                        <label>genre</label>
                        <input
                        type="text"
                        name="genre"
                        value={genre}
                        onChange={this.handleChange}
                        ></input>
                    </div>
                    <div>
                        <label>popularity</label>
                        <input
                        type="text"
                        name="popularity"
                        value={popularity}
                        onChange={this.handleChange}
                        ></input>
                    </div>
                    <div>
                        <label>poster</label>
                        <input
                        type="file"
                        name="poster"
                        value={poster}
                        onChange={this.handleChange}
                        ></input>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default PostMovie