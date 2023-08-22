import Carousel from "../carousel/Carousel";
import StudentOpinions from "../studentOpinions/StudentOpinions";
import Teachers from "../teachers/Teachers";
import "./Home.css";

function Home() {
    return(
        <div className="home-general-container">
            <div className="home-container">
                <div className="row row-home-title">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <h1><span>Willkommen</span> to Learn Deutsch</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-home-content">
                    <div className="col">
                        <div className="card">
                            <div className="card-body card-body-home">
                                <h2>Interested in learning the german language?</h2>
                                <p>If the answer is yes, then welcome to our page! We have great courses for all levels of german. Are you a beginner? No problem, you can start with the basics of A1, like introducing yourself to people, getting to know the basic grammar structure, and more.</p>
                                <p>Perhaps you're more of an intermediate beginner? If so, the course of A2 is waiting for you, so you can learn more in depth the german gramatical structure to continue your journey through this process of learning a new language.</p>
                                <a href="/courses">You can check here all the courses we offer!</a>
                                <div className="div-home-img1">
                                    <img className="home-students-img" src={require("../../images/students.jpg")} alt="HomeStudents" />
                                </div>
                                <h2>Why choose us for a school?</h2>
                                <p>
                                    Our courses are very educational, communicative and interactive.
                                    Native and qualified teaching staff. In addition, we regularly organize sessions focused on the use of the German language, such as:
                                </p>
                                <Carousel/>
                                <p>Our extensive courses lasts one academic year, equivalent to 10 months (if you choose a course of 3 hours per week, it would be a total of 117 sessions of 60 minutes).</p>
                                <h2>Our teachers</h2>
                                <Teachers/>
                                <h2>What do our students think about us?</h2>
                                <StudentOpinions/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;