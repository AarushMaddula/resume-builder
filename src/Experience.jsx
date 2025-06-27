
function Experience({company, title, description, location, date}) {

    return (
        <>
            <div className="experience-context">
                <div className="location">{location}</div>
                <div className="date">{date}</div>
            </div>

            <div className="experience-details">
                <div className="company">{company}</div>
                <div className="title">{title}</div>
                <div className="description">{description}</div>
            </div>
        </>
    )
}

export default Experience