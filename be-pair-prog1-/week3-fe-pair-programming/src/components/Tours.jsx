import {tours} from "../data"
import Title from './Title'
import Tour from './Tour'

const Tours = () => {
  return (
    <div>
      <section className="section" id="tours">
        <div className="section-title">
          <h2>
            featured <span>tours</span>
          </h2>
        </div>
        <div className="section-center featured-center">
          {tours.map((tour) => {
            return <Tour {...tour} key={tour.id} />
          })} 
        
        </div>
      </section>

    </div>
  );
}

export default Tours
 