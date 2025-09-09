import { FaAngleRight } from "react-icons/fa6";

const Stats = () => {
  return (
    <section className="stats" id="stats">
      <ul className="stats-list">
        <li>
          <a href="#" className="stats-card">
            <div className="card-icon">
              <img
                src="/images/stats-card_icon-1.png"
                alt="Badge icon"
              />
            </div>

            <h2 className="h2 card-title">
              12+ <strong>Years of Experience</strong>
            </h2>
            <FaAngleRight/>
          </a>
        </li>

        <li>
          <a href="#" className="stats-card">
            <div className="card-icon">
              <img
                src="/images/stats-card_icon-2.png"
                alt="Checkmark icon"
              />
            </div>

            <h2 className="h2 card-title">
              230+ <strong>Completed Projects</strong>
            </h2>
            <FaAngleRight/>
          </a>
        </li>

        <li>
          <a href="#" className="stats-card">
            <div className="card-icon">
              <img
                src="/images/stats-card_icon-3.png"
                alt="Peoples rating icon"
              />
            </div>

            <h2 className="h2 card-title">
              95+ <strong>Happy Clients</strong>
            </h2>
            <FaAngleRight/>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Stats;
