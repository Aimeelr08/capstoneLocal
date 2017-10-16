'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const app = require('./app')

const authEvents = require('./auth/events.js');
const forumApi = require('./forum/api.js');

const forumEvents = require('./forum/events.js');
const commentEvents = require('./comment/events.js');

const commentsApi = require('./comment/api.js');

$(() => {
  //$('#postSubmit').on('click', makePosts)
// forumApi.makePosts()
//   // Do some action.
// });
// $('#posts').on('load', getPosts)

forumApi.getPosts()
commentsApi.getComments()
// forumEvents.posts(postSubmit) =  $('#makePosts').on('submit', app.makePosts())

  // postsEvents.makePosts()
  setAPIOrigin(location, config, app)
  authEvents.addHandlers();

// add( String [, String] )
})







// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
require('./forum/events.js');
