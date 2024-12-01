import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { FaPhoneAlt, FaUser } from 'react-icons/fa';
import { removeContact } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items || []);
  const dispatch = useDispatch();
  // if (!contacts.length) {
  //   return <p>No contacts available</p>; // Повідомлення, якщо список порожній
  // }
  return (
    <div className={s.cotainer}>
      <ul className={s.block}>
        {contacts.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            <Contact
              name={
                <div className={s.i}>
                  <FaUser /> {name}
                </div>
              }
              number={
                <>
                  <FaPhoneAlt /> {number}
                </>
              }
            />
            <button onClick={() => dispatch(removeContact(id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
