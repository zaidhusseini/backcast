var VideoListEntryView = Backbone.View.extend({
  
  initialize: function(){

    this.render();
  },
   

  
  events: {'click .video-list-entry-title': 'select'},

  select: function(){
    this.model.select();
  },

  render: function() {
    //console.log(this.model.attributes);
    this.$el.html(this.template(this.model.attributes));
    //console.log(this.$el);
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
