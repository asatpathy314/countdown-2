const Books = ({bookData, displayFiction, displayNonFiction, displayChildren}) => {
    return (
    <div className="column">
        {displayFiction &&
        <div>
            <h2>Fiction</h2>
            {bookData["fiction"].map(book => (
            <div key={book.title}>
                <p><i>{book.title}</i>, {book.author}, ${book.price}</p>
            </div>
            ))}
        </div>
        }
        {displayNonFiction &&
        <div>
            <h2>Non-Fiction</h2>
            {bookData["non-fiction"].map(book => (
            <div key={book.title}>
                <p><i>{book.title}</i>, {book.author}, ${book.price}</p>
            </div>
            ))}
        </div>
        }
        {displayChildren &&
        <div>
            <h2>Children</h2>
            {bookData["children"].map(book => (
            <div key={book.title}>
                <p><i>{book.title}</i>, {book.author}, ${book.price}</p>
            </div>
            ))}
        </div>
        }
    </div>
    )
}

export default Books