
const SortCard = () => {
    return (
        <select defaultValue="Pick a Runtime" className="select select-success">
            <option disabled={true}>Select</option>
            <option>Durations</option>
            <option>Calories</option>
            <option>Rating</option>
        </select>
    );
};

export default SortCard;