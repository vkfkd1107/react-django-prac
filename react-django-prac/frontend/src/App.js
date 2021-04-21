import React, {Component} from 'react';
import Item from './item';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

class App extends Component {
  state = {
    value : "",
    textList: []
  };
  componentDidMount() {
    this.renderText();
  }
  render() {    
    const {textList} = this.state;
    console.log(textList);
    return (      
      <div className="App">
        
        <h1>--Add--</h1>
        <div>
          <label>
            Text:
            <input 
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <button onClick ={this.handleSubmit}>Submit</button>
        </div>

        <h1>--List--</h1>
        {textList.map((text, index) => {
          return (
            <Item 
              title = {text.title}
              content = {text.content}
              key = {index}
              id = {text.id}
              handleClick = {this.deleteText}
            />
          );
        })}
      </div>
    );
  }

  handleChange = event => {
    this.setState({value: event.target.value});
  };

  handleSubmit = () => {
    const {value} =this.state;
    axios
      .post("/post", {text: value})
      .then(res => this.renderText());
  };

  renderText = () => {
    axios
      .get("/post")
      .then(res => this.setState({textList: res.data}))
      .catch(err => console.log(err))
  };
  deleteText = id => {
    axios.delete(`/post/${id}`).then(res => this.renderText());
  };
}

export default App;