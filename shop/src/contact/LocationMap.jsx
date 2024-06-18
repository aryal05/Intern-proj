import React from 'react'

const LocationMap = () => {
  return (
   <>
      <section className="google-map map-section">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width="100%"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
            title="Google Map"
          ></iframe>
          <a href="https://getasearch.com/fmovies" style={{ display: 'none' }}>fmovies</a>
          <a href="https://www.embedgooglemap.net" style={{ display: 'none' }}>embedgooglemap.net</a>
        </div>
      </div>
    </section>
   </>
  )
}

export default LocationMap