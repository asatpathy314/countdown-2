const Options = ({displayFiction, setDisplayFiction, displayNonFiction, setDisplayNonFiction, displayChildren, setDisplayChildren}) => {
    return (
        <div className="card">
        <button onClick={() => setDisplayFiction(!displayFiction)}>
        {displayFiction ? "Hide Fiction" : "Display Fiction"}
        </button>
        <button onClick={() => setDisplayNonFiction(!displayNonFiction)}>
        {displayNonFiction ? "Hide Non-Fiction" : "Display Non-Fiction"}
        </button>
        <button onClick={() => setDisplayChildren(!displayChildren)}>
        {displayChildren ? "Hide Children" : "Display Children"}
        </button>
    </div>
    )
}

export default Options;