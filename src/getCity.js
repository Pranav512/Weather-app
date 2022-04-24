const GetCity = () => {
    return (
        <form id="getCity">
            <h2>CITY WEATHER</h2>
            <div>
                <label htmlFor="search_city"> </label>
                <input type="search" id="search_city" name="search_city" placeholder="London" />
                <button type="button" id="search" className="search-btn">search</button>
            </div>
            <button type="button" id="findLocation">Find my location</button>
        </form>
    )
}

export default GetCity;