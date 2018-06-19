Page({
  data: {

  },
  onLoad : function() {
      console.log(this.selectComponent("#test"));
  },
  myEventListener: function(e) {
    console.log("Event in index")
  }
})
