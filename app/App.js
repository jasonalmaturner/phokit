import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const App = React.createClass({
  handleSubmit() {
    axios({
      method: 'post',
      url: '/api/email',
      data: {
        email: this.refs.email.value,
      },
    }).then((res) => {
      this.refs.email.value = '';
    }).catch((err) => {

    });
  },

  render() {
    return (
      <div>
        <input ref='email' type="email"/>
        <button onClick={this.handleSubmit}>Sign Up</button>
      </div>
    );
  },
});

ReactDOM.render(
  <App />,
  document.getElementById('signup-app')
);
