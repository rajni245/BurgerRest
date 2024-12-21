import React from "react";

function Gmapcomponent() {
  return (
    <>
      <div className="container-fluid text-center p-0  ">
        <address className="">{/* Faridabad ZHarya na Sanik Colony */}</address>
        <div className="map-container">
          <iframe
            src=
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5612725887!2d77.31096867533367!3d28.58293427569183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5cc4a03b60f%3A0xd2284a8bdd85b91e!2sBurger%20King!5e0!3m2!1sen!2sin!4v1727683863484!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen="auto"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>


        </div>
      </div>
    </>
  );
}

export default Gmapcomponent;
