import React from "react";
import './StudentOpinions.css';

const englishOpinions = [
    {
        id: 1,
        title: 'Awesome results',
        description: 'You are the greatest! Thanks so much for your work, it is amazing what you have done! When doing things passionately the results are always awesome!'
    },
    {
        id: 2,
        title: 'Now I`m motivated',
        description: 'At the beginning I had doubts whether to learn German or not, until I found your courses. Now I`m motivated to learn it no matter what!'
    },
    {
        id: 3,
        title: 'Great and helpful',
        description: 'Hi, I`m a 18 year old from Dennmark who loves the German language. I just wanted to say that your content is SO... SO GREAT and HELPFUL. Mach weiter so!'
    }
]

const germanOpinions = [
    {
        id: 1,
        title: 'Sehr gute Methode!',
        description: 'Deine Methode ist sehr attraktiv und nützlich. Die Lern-Materielle sind kurz, klar und verständlich.'
    },
    {
        id: 2,
        title: 'Meine Motivation',
        description: 'Ihr Lächeln in Unterrichtsvideos schafft einen besonderen Mehrwert und steigert die Motivation, deswegen der Artikelkurs war hoch interessant für mich und warte auf neue Kurse von Dir.'
    },
    {
        id: 3,
        title: 'Meine Lieblingsseite',
        description: 'Deine Seite ist meine Lieblinsseite, um Deutsch zu lernen 😍'
    }
]

export default function StudentOpinions(){
    const englishOpinionsList = englishOpinions.map(english =>
        <li key={english.id}>
            <div className="card">
                <div className="card-body">
                    <h2>{english.title}</h2>
                    <p>"{english.description}"</p>
                </div>
            </div>
        </li>
    );
    const germanOpinionsList = germanOpinions.map(german =>
        <li key={german.id}>
            <div className="card">
                <div className="card-body">
                    <h2>{german.title}</h2>
                    <p>"{german.description}"</p>
                </div>
            </div>
        </li>
    );
    return(
        <div className="div-general-student-opinions-container">
            <div className="div-student-opinions-container">
                <div className="row row-opinions">
                    <div className="col col-student-card">{englishOpinionsList}</div>
                    <div className="col col-student-card">{germanOpinionsList}</div>
                </div>
            </div>
        </div>
    );
}