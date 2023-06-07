const SearchBar = () => {
    return (
      <div className="flex justify-center">
        <form action="/search" method="get" className="w-3/4 sm:w-1/2 lg:w-1/3">
          <input type="text" name="query" placeholder="Enter Serial Number" className="border-2 border-gray-300 bg-white w-full h-10 px-5 pr-16 rounded-full text-sm focus:outline-none" />
        </form>
        <button type="submit"  className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">Search</button>
      </div>
    );
  }
  
export default SearchBar;

  