var Videos = Backbone.Collection.extend({

  model: Video,

  search: function() {

    var url = 'https://www.googleapis.com/youtube/v3/search';

    $.ajax({
      url: url,
      type: 'GET',
      data: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        maxResults: 5,
        type: 'video',
        q: 'cat video',
        videoEmbeddable: 'true'
      },
      contentType: 'application/json',
      success: function(data) {
        console.log(data.items, 'Message received');
        var myVideos = new Videos(data.items);
        new VideoListView({collection: myVideos});
      },
      error: function(data) {
        console.error('Failed to receive message', data);
      }
    });
  }
});
