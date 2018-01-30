var VideoListEntryView = Backbone.View.extend({
  
  initialize: function(){

    this.render();
  },
   

  
  events: {'click .video-list-entry-title': 'select'},

  select: function(){
   // console.log('this model is ', this.model.attributes);
    this.model.select(this.model.attributes);
  },

  render: function() {
    //console.log(this.model.attributes);
    this.$el.html(this.template(this.model.attributes));
    //console.log(this.$el);
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
