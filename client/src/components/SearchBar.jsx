const SearchBar = () => {
    return (
        <div className="">
            <form action="/search" method="get">
                <input type="text" name="query" placeholder="Search for a token" className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchBar;