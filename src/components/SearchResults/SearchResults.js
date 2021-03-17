import styles from './SearchResults.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
import {settings} from '../../data/dataStore.js';
import Container from '../Container/Container.js';

class SearchResults extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    cards: PropTypes.array,
    title: PropTypes.string,
    icon: PropTypes.string,
    addCard: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const {cards, addCard} = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}>
            {this.props.name}{this.props.title}
            <span className={styles.icon}>
              <Icon name={this.props.icon}/>
            </span>
          </h3>
          <div className={styles.columns}>
	          {cards.map (cardData => (
              <Card key={cardData.title} {...cardData}/>
            ))}
	        </div>
	        <div className={styles.creator}>
            <Creator 
              text={settings.cardCreatorText} 
              action={addCard}
            />
          </div>
        </section>
      </Container>
    );
  }
}
export default SearchResults;