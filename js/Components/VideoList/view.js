// VideoList View
import {header, section,ul, footer, h1, h2, a, img, text,button, div, input, label, li, h3} from '@cycle/dom';

function renderHeader(data) {
console.log(data);
  return header('.header', [
    h1('name', data.details$.term.name),
    li('body', data.details$.term.body),
    li('image_link', data.details$.term.termImages.hero.hero_320x200)
  ])
}

function renderMain(data) {
console.log('dkdkdkd',data)
  return section('.main',  [

    ul('.video-list', data.details$.titles
        .map(d => {
          // this is where we insert the isolated Video components
          // into the DOM for the VideoList component
          console.log('video title',d);
          return li('.title',
            [div('.title', {style: {color: 'blue'}}, [
              h2('.name', d.title),
              label('.vid-link',[
                img('.link', {props: {
                  src:  d.hero_image.hero_320x200,
                  text: 'click for image',
                }})
              ])

            ]),
          ])
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
