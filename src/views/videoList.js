var VideoListView = Backbone.View.extend({

  initialize: function(){
    this.collection.on('sync', this.render,this);
    this.render();
  },

  render: function(data) {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$('.video-list').html('');
    for(var i = 0; i < 5; i++) {
      var videoEntry = new VideoListEntryView({ model: this.collection.models[i]});
      videoEntry.$el.appendTo(this.$('.video-list'));
    }
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
