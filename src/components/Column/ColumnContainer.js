import {connect} from 'react-redux';
import Column from './Column';
import {getCardsForList} from '../../redux/cardsRedux.js';
import {createActionAddCard} from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getCardsForList(state, props.id, state.searchString),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);