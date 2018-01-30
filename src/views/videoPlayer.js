var VideoPlayerView = Backbone.View.extend({
  
  //events:{'select': 'render'},

  initialize:function(){
    this.collection.on('select', this.render, this);  
    this.render(); 
  },

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
