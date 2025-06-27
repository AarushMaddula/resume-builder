
function School({school, degree, location, date}) {

    return (
        <div className="school">
            <div className="school-context">
                <div className="location">{location}</div>
                <div className="date">{date}</div>
            </div>

            <div className="school-details">
                <div className="school-name">{school}</div>
                <div className="degree">{degree}</div>
            </div>
        </div>
    )
}

export default School