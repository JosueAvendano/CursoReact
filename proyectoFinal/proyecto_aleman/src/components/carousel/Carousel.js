import './Carousel.css';

export default function Carousel() {
    return(
        <div className='div-general-carousel'>
            <div id="carouselHomeFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={require("../../images/moveNight.png")} className="d-block w-100" alt="MovieNights" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Movie Nights</h5>
                            <p>We have movie nights for our students, so they can get more in touch with the language by watching german made films.</p>
                            <p>Activity only available at our local school, doesn`t apply to online classes.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={require("../../images/germanPronunciation.webp")} className="d-block w-100" alt="Workshops" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Pronunciation and conversation workshops</h5>
                            <p>We have the option to have an extracurricular class on the weekends so they can improve their speaking and pronunciation skills with professorin Antonia Meyer.</p>
                            <p>Activity only available at our local school, doesn`t apply to online classes.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={require("../../images/germanCulture.jpg")} className="d-block w-100" alt="Events" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Board game, gaming afternoons and cultural events</h5>
                            <p>Extracurricular activities such as playing native German board games and playing video games in the German language to accustom your brain and ears in a fun and different way!</p>
                            <p>Activity only available at both our local school and online classes.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselHomeFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselHomeFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}