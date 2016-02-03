import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const App = React.createClass({
  getInitialState() {
    return {
      loading: false,
      message: '',
    };
  },

  messageClass(classDisplay) {
    return classDisplay === this.state.message ? '' : 'not-loading ';
  },

  updateMessage() {
    setTimeout(() => {
      this.setState({
        message: '',
      });
    }, 3000);
  },

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      loading: true,
    });
    console.log(this.refs.email.value);
    axios({
      method: 'post',
      url: '/api/email',
      data: {
        email: this.refs.email.value,
      },
    }).then((res) => {
      console.log(res);
      this.setState({
        loading: false,
        message: res.data === 'email already registered' ? 'whatever' : 'success',
      });
      this.refs.email.value = '';
      this.updateMessage();
    }).catch((err) => {
      this.setState({
        message: 'error',
        loading: false,
      });
      this.updateMessage();
    });
  },

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className='input' ref='email' type="email" placeholder='Enter email address'/>
          <input className='input-button' type="submit" value="Sign Up" />
        </form>
        <div className='response'>
          <img className={this.state.loading || 'not-loading'} src="icons/ripple.gif" />
          <p className={this.messageClass('success') + 'res success'}>Succesfully registered</p>
          <p className={this.messageClass('error') + 'res error'}>Something bad happened</p>
          <p className={this.messageClass('whatever') + 'res whatever'}>Already registered</p>
        </div>
      </div>
    );
  },
});

ReactDOM.render(
  <App />,
  document.getElementById('signup-app')
);
