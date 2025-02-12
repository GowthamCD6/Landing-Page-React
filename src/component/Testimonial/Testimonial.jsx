import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.jpg'
import back_icon from '../../assets/back-icon.jpg'
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import user3 from '../../assets/user3.jpg'
import user4 from '../../assets/user4.jpg'



const Testimonial = () => {

    const slider1 = useRef();
    let tx = 0;

const slideForward = ()=> {
    if(tx > -50){
        tx -= 25;
    }
    slider1.current.style.transform = `translateX(${tx}%)`;
}

const slideBackward = ()=> {
    if(tx < 0){
        tx += 25;
    }
    slider1.current.style.transform = `translateX(${tx}%)`;
}
    return (
        <div className='testimonial'>
            <img src={next_icon} alt="" className='next-icon' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-icon' onClick={slideBackward}/>
            <div className="slider1">
                <ul ref={slider1}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt="" />
                                <div>
                                    <h2>Italo Melo</h2>
                                    <span>Edusity USA</span>
                                </div>
                            </div>
                            <p>"Our experience with GN Travel was absolutely fantastic! From the moment we
                                booked our trip, their team provided exceptional customer service, ensuring
                                every detail was taken care of. The itinerary was well-planned, and the
                                accommodations exceeded our expectations. Our guide was knowledgeable and
                                friendly, making the journey even more enjoyable.
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user2} alt="" />
                                <div>
                                    <h3>Italo Melo</h3>
                                    <span></span>
                                </div>
                            </div>
                            <p>"Our experience with GN Travel was absolutely fantastic! From the moment we
                                booked our trip, their team provided exceptional customer service, ensuring
                                every detail was taken care of. The itinerary was well-planned, and the
                                accommodations exceeded our expectations. Our guide was knowledgeable and
                                friendly, making the journey even more enjoyable.
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user3} alt="" />
                                <div>
                                    <h3>Italo Melo</h3>
                                    <span></span>
                                </div>
                            </div>
                            <p>"Our experience with GN Travel was absolutely fantastic! From the moment we
                                booked our trip, their team provided exceptional customer service, ensuring
                                every detail was taken care of. The itinerary was well-planned, and the
                                accommodations exceeded our expectations. Our guide was knowledgeable and
                                friendly, making the journey even more enjoyable.
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user4} alt="" />
                                <div>
                                    <h3>Italo Melo</h3>
                                    <span></span>
                                </div>
                            </div>
                            <p>"Our experience with GN Travel was absolutely fantastic! From the moment we
                                booked our trip, their team provided exceptional customer service, ensuring
                                every detail was taken care of. The itinerary was well-planned, and the
                                accommodations exceeded our expectations. Our guide was knowledgeable and
                                friendly, making the journey even more enjoyable.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonial
