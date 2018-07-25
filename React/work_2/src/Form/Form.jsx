import React, {Component} from 'react';
import styles from './Form.css';

/* const input = {
  padding: '10px',
  border: '2px solid rgb(48, 104, 188)',
  width: '165px',
  marginRight: '5px',
  // lastChild: {
  //   marginRight: '0',
  // }
}; */

/* const btn = {
  padding: '10px',
  fontSize: '16px',
  margin: '10px 0 10px 10px',
  backgroundColor: '#0066FF',
  color: '#FFF',
  border: '2px solid #0066FF',
}; */

class Form extends Component {

  state = {
    login: '',
    password: '',
  };

  send = (e) => {
    e.preventDefault();
    console.log('test');

  };

  changeLoginInput = (e) => {
    const value = e.target.value;
    this.setState({
      login: value,
    })
  };

  changePasswordInput = (e) => {
    const value = e.target.value;
    this.setState({
      password: value,
    })
  };

  changeInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    })
  };

  render() {
    return (
      <form onSubmit={this.send}>
        <input type="text"
               name='login'
               placeholder='Your loggin'
               value={this.state.login}
               onChange={this.changeLoginInput}
               className={styles.input}/>

        <input type="password"
               name='password'
               placeholder='Password'
               value={this.state.password}
               onChange={this.changePasswordInput}
               className={styles.input}/>

        <button type='submit'
                className={styles.btn}>
          Send
        </button>
      </form>
    )
  }
}

export default Form;
