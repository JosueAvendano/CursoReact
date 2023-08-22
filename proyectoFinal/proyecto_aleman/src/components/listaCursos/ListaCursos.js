import React from "react";
import './ListaCursos.css';

const courses = [
{
    id: 0,
    image: '../../images/a1Course.jpg',
    name: 'A1 Course for Beginners',
    description: 'On this course you will learn the basics of german grammar, basic phrases and counting numbers',
    price: '$10'
},
{
    id: 1,
    image: '../../images/a2Course.jpg',
    name: 'A2 Course for Advanced Beginners',
    description: 'On this course you will continue to learn the basics of german grammar, structure, speaking, and introduction to german cases',
    price: '$12'
},
{
    id: 2,
    image: '../../images/b1Course.jpg',
    name: 'B1 Course for Intermediate',
    description: 'On this course you will reinforce your german grammar by studying the Konjugtiv II, Futur I, Futur II',
    price: '$15'
},
{
    id: 3,
    image: '../../images/b2Course.jpg',
    name: 'B1 Course for Advanced Intermediate',
    description: 'On this course you will continue to reinforce previous subjects and will be able to choose a teacher for conversational clases of 1h:30min',
    price: '$20'
}
]

function ListaCursos() {
    const coursesList = courses.map(course =>
        <li key={course.id}>
            {/*             <p><b>{course.name}: </b></p>
            <b>Description:</b>
            <p>{course.description}</p>
            <p>Price: {course.price}</p> */}
            <div className="card card-courses">
                <h5 className="card-header card-courses-header">{course.name}</h5>
                {/* {course.image} */}
                <img className="courses-img" src={course.image} alt="Courses"></img>
                <div className="card-body card-courses-body">
                    <h5 className="card-title card-courses-title">What will you be learning?</h5>
                    <p className="card-text card-courses-text">{course.description}</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
                <div className="card-footer card-courses-footer">
                    Price: {course.price}
                </div>
            </div>
        </li>
    );
    return(
        <div className="div-courses-general-container">
            <div className="coursesDiv">
               <div className="card card-general-courses">
                   <div className="card-body card-general-body-courses">
                        <h1>Available Courses:</h1>
                        <p>These are all the courses that we have available for you. Their prices are very affordable with tons of material and where you will be learning along with the teacher and with your classmates.</p>
                        <ul>{coursesList}</ul>
                        <p>If you have any questions of our prices, schedules, or any other doubt, you can talk to us via de <a href="../Contact/contact">contact</a> page and our team will address all of your concernings.</p>
                   </div>
               </div>
            </div>
        </div>
    );
}

export default ListaCursos;