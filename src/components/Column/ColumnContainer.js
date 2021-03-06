import {connect} from 'react-redux';
import Column from './Column';
import {getCardsForList} from '../../redux/cardsRedux.js';
import createActionAddCard from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getCardsForList(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: cards => dispatch(createActionAddCard({
    columnId: props.id,
    cards,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);