const Dropdown = ({handleSelect}) => {
    return (
        <select onClick={handleSelect} name="animals" id="animals">
            <option value="All">All animals</option>
            <option value="Cats">Cats</option>
            <option value="Dogs">Dogs</option>
        </select>
    )
}


export default Dropdown