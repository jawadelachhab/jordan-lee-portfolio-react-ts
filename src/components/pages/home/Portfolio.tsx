
const Portfolio = () => {
  return (
    <section className="project" id="portfolio">

        <ul className="project-list">

          <li>
            <div className="project-content section-content">

              <p className="section-subtitle">My Works</p>

              <h2 className="h3 section-title">See My Works Which Will Amaze You!</h2>

              <p className="section-text">
                We develop the best quality website that serves for the long-term. Well-documented, clean, easy and
                elegant interface
                helps any non-technical clients.
              </p>

            </div>
          </li>

          <li>
            <a href="#" className="project-card">

              <figure className="card-banner">
                <img src="/images/project-1.png" className="w-100" alt="A macintosh on a yellow background."/>
              </figure>

              <div className="card-content">
                <h3 className="h4 card-title">Lorem Ipsum Dolor 01</h3>

                <time className="publish-date" dateTime="2022-04">April 2022</time>
              </div>

            </a>
          </li>

          <li>
            <a href="#" className="project-card">

              <figure className="card-banner">
                <img src="/images/project-2.png" className="w-100" alt="On a Blue background, a Wacom and a mouse."/>
              </figure>

              <div className="card-content">
                <h3 className="h4 card-title">Lorem Ipsum Dolor 02</h3>

                <time className="publish-date" dateTime="2022-04">April 2022</time>
              </div>

            </a>
          </li>

          <li>
            <a href="#" className="project-card">

              <figure className="card-banner">
                <img src="/images/project-3.png" className="w-100"
                  alt="A Cassette tape on a mellow apricot background."/>
              </figure>

              <div className="card-content">
                <h3 className="h4 card-title">Lorem Ipsum Dolor 03</h3>

                <time className="publish-date" dateTime="2022-04">April 2022</time>
              </div>

            </a>
          </li>

          <li>
            <a href="#" className="project-card">

              <figure className="card-banner">
                <img src="/images/project-4.png" className="w-100"
                  alt="Blue digital watch on a dark liver background."/>
              </figure>

              <div className="card-content">
                <h3 className="h4 card-title">Lorem Ipsum Dolor 04</h3>

                <time className="publish-date" dateTime="2022-04">April 2022</time>
              </div>

            </a>
          </li>

          <li>
            <a href="#" className="project-card">

              <figure className="card-banner">
                <img src="/images/project-5.png" className="w-100"
                  alt="On a dark liver background, Airport luggage car carrying a luggage."/>
              </figure>

              <div className="card-content">
                <h3 className="h4 card-title">Lorem Ipsum Dolor 05</h3>

                <time className="publish-date" dateTime="2022-04">April 2022</time>
              </div>

            </a>
          </li>

          <li>
            <a href="#" className="project-card">

              <figure className="card-banner">
                <img src="/images/project-6.png" className="w-100"
                  alt="On a yellow background, a digital watch and a glass."/>
              </figure>

              <div className="card-content">
                <h3 className="h4 card-title">Lorem Ipsum Dolor 06</h3>

                <time className="publish-date" dateTime="2022-04">April 2022</time>
              </div>

            </a>
          </li>

          <li>
            <a href="#" className="project-card">

              <figure className="card-banner">
                <img src="/images/project-7.png" className="w-100"
                  alt="A fujifilm instant camera on a dark electric blue background."/>
              </figure>

              <div className="card-content">
                <h3 className="h4 card-title">Lorem Ipsum Dolor 07</h3>

                <time className="publish-date" dateTime="2022-04">April 2022</time>
              </div>

            </a>
          </li>

          <li>
            <button className="load-more">Load more work</button>
          </li>

        </ul>

      </section>
  )
}

export default Portfolio