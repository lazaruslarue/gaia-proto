import {div} from '@cycle/dom';
import xs from 'xstream'
export default function view(state$) {
  return xs.of(div('help'))
  return state$.map( data => {
    console.log('******it\'s working*****')
    return div('help')
  });

}
