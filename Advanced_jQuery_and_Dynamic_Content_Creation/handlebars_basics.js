$(function() {
  var post = {
    title: 'Lorem ipsum dolor sit amet',
    published: 'April 1, 2015',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    tags: [
      'chicka',
      'chickaboom',
      'boom'
    ]
  };

  var secondPost = {
    title: 'Another post',
    published: 'April 2, 2015',
    body: 'Look how much fun posting is!',
  };

  var posts = [
    post,
    secondPost
  ]

  Handlebars.registerPartial('tag', $('#tag').html());

  post.body = "<p>" + post.body + "</p>";

  var postTemplate = Handlebars.compile($('#post').html());

  $('body').append(postTemplate({ posts: posts }));
});