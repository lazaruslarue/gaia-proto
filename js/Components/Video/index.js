import intent from './intent';
import model from './model';
import view from './view';

// A simple video component
function Video({DOM, props$}) {

  let action$ = intent(DOM);
  let state$ = model(props$);
  let vtree$ = view(state$);

  return {
    DOM: vtree$,
    // action$,
  }
}

export default Video;
