import React, {useEffect} from 'react';

//Imported images ===============>
import italy from '../../assets/italy.png'
import traveler1 from '../../assets/user1italy.png'

// Import AOS
import aos from 'aos'
import 'aos/dist/aos.css'

// Mapping all users
const travelers = [
    {
        id: 1,
        destinationImage: italy,
        travlerImage: traveler1,
        travelerName: 'JjuTravel',
        socialLink: '@jjutravel10'
    },
    {
        id: 2,
        destinationImage: italy,
        travlerImage: traveler1,
        travelerName: 'JjuTravel',
        socialLink: '@jjutravel10'
    },
    {
        id: 3,
        destinationImage: italy,
        travlerImage: traveler1,
        travelerName: 'JjuTravel',
        socialLink: '@jjutravel10'
    },
    {
        id: 4,
        destinationImage: italy,
        travlerImage: traveler1,
        travelerName: 'JjuTravel',
        socialLink: '@jjutravel10'
    },
    
]

const Travelers = () => {
    // UseEffect to set animation duration
    useEffect(() => {
        aos.init({duration: 2000})
    }, [])

    return (
        <div className="travelers container section">
            <div data-aos='fade-down' data-aos-duration='2500' className="sectionContainer">
                <h2>
                    Top travelers of this month!
                </h2>
                
                <div className="travelersContainer grid">

                    {
                        travelers.map(({id, destinationImage, travlerImage, travelerName, socialLink})=> {
                            return(
                                <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">
                                    <img src={destinationImage} className='destinationImage' alt='destination'/>

                                    <div className="travelerDetails">
                                        <div className="travelerPicture">
                                            <img src={travlerImage} className="travelerImage" alt='traveler'/>
                                        </div>
                                        <div className="travelerName">
                                            <span>{travelerName}</span>
                                            <p>{socialLink}</p>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </div>
    );
}

export default Travelers;