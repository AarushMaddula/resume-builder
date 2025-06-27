import { useState } from 'react'

function EducationForm(prop) {

    const [state, setState] = useState(1)

    const handleEducationFormSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target);

        prop.editSchool({
            id: prop.id,
            school: formData.get("user-school"),
            degree: formData.get("user-degree"),
            date: formData.get("user-date"),
            location: formData.get("user-location"),
        })

        setState(0)
    }

    const [school, setSchool] = useState(prop.school)
    const [degree, setDegree] = useState(prop.degree)
    const [date, setDate] = useState(prop.date)
    const [location, setLocation] = useState(prop.location)

    return (
        state === 0 
        ? 
            <button onClick={() => setState(1)}>
                {school || "School Name"}
            </button>
        :
            <form method="post" onSubmit={handleEducationFormSubmit}>
                <h2>Edit School</h2>

                <ul>
                    <li>
                        <label htmlFor="school">School</label>
                        <input type="text" id="school" name="user-school" value={school} onChange={e => setSchool(e.target.value)}/>
                    </li>

                    <li>
                        <label htmlFor="degree">Degree</label>
                        <input type="text" id="degree" name="user-degree" value={degree} onChange={e => setDegree(e.target.value)}/>
                    </li>
                    
                    <li>
                        <label htmlFor="date">Date</label>
                        <input type="text" id="date" name="user-date" value={date} onChange={e => setDate(e.target.value)}/>
                    </li>

                    <li>
                        <label htmlFor="location">Location</label>
                        <input type="text" id="location" name="user-location" value={location} onChange={e => setLocation(e.target.value)}/>
                    </li>

                </ul>

                <div className="buttons">
                    <button onClick={() => prop.deleteSchool(prop.id)}>Delete</button>
                    <button onClick={() => setState(0)}>Cancel</button>
                    <button type='submit'>Save</button>
                </div>
                
            </form>
    )
}

export default EducationForm