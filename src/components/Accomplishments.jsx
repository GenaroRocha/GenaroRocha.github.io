import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { Title } from "./globalStyledComponents";
import plomosas from "../images/plomosas.jpeg";
import mole from "../images/mole.png";
import houston from "../images/houston.jpeg";
import marina from "../images/marina.jpeg";
import sax from "../images/sax.jpeg";
import cursos from "../images/cursos.png";
import olimpiada from "../images/olimpiada.jpeg";
import colmillosbeisbol from "../images/colmillosbeisbol.jpeg";
const StyledAchievements = styled.section`
  padding: 4rem 0;
  background: #f8f8f8; /* Fondo claro para el contraste con las tarjetas */

  .achievement-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around; /* Asegura que los elementos no se superpongan */
    gap: 1rem; /* Espacio entre las tarjetas */
  }

  .achievement-card {
    flex-basis: calc(25% - 1rem); /* Ajuste para que tres tarjetas quepan en una fila, restando el gap */
    margin-bottom: 2rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra sutil para las tarjetas */

    .card-body {
      padding: 1rem;

      img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        margin-bottom: 1rem;
      }

      h2 {
        color: #333;
        font-size: 1.5rem;
      }

      .section-subtitle {
        color: #666; // Asegúrate de que el subtítulo también sea legible
      }

      h3 {
        color: #333;
        font-size: 1.5rem;
      }

      p {
        color: #666;
        font-size: 1rem;
      }
    }
  }
`;


const Accomplishments = () => {
  return (
    // Utiliza el componente Element de react-scroll para anclar esta sección
    <Element name="Accomplishments" id="accomplishments">
      <StyledAchievements className="section">
        <div className="container text-center">
          <Title>
            <h2>A Few Accomplishments</h2>
            <p className="section-subtitle">
              Some highlights of my personal milestones last year.
            </p>
          </Title>
          <div className="row">
            {/* Ejemplo de una tarjeta de logro */}
            <div className="col-md-6 col-lg-3">
              <div className="achievement-card">
                <div className="card-body">
                  <img src={plomosas} alt="Plomosas" />
                  <h3>Enlace Rural</h3>
                  <p>
                    I'm the leader of the project 'Fomento a las Actividades Productivas' by Enlace Rural in Plomosas, Actopan, Hgo.
                  </p>
                </div>
              </div>
            </div>
            {/* Repite para otros logros */}
            <div className="col-md-6 col-lg-3">
              <div className="achievement-card">
                <div className="card-body">
                  <img src={mole} alt="Mole" />
                  <h3>Entrepreneurship</h3>
                  <p>
                    I have created and registered my brand of Mole called 'Mole del Alma'. It is now being sold in stores in San Luis Potosi.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="achievement-card">
                <div className="card-body">
                  <img src={houston} alt="Houston" />
                  <h3>Marathons</h3>
                  <p>
                    I've runned two marathons in the last two years, in Houston and San Luis Potosi.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="achievement-card">
                <div className="card-body">
                  <img src={sax} alt="Sax" />
                  <h3>Sax</h3>
                  <p>
                    I used to play the sax.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="achievement-card">
                <div className="card-body">
                  <img src={marina} alt="Marina" />
                  <h3>La Juventud y la mar</h3>
                  <p>
                    I won the first place at the National Award 'La Juventud y la Mar' by the Marine.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="achievement-card">
                <div className="card-body">
                  <img src={cursos} alt="Cursos" />
                  <h3>Courses at Guanajuato and Coahuila</h3>
                  <p>
                    I was selected in high school to participate in courses by CIMAT at Guanajuato and by CINVESTAV at Cuatro Cienegas, Coahuila 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="achievement-card">
                <div className="card-body">
                  <img src={olimpiada} alt="Olimpiada" />
                  <h3>Pre-national physics olympics</h3>
                  <p>
                    I got to the pre-national physics olympiad in Veracruz in 2018.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="achievement-card">
                <div className="card-body">
                  <img src={colmillosbeisbol} alt="ColmillosBeisbol" />
                  <h3>Colmillos beisbol</h3>
                  <p>
                    LLast year we started a baseball team at university. I'm first base.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledAchievements>
    </Element>
  );
};

export default Accomplishments;
