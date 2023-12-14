import React from "react";
import styled from "styled-components";
import { Title } from "./globalStyledComponents";
import { Element } from "react-scroll";
import maraton from "../images/maraton.png";
import baseball from "../images/baseball.png";
import drive from "../images/drive.png";
import geneology from "../images/geneology.png";
const StyledInterests = styled.section`
padding: 4rem 0;
  text-align: center;

  .section-subtitle {
    margin-bottom: 6px;
    font-weight: 400;
    opacity: 0.6;
  }
  
  .interest-card {
    margin-bottom: 1.5rem;
    border: 3px solid ${({ theme }) => theme.color};
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    .body {
      position: relative;
      padding: 80px 15px;
      img {
        max-width: 100%;
        height: 150px;
        border-radius: 10px;
        border: 2px solid ${({ theme }) => theme.color};
        margin-bottom: 0.5rem;
        transition: transform 0.3s ease-in-out;
      }

      h6 {
        color: ${({ theme }) => theme.color};
      }

      &:hover img {
        transform: scale(1.05);
      }

      .hidden-text {
        font-size: 16px;
        margin: 2px;
        opacity: 0;
        font-size: 14px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%) translateY(100%);
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
      }

      &:hover .hidden-text {
        opacity: 0.9;
        transform: translateX(-50%) translateY(0);
      }
    }
  }
`;


const Interests = () => {
  return (
    <StyledInterests className="section" id="interests">
      <div className="container text-center">
        <Element name="Interests" id="interests">
          <Title>
            <h2>Interests</h2>
            <div className="underline"></div>
          </Title>
          <div className="row">
            {/* Tarjetas de intereses actualizadas con nuevos estilos y contenido */}
            {/* Ejemplo: */}
            <div className="col-md-6 col-lg-3">
              <div className="interest-card">
                <div className="body">
                  <img src={maraton} alt="Tu Interés 1" className="icon" />
                  <h6 className="title">Running</h6>
                  <p className="hidden-text">I have completed two marathons in the past two years.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="interest-card">
                <div className="body">
                  <img
                    src={baseball}
                    alt="Interest 2"
                    className="icon"
                  />
                  <h6 className="title">Baseball</h6>
                  <p className="hidden-text">
                    I've been playing baseball since I was 15. I'm first base and a Houston Astros fan.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="interest-card">
                <div className="body">
                  <img
                    src={drive}
                    alt="Interest 3"
                    className="icon"
                  />
                  <h6 className="title">Driving</h6>
                  <p className="hidden-text">
                    I enjoy driving on the highway, no matter how much time I spend on it.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="interest-card">
                <div className="body">
                  <img
                    src={geneology}
                    alt="Interest 4"
                    className="icon"
                  />
                  <h6 className="title">Geneology</h6>
                  <p className="hidden-text">
                    I usually spend some time on vacations doing genealogical research. My family tree has 250 members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Element>
      </div>
    </StyledInterests>
  );
};

export default Interests;
