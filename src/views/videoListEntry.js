var VideoListEntryView = Backbone.View.extend({
  
  initialize: function(){

    this.render();
  },
   

  
  events: {'click .video-list-entry-title': 'select'},

  select: function(){
    
    this.model.select(this.model.attributes);
  },

  render: function() {
    //console.log('new rerender');
    this.$el.html(this.template(this.model.attributes));
    //console.log(this.$el);
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
