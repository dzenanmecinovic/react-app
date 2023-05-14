import "./Hotel.css";

export default function HotelKartica(props) {
  return (
    <div className="single-card">
      <img
        style={{ borderRadius: "1.5rem" }}
        src={props.imageURL}
        alt="hotel"
      ></img>
      <h1>{props.name}</h1>
      <b>Property highlights</b>
      <div>
        <div>
          <span>🚗 Free parking</span>
          <span>🐾 Pet friendly</span>
        </div>
        <div>
          <span>Free wifi and 24/7 front desk</span>
        </div>
      </div>
      <div>
        <p>
          <span>🚍 </span>Getting around
        </p>
        <p>
          <span>🚍 </span>Dublin Airport (DUB) - 26 min drive
        </p>
        <p>
          <span>🚍 </span>Dublin Drumcondra Station - 5 min drive
        </p>
        <p>
          <span> 🚶 </span>Dublin Tara Street Station - 26 min walk
        </p>
        <p>
          <span> 🚶 </span>Connolly Station - 29 min walk
        </p>
        <p>
          <span> 🚶 </span>Four Courts Station - 8 min walk
        </p>
        <p>
          <span> 🚶 </span>Smithfield Station - 5 min walk
        </p>
      </div>
    </div>
  );
}
