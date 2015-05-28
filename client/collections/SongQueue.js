// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', this.enqueue, this),
    this.on('ended', this.playNext , this),
    this.on('dequeue', this.dequeue , this)
  },

  enqueue: function(){
    if( this.length === 1){
      this.playFirst();
    }
  },

  playNext: function(){
    this.shift();
    if( this.length > 0){
      this.playFirst();
    } else {
      this.trigger("stop");
    }
  },

  dequeue: function(song){
    if( song === this.at(0)){
      this.playNext();
    } else {
      this.remove(song);
    }
  },

  playFirst: function(){
    this.at(0).play();
  } 
    
});
