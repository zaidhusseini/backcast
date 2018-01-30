var VideoPlayerView = Backbone.View.extend({
  
  //events:{'select': 'render'},

  initialize:function(){
    //console.log(this.collection.collection);
    this.model.on('select', this.render, this);  
    this.render(); 
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    console.log(this.model.attributes);
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
