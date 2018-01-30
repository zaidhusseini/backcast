var VideoListView = Backbone.View.extend({
  
  initialize: function(){
    this.collection.on('sync', this.render,this);
    //console.log(this.$el);
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    for(var i = 0; i < 5; i++) {
      var videoEntry = new VideoListEntryView({ model: this.collection.models[i]});
      this.$('.video-list-entry').html(videoEntry.$el);

    }
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
