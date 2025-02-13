

const SearchFilter = () => {
  return (
    <section className="section-searchFilter container">
        <input type="text" placeholder="search"/>
        <div>
            <select className="select-section">
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