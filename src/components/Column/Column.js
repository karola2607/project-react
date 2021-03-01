import styles from './Column.scss';
import React from 'react';
import PropTypes from 'prop-types';

class Column extends React.Component {
  static propTypes = {
    name: PropTypes.string,
}
	
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
        	{this.props.name}
    	</h3>
      </section>
    )
  }
}

export default Column;
