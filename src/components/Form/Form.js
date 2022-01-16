import { useState } from 'react';

import styles from './Form.module.scss';
// import PropTypes from 'prop-types';
import Checkbox from '../Checkbox/Checkbox';
import { getFetch } from '../../services/getFormData';
import { useDispatch } from 'react-redux';
import formActions from '../../redux/ApplicationForm/form-actions';

export default function ApplicationForm() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const handleCheckboxChange = event => setChecked(event.target.checked);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    console.log(name);
    // setName({ [name]: value });
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'surname':
        setSurname(value);
        break;

      case 'number':
        setNumber(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'message':
        setValue(value);
        break;

      case 'checked':
        setChecked(value);
        break;

      default:
        break;
    }
  };

  const handleTextareaChange = event => {
    setValue(event.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`Signed up as: ${name}`);
    const newApplication = {
      name,
      phone: number,
      surname,
      'e-mail': email,
      comments: value,
      // createdAt: new Date(),
    };

    console.log(newApplication);
    getFetch(newApplication);
    dispatch(formActions.addForm(newApplication));

    reset();
  };

  const reset = () => {
    setName('');
    setSurname('');
    setNumber('');
    setEmail('');
    setValue('Your message...');
    setChecked(false);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.wrapper}>
          <label className={styles.label}>
            <input
              className={styles.input}
              type="text"
              name="name"
              value={name}
              placeholder="Name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChange}
            />
          </label>

          <label className={styles.label}>
            <input
              className={styles.input}
              type="text"
              name="surname"
              value={surname}
              placeholder="Surname"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Surname may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChange}
            />
          </label>

          <label className={styles.label}>
            <input
              className={styles.input}
              type="tel"
              name="number"
              value={number}
              placeholder="Number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleChange}
            />
          </label>
        </div>

        <div className={`${styles.wrapper} ${styles.textareaWrapper}`}>
          <label className={styles.label}>
            <input
              className={styles.input}
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              title="Invalid email address"
              required
              onChange={handleChange}
            />
          </label>

          <label>
            <textarea
              className={styles.textarea}
              name="message"
              value={value}
              onChange={handleTextareaChange}
              placeholder="Your message..."
            />
          </label>
        </div>

        <div className={styles.wrapper}>
          <label>
            <Checkbox checked={checked} onChange={handleCheckboxChange} />
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
