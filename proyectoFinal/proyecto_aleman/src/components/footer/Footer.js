import React from "react";
import './Footer.css';
import Clock from "../clock/Clock";

export default function Footer() {
    return(
            <div className="footer-general-container">
                <footer className="footer-container">
                    <div className="row row-footer-social">
                        <div className="col">
                            <a href="/">
                                <div className="logo-footer"><span className="span-footer-learn">LEARN</span> DEUTSCH</div>
                            </a>
                        </div>
                        <div className="col">
                            <a href="https://www.instagram.com/lernedeutsch/" target="_blank" rel="noreferrer">Instagram</a>
                        </div>
                        <div className="col">
                            <a href="https://www.youtube.com/lernedeutsch" target="_blank" rel="noreferrer">YouTube</a>
                        </div>
                        <div className="col">
                            <a href="https://www.tiktok.com/@lernedeutsch" target="_blank" rel="noreferrer">Tik Tok</a>
                        </div>
                        <div className="col">
                            <a href="https://www.facebook.com/Lernedeutsch1/" target="_blank" rel="noreferrer">Facebook</a>
                        </div>
                        <div className="col">
                            © 2023 LerneDeutsch
                        </div>
                    </div>
                    <div className="row row-footer-clock">
                        <div className="col">
                            <div className='timeZone'>{<Clock country="Germany's" />}</div>
                        </div>
                    </div>
                </footer>
            </div>
    );
}