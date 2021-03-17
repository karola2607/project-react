import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getResultsOfCards} from '../../redux/cardsRedux.js';
import {createActionAddCard} from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getResultsOfCards(state, props.id, state.searchString),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);