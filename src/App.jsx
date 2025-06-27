import { useState } from 'react'
import './App.css'
import './form.css'

import ResumeContent from './ResumeContent'
import ExperienceForm from './ExperienceForm'
import EducationForm from './EducationForm'

function App() {

  const [experiences, setExperiences] = useState([])
  const [schools, setSchools] = useState([])
  const [personalDetails, setPersonalDetails] = useState({})

  const handlePersonalDetailSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    setPersonalDetails({
        fullname: formData.get("user-fullname"),
        email: formData.get("user-email"),
        phone: formData.get("user-phone"),
        address: formData.get("user-address")
    })
  }

  const addExperience = () => {
    setExperiences([...experiences, {id: crypto.randomUUID()}])
  }

  const editExperience = ({id, company, title, description, location, date}) => {

    const updatedExperiences = experiences.map((exp) =>
      exp.id === id
        ? {
            ...exp,
            company,
            title,
            description,
            location,
            date,
          }
        : exp
    );  
    
    setExperiences(updatedExperiences);
  }

  const deleteExperience = (id) => {
    const modifiedExperiences = experiences.filter((experience) => {
      return experience.id !== id;
    })

    setExperiences(modifiedExperiences)
  }

  const addSchool = () => {
    setSchools([...schools, {id: crypto.randomUUID()}])
  }

  const editSchool = ({id, school, degree, location, date}) => {

    const updatedSchools = schools.map((s) =>
      s.id === id
        ? {
            ...s,
            school,
            degree,
            location,
            date,
          }
        : s
    );  
    
    setSchools(updatedSchools);
  }

  const deleteSchool = (id) => {
    const modifiedSchools = schools.filter((s) => {
      return s.id !== id;
    })

    setSchools(modifiedSchools)
  }

  return (
    <>     
      <div className='sidebar'>  
        
        <div className="header">
        
          <img src="public/resumeicon.png" alt="resume icon"/>
          <h1>Resume Builder</h1>

        </div>

        <div className='personal-details-form-section'>
          <form method="post" onSubmit={handlePersonalDetailSubmit}>
              <h2>Personal Details</h2>

              <ul>
                  <li>
                      <label htmlFor="fullname">Full Name</label>
                      <input type="text" id="fullname" name="user-fullname"/>
                  </li>

                  <li>
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" name="user-email"/>
                  </li>
                  
                  <li>
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" name="user-phone"/>
                  </li>
                  
                  <li>
                      <label htmlFor="address">Address</label>
                      <input type="text" id="address" name="user-address"/>
                  </li>

              </ul>
              
              <div className="buttons">
                  <button type="submit">Save</button>
              </div>

          </form>
        </div>

        <div className='experience-form-section'>
          <h2>Experiences</h2>

          <ul className='experience-list'>
            {
              experiences.map((item) => {
                
                return (
                  <li key={item.id}>
                    <ExperienceForm
                      id={item.id}
                      company={item.company}
                      role={item.role}
                      description={item.description}
                      location={item.description}
                      date={item.date}
                      editExperience={editExperience}
                      deleteExperience={deleteExperience}
                    />
                  </li>
                )
              })
            }

            
          </ul>
          
          <div className='buttons'>
            <button onClick={addExperience}>Add Experience</button>
          </div>
        </div>

        <div className='education-form-section'>
          <h2>Education</h2>

          <ul className='education-list'>
            {
              schools.map((item) => {
                
                return (
                  <li key={item.id}>
                    <EducationForm
                      id={item.id}
                      school={item.school}
                      degree={item.degree}
                      location={item.location}
                      date={item.date}
                      editSchool={editSchool}
                      deleteSchool={deleteSchool}
                    />
                  </li>
                )
              })
            }

            
          </ul>

          <div className='buttons'>
            <button onClick={addSchool}>Add School</button>
          </div>
        </div>
        
      </div>
        
      <div className='resume-content'>
        <ResumeContent
          personalDetails={personalDetails}
          experiences={experiences}
          schools={schools}
        />
      </div>
    </>
  )
}

export default App
