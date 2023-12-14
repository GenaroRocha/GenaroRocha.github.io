// Blog.jsx

import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import minutemaidpark from "../images/minutemaidpark.png"; 

const StyledBlog = styled.section`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  text-align: center;

  .blog-entry {
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      border: 2px solid ${({ theme }) => theme.color};
      margin-bottom: 1rem;
    }

    h3 {
      margin-bottom: 1rem; // Espacio debajo del título del artículo
    }

    p {
      margin-bottom: 1rem; // Espacio debajo de cada párrafo
      text-align: justify; // Justifica el texto para una mejor lectura
    }
  }
`;

const Blog = () => {
  return (
    <Element name="Blog" id="blog">
      <StyledBlog className="section">
        <div className="container">
          <h2>Blog</h2>
          <div className="blog-entry">
            <img src={minutemaidpark} alt="Minute Maid Park" />
            <h3>Swing and a Hit: Measuring Fan Attendance Response to MLB Team Performance</h3>
            {/* Divide el contenido en párrafos separados */}
            <p>
              As the crack of the bat echoes through the MLB stadiums, a question often arises among sports analysts and team owners alike: "How does a team's on-field performance and playoff qualification influence fan attendance in the subsequent season?" The 2022 season provided a unique dataset to explore this query, and the findings might surprise you.
            </p>
            <p>
                The correlation between the percentage of games won in 2022 and the change in fan attendance from 2022 to 2023 was found to be low and statistically insignificant. This initially suggests that last season's victories may not be the home run for drawing crowds that one might expect. However, diving deeper into the numbers, a fascinating trend emerged.
            </p>
            {/* Continúa con el resto del contenido del artículo, asegurándote de que cada párrafo esté separado */}
            <p>
              Contrary to the initial findings, the shift in the percentage of games won from 2022 to 2023, coupled with the change in attendance over the same period, displayed a positive correlation with a low p-value. This statistical significance points to several intriguing conclusions:
            </p>
            <p>
              1. Reaction to Performance Improvement: Fans appear to respond positively to enhanced team performance. This correlation could indicate a couple of scenarios:
                    a) Fans are likely more enthusiastic and willing to attend games when their team shows a marked improvement in performance.
                    b) Increased support from fans might provide a morale boost to the players, potentially improving their performance.
                    c) It could also be a coincidental temporal trend unrelated to performance factors.
            </p>
            <p>
              2. Solid Fan Base Foundation: The data suggests that immediate past performance, including playoff appearances, does not have a strong grip on fan attendance. This could imply several possibilities:
                    a) There exists a core group of loyal fans who turn up at games regardless of the team's previous season success, as seen with historic franchises like the New York Yankees.
                    b) Effective team marketing efforts, such as those employed by the LA Dodgers, play a crucial role in maintaining high attendance figures.
                    c) The geographical convenience of the stadium's location, such as the remoteness of the Tampa Bay Rays' stadium to urban centers, may not ease fan access and reduce numbers.
                    d) The allure of star players, like Shohei Ohtani with the LA Angels, can significantly pique public interest and draw crowds.
            </p>
            <p>
               In conclusion, while a team's win-loss record and playoff berth might not be the golden ticket to filling seats, the dynamic between improved performance and fan turnout cannot be ignored. A complex interplay of loyalty, marketing, location, and star power appears to keep the stands buzzing, underscoring the multifaceted nature of fan engagement in America's beloved pastime.
            </p>
            {/* Resto del contenido del artículo */}
          </div>
        </div>
      </StyledBlog>
    </Element>
  );
};

export default Blog;
