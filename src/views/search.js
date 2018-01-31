var SearchView = Backbone.View.extend({
  
  initialize: function(){
    this.render();
  }, 

  events: {'click button': 'search', 'keyup': 'search'},

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  search: function(){
    //console.log();
    //console.log(this.$('input').val());
    //this.model.trigger('search');
    this.collection.search(this.$('input').val());
  },

  template: templateURL('src/templates/search.html')

});
