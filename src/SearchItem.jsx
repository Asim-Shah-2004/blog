const SearchItem = ({seach,setSearch}) => {
    return (
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search</label>
            <input
                id="search"
                type="text"
                role="searchbox"
                placeholder="Search Item"
                value={seach}
                onChange={(e)=>{setSearch(e.target.value)}}
            />
        </form>
    );
};

export default SearchItem;
