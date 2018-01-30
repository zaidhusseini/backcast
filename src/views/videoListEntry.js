var VideoListEntryView = Backbone.View.extend({
  
  initialize: function(){
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
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
