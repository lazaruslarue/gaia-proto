import intent from './intent';
import model from './model';
import view from './view';

// A simple video component
function Video({DOM, props$}) {
  let action$ = intent(DOM);
  debugger  
  let state$ = model(props$, action$);
  let vtree$ = view(state$);

  return {
    DOM: vtree$,
    action$,
  }
}

export default Video;
