

const SearchBar = () => {
    return (
        <div>
            <form action="/search" method="get">
                <div class="search-container">
                    <input type="text" name="serialNumber" placeholder="Enter Serial Number"></input>
                    <button className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]" type="submit">Search</button>
                </div>
            </form>
        </div>
      
    );
}

export default SearchBar;