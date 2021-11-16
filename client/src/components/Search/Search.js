import './Search.css'

const Search = (props) => {
    return (
        <form className="search-form" onSubmit={(ev) => props.onSubmit(ev)}>
            <input
                className="search-input"
                value={props.value}
                onChange={(ev) => props.handleSearch(ev)}
                name="search"
                placeholder="Search"
                type="text"
                autoFocus
            />
        </form>
    )
}
export default Search