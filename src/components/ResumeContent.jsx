import '../styles/ResumeContent.css'

import Experience from './Experience'
import School from './School'

function ResumeContent({personalDetails, experiences, schools}) {

    return (
        <>
            <div className="personal-details-section">
                <div className='fullname'>{personalDetails.fullname}</div>
                
                <div className='personal-details'>
                    <div className="email">{personalDetails.email}</div>
                    <div className="phone-number">{personalDetails.phone}</div>
                    <div className="address">{personalDetails.address}</div>
                </div>
            </div>

            {
                experiences.length > 0 && (
                    <div className='experience-section'>

                        <h2>Experiences</h2>

                        <div className="experiences">

                            {experiences.map((experience) => {   
                                return (
                                    <div className="experience" key={experience.id}>
                                        <Experience
                                            company={experience.company}
                                            title={experience.title}
                                            description={experience.description}
                                            location={experience.location}
                                            date={experience.date}
                                        />
                                    </div> 
                                )
                            })}
                            
                        </div>
                    </div>
                )
            }

            {
                schools.length > 0 && (
                    <div className='education-section'>

                        <h2>Education</h2>

                        <div className="schools">

                            {schools.map((s) => {   
                                return (
                                    <div className="school" key={s.id}>
                                        <School
                                            school={s.school}
                                            degree={s.degree}
                                            location={s.location}
                                            date={s.date}
                                        />
                                    </div> 
                                )
                            })}

                        </div>
                    </div>
                )
            }

        </>
    )
}
 
export default ResumeContent