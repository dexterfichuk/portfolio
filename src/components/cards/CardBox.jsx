import React from 'react';
import Card from 'react-bootstrap/Card';
import './CardBox.css';

export default class CardBox extends React.Component {
    render() {
        return (
            <div className="horizontal-slider"> {
                this.props.events.map((event, i) => {
                    const { imageUrl, description, title, date } = event
                    return (
                        <Card className="cardbox-card">
                            {i % 2 === 0 && <Card.Img variant="top" src={imageUrl} />}
                            <Card.Body>
                                <Card.Text className="cardbox-date">{date.toUpperCase()}</Card.Text>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text className="card-excerpt">
                                    {description}
                                </Card.Text>
                            </Card.Body>
                            {i % 2 === 1 && <Card.Img variant="top" src={imageUrl} />}
                        </Card>
                    )
                })
            }
            </div>
        )

    }
}