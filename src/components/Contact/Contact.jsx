import s from './Contact.module.css';
import { FaPhoneAlt, FaUser } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      name=
      {
        <div className={s.i}>
          <FaUser /> {name}
        </div>
      }
      number=
      {
        <>
          <FaPhoneAlt /> {number}
        </>
      }
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};

export default Contact;

/* <span>{name}</span>
      <span>{number}</span> */
// ({ id, name, number }) => (
//   <li className={s.item} key={id}>
//     <Contact
//       name={
//         <div className={s.i}>
//           <FaUser /> {name}
//         </div>
//       }
//       number={
//         <>
//           <FaPhoneAlt /> {number}
//         </>
//       }
//     />
//     <button /*onClick={() => dispatch(deleteContact(id))}*/>
//       Delete
//     </button>
//   </li>
// )
