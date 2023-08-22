import React from "react";
import './AboutUs.css';

export default function AboutUs() {
    return (
        <div className="div-aboutUs-general-container">
            <div className="div-aboutUs-container">
                <div className="row">
                    <div className="col col-img">
                        <img className="student-img" src={require('../../images/students-background.jpg')} alt="Students"></img>
                    </div>
                    <div className="col">
                        <h1>About Us:</h1>
                        <p>We are a German teaching academy with native German teachers. Here, you can learn from the most basic level of the language, to the upper intermediate level.</p>
                        <p>We are focused on our students learning in a didactic, simple and to the point way so as not to waste time and so that the student can adapt to the language as quickly as possible.</p>
                        <p>We are in Baden-Würtenberg, Germany, if you live in this part of the country, you can contact us to find out about our prices, schedules and tuition. However, if you don't live in Germany, don't worry, because we have online classes where you can start conversations with the teachers and with your classmates.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}