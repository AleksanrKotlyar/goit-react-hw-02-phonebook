import { AiOutlineUserDelete } from 'react-icons/ai';

export const ContactList = ({ data, handleOnDelete }) => {
  return (
    <ul>
      {data.map(({ id, name, number }) => (
        <li key={id}>
          {name}: <span>{number}</span>{' '}
          <button type="button" onClick={() => handleOnDelete(id)}>
            <AiOutlineUserDelete />
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
