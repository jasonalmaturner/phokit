import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const App = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.refs.email.value);
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
        <form onSubmit={this.handleSubmit}>
          <input ref='email' type="email"/>
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    );
  },
});

ReactDOM.render(
  <App />,
  document.getElementById('signup-app')
);
