var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData); // video collection
    this.videoList = new VideoListView({collection: this.videos}); //video list view
    this.search = new SearchView(); //search video
    //this.videoPlayer = new VideoPlayerView();
    //this.videoListEntry = new VideoListEntryView();
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    this.$('.search').html(this.search.$el);
    this.$('.list').html(this.videoList.$el);
    this.$('.video-list').html(this.videoListEntry.$el);
    this.$('.player').html(this.videoPlayer.$el)
    return this;
  },

  template: templateURL('src/templates/app.html')

});


/* Questions on Backbone;
1) How does .trigger work and how does it relate to the .on method
2) How do events objects (e.g., objects that store potential event triggers) work?
3) How do we get the main page to load?
4) How do Events objects work for the KEY value (e.g., what do spaces between two strings indicate e.g., 'click .video-list-entry-title' vs 'click'; is a '')
*/