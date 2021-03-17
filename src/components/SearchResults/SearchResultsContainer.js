import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getResultsOfCards} from '../../redux/cardsRedux.js';
import {createActionAddCard} from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => {
  const title = props.match.params.title;
  const filteredLists = state.lists.filter(list => list.title == title);
  const listParams = filteredLists[0] || {};

  return {
    ...listParams,
    cards: getResultsOfCards(state, title),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.match.params.title,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);