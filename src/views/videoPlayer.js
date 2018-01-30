var VideoPlayerView = Backbone.View.extend({
  
  //events:{'select': 'render'},

  initialize:function(){
    //console.log(this.collection.collection);
    this.collection.on('select', function(events) {
      //console.log(events);
      this.render(events);
      //console.log('it should be rerendering');
    }, this);  
    this.$el.html(this.template(this.collection.models[0].attributes));
    //this.render(); 
  },

  render: function(events) {
    this.$el.html(this.template(events));
    //console.log(this.model.attributes);
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
