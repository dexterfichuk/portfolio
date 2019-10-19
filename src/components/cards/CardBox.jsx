import React from 'react';
import Card from 'react-bootstrap/Card';
import './CardBox.css';

// https://www.sidewalklabs.com/blog/announcing-replicas-spin-out-and-series-a/
export default class CardBox extends React.Component {
    render() {
        return (
            <div className="horizontal-slider"> {
                this.props.events.map((event, i) => {
                    const { imageUrl, description, title, date, mainColor, backgroundColor } = event

                    return (
                        <Card className="cardbox-card" style={mainColor && {color: mainColor}}>
                            {i % 2 === 0 && 
                                <div className='img-container'>
                                    <Card.Img variant="top" src={imageUrl}/>
                                    <div className='color-box' style={mainColor && {backgroundColor: mainColor, top: 0}}></div>
                                </div>
                            }
                            <Card.Body style={backgroundColor && {backgroundColor: backgroundColor}}>
                                <Card.Text className="cardbox-date">{date.toUpperCase()}</Card.Text>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text className="card-excerpt">
                                    {description}
                                </Card.Text>
                            </Card.Body>
                            {i % 2 === 1 && 
                                <div className='img-container'>
                                    <Card.Img variant="top" src={imageUrl}/>
                                    <div className='color-box' style={mainColor && {backgroundColor: mainColor}}></div>
                                </div>
                            }
                        </Card>
                    )
                })
            }
            </div>
        )

    }
}