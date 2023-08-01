import React from "react";
import './ListaCursos.css'

const courses = [
{
    id: 0,
    name: 'A1 Course for Beginners',
    description: 'On this course you will learn the basics of german grammar, basic phrases and counting numbers',
    price: '$10'
},
{
    id: 1,
    name: 'A2 Course for Advanced Beginners',
    description: 'On this course you will continue to learn the basics of german grammar, structure, speaking, and introduction to german cases',
    price: '$12'
},
{
    id: 2,
    name: 'B1 Course for Intermediate',
    description: 'On this course you will reinforce your german grammar by studying the Konjugtiv II, Futur I, Futur II',
    price: '$15'
},
{
    id: 3,
    name: 'B1 Course for Advanced Intermediate',
    description: 'On this course you will continue to reinforce previous subjects and will be able to choose a teacher for conversational clases of 1h:30min',
    price: '$20'
}
]

function ListaCursos() {
    const coursesList = courses.map(course =>
        <li key={course.id}>
            <p><b>{course.name}: </b></p>
            <b>Description:</b>
            <p>{course.description}</p>
            <p>Price: {course.price}</p>
        </li>
    );
    return(
        <div className="coursesDiv">
            <h1>Available Courses:</h1>
            <ul>{coursesList}</ul>
        </div>
    );
}

export default ListaCursos;