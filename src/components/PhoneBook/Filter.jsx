export const Filter = ({ handleFilterOnInputChange, value }) => {
  const handleOnInputChange = e => {
    handleFilterOnInputChange(e.target.value);
  };

  return (
    <>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={value}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleOnInputChange}
        />
      </label>
    </>
  );
};
