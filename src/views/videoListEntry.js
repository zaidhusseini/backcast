var VideoListEntryView = Backbone.View.extend({
  
  initialize: function(){
    //this.render();
    //console.log(this.$('.video-list'));
     this.render();
  },
   
  //   this.model.on('click', function(){
  //   this.trigger('');
   
  // }, this)},
  
  events: {'click .video-list-entry-title': 'select'},

  select: function(){
    this.model.select();
  },

  render: function() {
    //$el = $('.video-list-entry');
    //console.log(this.$el);
    this.$el.html(this.template(this.model.attributes));
    //this.$el.html(this.$el);
    //console.log(this.$el);
    //this.$el.html('<div>324324324432</div>');
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
