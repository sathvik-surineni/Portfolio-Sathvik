import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import './AboutCard.css';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Surineni Sathvik Teja</span> from{" "}
            <span className="purple">Hyderabad, India.</span>
            <br />
            Here’s a brief timeline of my academic journey....
          </p>
          <table className="timeline-table">
            <tbody>
              <tr>
                <td className="timeline-icon"><ImPointRight /></td>
                <td className="timeline-content">
                  <strong>2024-Present:</strong> Pursuing B.Tech from GITAM University Hyderabad
                  <br />
                  <span>Grade: 9.40 (6th semester)</span>
                </td>
              </tr>
              <tr>
                <td className="timeline-icon"><ImPointRight /></td>
                <td className="timeline-content">
                  <strong>2019-2021:</strong> +2 Narayana Jr College
                  <br />
                  <span>Grade: 98%</span>
                </td>
              </tr>
              <tr>
                <td className="timeline-icon"><ImPointRight /></td>
                <td className="timeline-content">
                  <strong>2019:</strong> Schooling from St Gabriel's High School
                  <br />
                  <span>Grade: 9.8 CGPA</span>
                </td>
              </tr>
            </tbody>
          </table>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
