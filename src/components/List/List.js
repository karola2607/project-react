import styles from './List.scss';
import React from 'react';
import Hero from "../Hero/Hero.js";
import PropTypes from 'prop-types';
import Column from "../Column/Column.js";
import {settings} from '../../data/dataStore.js';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component {
  state = {
  	columns: this.props.columns || [],
  }
  static propTypes = {
    title: PropTypes.node.isRequired,
  	image: PropTypes.string,
  	description: PropTypes.node,
	columns: PropTypes.array,
	name: PropTypes.string,
}
  static defaultProps = {
  	description: settings.defaultListDescription,
}
  render() {
    return (
      <section className={styles.component}>
  		<Hero 
  		  titleText={this.props.title} 
  		  imageImg={this.props.image} 
  	     />
  		<div className={styles.description}>
  		  {ReactHtmlParser(this.props.description)}
	  	</div>
	    <div className={styles.columns}>
	      {this.state.columns.map(({key, title, ...columnProps}) => (
          <Column key={key} name= {title} {...columnProps}  />
        ))}
          
	    </div>
      </section>
    )
  }
}

export default List;