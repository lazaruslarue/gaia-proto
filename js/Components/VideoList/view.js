// VideoList View
import {header, section,ul, footer, h1, button, div, input, label, li, h3} from '@cycle/dom';

function renderHeader(data) {

  return header('.header', [
    h1('name', data.details$.term.name),
    li('body', data.details$.term.body),
    li('image_link', data.details$.term.termImages.hero.hero_320x200)
  ])
}

function renderMain(data) {
console.log('dkdkdkd',data)
  return section('.main',  [

    ul('.video-list', data.titles$
        .map(d => {
          // this is where we insert the isolated Video components
          // into the DOM for the VideoList component
console.log('^^^^^^^^');
console.log(d);
          return li(d.title)
        })
     )

  ])
}

function renderFooter(data) {
  return footer('.footer', [
    h1('.count', data.details$.totalCount)
  ])
}


export default function view(state$) {

    return state$.map(videoData => {

      return div([
        renderHeader(videoData),
        renderMain(videoData),
        renderFooter(videoData)
      ])}
    )

}
