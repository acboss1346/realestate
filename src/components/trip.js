import "./TripStyles.css";
import React from "react";
import TripData from "./TripData";
import Trip1 from "../assets/germany.jpg";
import Trip2 from "../assets/switzerland.jpg";
import Trip3 from "../assets/norway.jpg";

function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>Discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                    imgs={Trip1}
                    heading="Trip in Germany"
                    text="No holiday in Germany is complete without a visit to the capital, Berlin. The iconic city offers a wide range of museums on German history, such as the DDR Museum. Stroll along the River Spree on a sunny afternoon during spring or fall."
                />

                <TripData
                    imgs={Trip2}
                    heading="Trip in Switzerland"
                    text="Tiny, multilingual Switzerland offers a variety of landscapes, from glittering lakes and towering peaks to postcard-perfect villages and world-class museums. Explore it all with the Grand Tour, a 1,000-mile route that takes you to Bern, Jungfraujoch, the iconic Matterhorn, and 42 other must-see destinations."
                />

                <TripData
                    imgs={Trip3}
                    heading="Trip in Norway"
                    text="With sparkling fjords along its coastline and soaring mountains throughout its interior, Norway is considered one of the world's most beautiful countries. Its progressive society, vibrant cultural scene, and free camping opportunities make it a perfect travel destination."
                />
            </div>
        </div>
    );
}

export default Trip;
