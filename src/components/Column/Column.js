import styles from './Column.scss';
import React from 'react';
import PropTypes from 'prop-types';
//import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    cards: PropTypes.array,
    title: PropTypes.string,
    icon: PropTypes.string,
  }

  render() {
    const {cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {this.props.name}{this.props.title}
          <span className={styles.icon}>
            <Icon name={this.props.icon}/>
          </span>
        </h3>
        <div className={styles.columns}>
	        {cards.map (cardData => (
            <Card key={cardData.id} {...cardData}/>
          ))}
	    </div>
	    {/*<div className={styles.creator}>
          <Creator 
            text={settings.cardCreatorText} 
            action={title => this.addCard(title)}
          />
        </div>*/}
      </section>
    );
  }
}

export default Column;
