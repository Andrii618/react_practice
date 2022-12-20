const Search = ({ name }) => (
  <div className="search">
    <h1 className="search__title">{`Hello, ${name}. What to search for you?`}</h1>
    <div className="search__field">
      <input className="search__input" type="text" />
      <button className="search__button" type="button">
        Search
      </button>
    </div>
  </div>
);

export default Search;
