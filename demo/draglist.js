// Generated by CoffeeScript 1.3.3
(function() {

  KISSY.add("widget/draglist", function(S, DOM, Node, Event, DragSwitch) {
    var $, DragList, defaultConfig;
    $ = S.all;
    defaultConfig = {
      enableScrollView: true,
      enableDragSwitch: true,
      enableTapHold: true,
      dragSwitchConfig: {
        j: 0
      }
    };
    return DragList = (function() {

      function DragList(wrapperEl, config) {
        this.wrapperEl = wrapperEl;
        this.config = config;
        this.config = S.merge(defaultConfig, this.config);
      }

      DragList.prototype.init = function() {
        if (this.config.enableScrollView) {
          this.initScrollView;
        }
        if (this.config.enableDragSwitch) {
          this.initDragSwitch;
        }
        if (this.config.enableTapHold) {
          return this.initTapHold;
        }
      };

      DragList.prototype.initScrollView = function() {};

      DragList.prototype.initDragSwitch = function() {};

      DragList.prototype.initTapHold = function() {};

      return DragList;

    })();
  }, {
    requires: ["dom", "node", "event", "widget/dragswitch"]
  });

}).call(this);
