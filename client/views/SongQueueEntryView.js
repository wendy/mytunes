// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  initialize: function(){
    this.model.on('change:songQueue', function(){
      console.log('changed!')
    }, this);
  },
  // events: {
  //   'click': function() {
  //     this.model.play();
  //     this.model.enqueue();

  //   }
  // },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
