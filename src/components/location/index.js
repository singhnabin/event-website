import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d3228.3039891943486!2d-77.83821428473271!3d35.98843828012382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d35.9883915!2d-77.8360933!4m3!3m2!1d35.9883958!2d-77.83609009999999!5e0!3m2!1sen!2sus!4v1544662057826"
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen
        title="locations"
      />
      <div className="location_tag">
        <div>Location</div>;
      </div>
      ;
    </div>
  );
};

export default Location;
