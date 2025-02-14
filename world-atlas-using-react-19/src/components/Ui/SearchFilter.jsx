

const SearchFilter = ({search, setSearch, filter, setFilter, countries, setCountries}) => {

  const handlerOnSearchChange = (event) => {
    console.log(event.target.value); // Getting the data here;
    setSearch(event.target.value);
  };

  const handlerOnFilterChange = (event) => {
    console.log(event.target.value); // Getting the data here;
    setFilter(event.target.value);
  };

  const sortAscDscDesh = (e) => {
    console.log("Ascending/Descending");
    const arrangeDeshOrder = [...countries].sort((a, b) => {
      return e === "asc" ? a.name.common.localeCompare(b.name.common) : b.name.common.localeCompare(a.name.common);
    });
    setCountries(arrangeDeshOrder);
  };

  return (
    <section className="section-searchFilter container">
        <input type="text" placeholder="search" value={search} onChange={handlerOnSearchChange}/>

        <div>
          <button onClick={() => sortAscDscDesh("asc")}>Ascen</button>
        </div>

        <div>
          <button onClick={() => sortAscDscDesh("desc")}>Descen</button>
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