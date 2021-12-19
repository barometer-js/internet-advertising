import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from './Form.module.scss';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox/Checkbox';
import { getFetch } from '../../services/getFormData';

class ApplicationForm extends Component {
  state = {
    name: '',
    surname: '',
    number: '',
    email: '',
    checked: false,
    value: '',
  };

  static propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    number: PropTypes.string,
    email: PropTypes.string,
    checked: PropTypes.bool,
    value: PropTypes.string,
  };

  handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked });

  nameId = nanoid();
  surnameId = nanoid();
  telId = nanoid();
  emailId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleTextareaChange = event => {
    this.setState({ value: event.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(`Signed up as: ${this.state.name}`);
    const newApplication = {
      name: this.state.name,
      phone: this.state.number,
      surname: this.state.surname,
      'e-mail': this.state.email,
      comments: this.state.value,
      createdAt: new Date(),
    };
    console.log(newApplication);
    getFetch(newApplication);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      surname: '',
      number: '',
      email: '',
      checked: false,
      value: 'Your message...',
    });
  };

  render() {
    return (
      <>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <div className={styles.wrapper}>
            <label className={styles.label} htmlFor={this.nameId}>
              <input
                className={styles.input}
                type="text"
                name="name"
                value={this.state.name}
                placeholder="Name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handleChange}
                id={this.nameId}
              />
            </label>

            <label className={styles.label} htmlFor={this.surnameId}>
              <input
                className={styles.input}
                type="text"
                name="surname"
                value={this.state.surname}
                placeholder="Surname"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Surname may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handleChange}
                id={this.surnameId}
              />
            </label>

            <label className={styles.label} htmlFor={this.telId}>
              <input
                className={styles.input}
                type="tel"
                name="number"
                value={this.state.number}
                placeholder="Number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handleChange}
                id={this.telId}
              />
            </label>
          </div>

          <div className={`${styles.wrapper} ${styles.textareaWrapper}`}>
            <label className={styles.label} htmlFor={this.emailId}>
              <input
                className={styles.input}
                type="email"
                name="email"
                value={this.state.email}
                placeholder="Email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                title="Invalid email address"
                required
                onChange={this.handleChange}
                id={this.emailId}
              />
            </label>

            <label>
              <textarea
                className={styles.textarea}
                value={this.state.value}
                onChange={this.handleTextareaChange}
                placeholder="Your message..."
              />
            </label>
          </div>

          <div className={styles.wrapper}>
            <label>
              <Checkbox
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}
              />
              <span className={styles.policy}>
                Нажимая на кнопку, вы соглашаетесь <br /> с нашей политикой
                обработки
              </span>
            </label>

            <button className={styles.button} type="submit">
              Send
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default ApplicationForm;
