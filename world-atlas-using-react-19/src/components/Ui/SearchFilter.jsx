

const SearchFilter = ({search, setSearch, filter, setFilter}) => {

  const handlerOnSearchChange = (event) => {
    console.log(event.target.value); // Getting the data here;
    setSearch(event.target.value);
  };

  const handlerOnFilterChange = (event) => {
    console.log(event.target.value); // Getting the data here;
    setFilter(event.target.value);
  };

  return (
    <section className="section-searchFilter container">
        <input type="text" placeholder="search" value={search} onChange={handlerOnSearchChange}/>
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