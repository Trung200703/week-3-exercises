// src/Tour.jsx
const Tour = (props) => {
    const { image, info, name, price } = props.tour;

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">€{price}</h4>
        </div>
        <p>
            {/* i fixed the code below, somehow the web not work beacz of its */}
          {info.substring(0, 200)}... 
          <button>read more</button>
        </p>
        <button className="delete-btn">not interested</button>
      </footer>
    </article>
  );
};

export default Tour;