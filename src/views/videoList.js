var VideoListView = Backbone.View.extend({
  //el: '.video-list',

  initialize: function(){
    this.collection.on('sync', this.render,this);
    //console.log(this.$el);
    this.render();
  },

  render: function() {
    //var oldHTML = '';
    this.$el.children().detach();
    this.$el.html(this.template());
    //console.log('video list view called');
    this.$('.video-list').html('');
    for(var i = 0; i < 5; i++) {
      var videoEntry = new VideoListEntryView({ model: this.collection.models[i]});
      //this.$('.video-list').html(videoEntry.$el);
      //this.$el.append(videoEntry.$el);
      videoEntry.$el.appendTo(this.$('.video-list'));
    }
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
