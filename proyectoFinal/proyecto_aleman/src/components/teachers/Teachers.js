import React from "react";
import './Teachers.css';

const teachersInfo = [
    {
        id: 1,
        image: '../../images/teacher1.jpeg',
        name: 'Herman',
        lastName: 'Becker',
        group: 'A1 & A2',
        languages: 'English, Spanish & Portuguese',
        description: 'Hallo, nice to meet you! I`m in love with teaching and I can`t wait for you to join my classes so we can explore more about the basics of my language and my homeland through activities, group events, and books. I also know spanish and portuguese so we could have fun with a mixture of languages and if you`re a native if any of those two languages I could help you to understand more abouot the german language.'
    },
    {
        id: 2,
        image: '../../images/teacher2.jpeg',
        name: 'Antonia',
        lastName: 'Meyer',
        group: 'B1 & B2',
        languages: 'English, Spanish, Turkish & Italian',
        description: 'Hallo, Guten Tag, nice to meet you all, I`m in charge of the more advanced levels of the german language. I will help you with a more in depth approach into the grammar, pronunciation, cases, future tenses, and more... Hope you join me in my class!'
    }
];

export default function Teachers(){
    const teachersInfoList = teachersInfo.map(teachers =>
        <li key={teachers.id}>
            <div className="card card-teachers">
                <div className="card-header card-header-teachers">
                <h2 className="title-teachers">{teachers.name} {teachers.lastName}</h2>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <img src={teachers.image} alt="TeacherProfilePic"/>
                        </div>
                        <div className="col">
                            <h4>Group Levels that I'll be teaching:</h4>
                            <p>{teachers.group}</p>
                            <h4>Languages that I speak:</h4>
                            <p>{teachers.languages}</p>
                            <h4>Description</h4>
                            <p>{teachers.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
    return(
        <div className="div-general-teachers-container">
            <div className="div-teachers-container">
                <div className="row">
                    <div className="col">
                        {teachersInfoList}
                    </div>
                </div>
            </div>
        </div>
    );
}