var Videos = Backbone.Collection.extend({

  model: Video,
  url:'https://www.googleapis.com/youtube/v3/search' ,

  search: function(query) {
    //console.log('search of collection firing')
    var url = 'https://www.googleapis.com/youtube/v3/search';
    
     this.fetch({
       data: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      }
    });


    // Backbone.ajax({
    //   url: url,
    //   type: 'GET',
    //   data: {
    //     part: 'snippet',
    //     key: window.YOUTUBE_API_KEY,
    //     maxResults: 5,
    //     type: 'video',
    //     q: query,
    //     videoEmbeddable: 'true'
    //   },
    //   contentType: 'application/json',
    //   success: function(data) {
    //     console.log(data.items, 'Message received');
    //     //console.log(parse(data));
    //     //new Videos(data.items);
    //     //new VideoListView({collection: new Videos(data.items)});
    //     //console.log(that.models);
    //     //that.trigger('sync');
    //   },
    //   error: function(data) {
    //     console.error('Failed to receive message', data);
    //   }
    // });




  },

  parse: function(data){
    console.log('heres the data', data.items);
    return data.items;
  }
  

});
