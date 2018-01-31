var VideoPlayerView = Backbone.View.extend({
  
  //events:{'select': 'render'},

  initialize:function(){
    this.collection.on('select', function(events) {
      
      this.render(events);
    }, this);
     
    // this.collection.on('sync', function(events) {
    //   //console.log(this);
    //   this.render(events);
    // }, this);  
  
    this.$el.html(this.template(this.collection.models[0].attributes));
   
  },

  render: function(events) { 
    //console.log('new video player rendering');
    this.$el.html(this.template(events));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
