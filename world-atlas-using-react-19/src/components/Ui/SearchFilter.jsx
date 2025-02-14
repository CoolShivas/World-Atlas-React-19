

const SearchFilter = ({search, setSearch, filter, setFilter}) => {

  const handlerOnSearchChange = (event) => {
    console.log(event.target.value); // Getting the data here;
    setSearch(event.target.value);
  };

  const handlerOnFilterChange = (event) => {
    console.log(event.target.value); // Getting the data here;
    setFilter(event.target.value);
  };

  const sortAscDscDesh = () => {
    console.log("Ascending/Descending");
  };

  return (
    <section className="section-searchFilter container">
        <input type="text" placeholder="search" value={search} onChange={handlerOnSearchChange}/>

        <div>
          <button onClick={sortAscDscDesh}>Ascen</button>
        </div>

        <div>
          <button onClick={sortAscDscDesh}>Descen</button>
        </div>

        <div>
            <select className="select-section" value={filter} onChange={handlerOnFilterChange}>
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    </section>
  )
}

export default SearchFilter;