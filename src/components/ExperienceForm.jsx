import { useState } from 'react'

function ExperienceForm(prop) {

    const [state, setState] = useState(1)

    const handleExperienceFormSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target);

        prop.editExperience({
            id: prop.id,
            company: formData.get("user-company"),
            title: formData.get("user-title"),
            date: formData.get("user-date"),
            location: formData.get("user-location"),
            description: formData.get("user-description")
        })

        setState(0)
    }

    const [company, setCompany] = useState(prop.company)
    const [title, setTitle] = useState(prop.title)
    const [date, setDate] = useState(prop.date)
    const [location, setLocation] = useState(prop.location)
    const [description, setDescription] = useState(prop.description)

    return (
        state === 0 
        ? 
            <button onClick={() => setState(1)}>
                {company || "Company Name"}
            </button>
        :
            <form method="post" onSubmit={handleExperienceFormSubmit}>
                <h2>Edit Experience</h2>

                <ul>
                    <li>
                        <label htmlFor="company">Company</label>
                        <input type="text" id="company" name="user-company" value={company} onChange={e => setCompany(e.target.value)}/>
                    </li>

                    <li>
                        <label htmlFor="title">Position Title</label>
                        <input type="text" id="title" name="user-title" value={title} onChange={e => setTitle(e.target.value)}/>
                    </li>
                    
                    <li>
                        <label htmlFor="date">Date</label>
                        <input type="text" id="date" name="user-date" value={date} onChange={e => setDate(e.target.value)}/>
                    </li>

                    <li>
                        <label htmlFor="location">Location</label>
                        <input type="text" id="location" name="user-location" value={location} onChange={e => setLocation(e.target.value)}/>
                    </li>

                    <li>
                        <label htmlFor="description">Description</label>
                        <input type="text" id="description" name="user-description" value={description} onChange={e => setDescription(e.target.value)}/>
                    </li>
                </ul>

                <div className="buttons">
                    <button onClick={() => prop.deleteExperience(prop.id)}>Delete</button>
                    <button onClick={() => setState(0)}>Cancel</button>
                    <button type='submit'>Save</button>
                </div>
                
            </form>
    )
}

export default ExperienceForm