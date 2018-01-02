var PAGE = {
  'title': 'GameDay',
  'header': {
    'links': [
      {
        'display': 'SteamDB',
        'link': 'https://steamdb.info/'
      },
      {
        'display': 'Steam',
        'link': 'steam://open/main/'
      }
    ]
  },
  'contents': [
    [
      {
        'proton': 'textbox',
        'title': 'Welcome to GameDay!',
        'text': [
          'This is a cross-platform web-tool designed to help gamers simplify their games and they interact with their games.',
          'I made this with the intention of using it for Grand Theft Auto Online cars and such. With five garages and nearly 40 cars, I kept forgetting which car was which and why I owned a car; back when we could only have 20 it was much easier to remember each individual car.',
          '<span class="strike">The beauty of <i>GameDay</i> is that it requires no setup and runs completely in a browser; no need to compile or interpret any code&ndash; JS (<a href="https://www.ecma-international.org/ecma-262/7.0/">ES7</a>). An individual could develop a generator or preview for <i>GameDay</i>.</span>',
          'On New Years Eve (Sunday December 31, 2017) <i>GameDay</i> was ported over to <a href="http://electronjs.org/">Electron</a>.'
        ]
      },
      {
        'proton': 'textbox',
        'title': 'Development',
        'text': [
          'Development of <i>GameDay</i> began on Thursday December 21, 2017 with the intention of having a public alpha by New Years Day (Monday January 1, 2018). The JS(ON) layout idea was the basis of the Proton Platform.',
          'The following <i>protons</i> are available: textbox, list.'
        ]
      }
    ],
    [
      {
        'proton': 'textbox',
        'title': 'Inspiration',
        'text': [
          'The idea and design stems from Microsoft\'s intranet solution: <i>SharePoint</i>. At my day-job I am a <i>SharePoint</i> designer; I create, modify, and supervise the use and implementation of <i>SharePoint</i>.'
        ]
      },
      {
        'proton': 'list',
        'title': 'Sites',
        'header': ['Name<span class="sortable">▼</span>', 'GameDay Link'],
        'items': []
      }
    ]
  ]
}

for (st of subsites) {
  let s = st.split('.')[0]
  PAGE.contents[1][1].items.push([s, `<a href="javascript:changeSite('${s}')">Open ${s}</a>`])
}
