if(Posts.find().count() === 0){
  Posts.insert({
    title : 'Introducing Telescope',
    url : 'http://stfu.com'
  })

  Posts.insert({
    title: 'Wowhead',
    url: 'http://wowhead.com'
  })

  Posts.insert({
    title: 'Lol',
    url: 'http://twitch.tv'
  })
}