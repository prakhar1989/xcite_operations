var app = {
    views: {},
    models: {},
    routers: {},
    utils: {},
    adapters: {},

    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        
        // below is for testing on desktop browser
        $(document).on("ready", function() {
          new app.views.HomePageView();
        });
    },

    onDeviceReady: function() {
        console.log("app is ready");
    }
};

// Bootstrap
app.initialize();


// VIEWS
app.views.HomePageView = Backbone.View.extend({
  template: _.template( $('#home-template').html() ),
  events: {
    'click #new-btn'   : 'new_delivery',
    'click #sync-btn'  : 'sync_delivery',
    'click #accnt-btn' : 'manage_account'
  },
  initialize: function() {
    this.$el = $('body');
    this.render();
  },
  render: function() {
    this.$el.html( this.template() );
    return this;
  },
  new_delivery: function() {
    alert("add delivery button");
  },
  sync_delivery: function() {
    alert("sync delivery button");
  },
  manage_account: function() {
    alert("manage account button");
  }
});

app.views.NewDeliveryView = Backbone.View.extend({
  template: _.template( $('#new-delivery-template').html() ),
  initialize: function() {
    this.$el = $('body');
  },
  render: function() {
    this.$el.html( this.template() );
    return this;
  }
});
