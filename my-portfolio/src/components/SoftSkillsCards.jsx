import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { GiBowTieRibbon } from "react-icons/gi";
import '../style/cards.css';

const SoftSkillsCards = () => {
  const softSkills = [
    "Quick learner",
    "Team-oriented mindset",
    "Strong problem-solving abilities",
    "Excellent communication skills",
    "Highly determined",
    "Well-organized and efficient"
  ];

  return (
    <div className="card-container">
      <Row className="g-4" style={{ display: 'flex', justifyContent: 'center' }}>
         {softSkills.map((skill, index) => (
          <Col xs={6} sm={6} md={4} lg={4} xl={2} key={index}>
            <div className="soft-card">
              <div className="card-inner">
                
                <div className="card-front">
                  <Card.Body>
                    <Card.Title>
                      <GiBowTieRibbon className='ribbon-icon'/>
                    </Card.Title>
                  </Card.Body>
                </div>

                <div className="card-back">
                  <Card.Body>
                    <Card.Title>{skill}</Card.Title>
                  </Card.Body>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SoftSkillsCards;
