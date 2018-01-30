var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
    this.set('thumbnail', video.snippet.thumbnails.default.url);
  },

  select: function(attributes) {
    //console.log(this);
    this.trigger('select', attributes);
  }

});
