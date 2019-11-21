"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _decorator, Component, Node, Prefab, instantiate, RigidBodyComponent, Vec3, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, ccclass, property, ShootMgr;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      RigidBodyComponent = _cc.RigidBodyComponent;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "a0be8+Mmh9DHqe9vp1DhhPK", "ShootMgr"); // begin ShootMgr


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ShootMgr", ShootMgr = (_dec = ccclass("ShootMgr"), _dec2 = property(Prefab), _dec3 = property(cc.Float), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(ShootMgr, _Component);

        function ShootMgr() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, ShootMgr);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(ShootMgr)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "bullet", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "speed", _descriptor2, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(ShootMgr, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            // Your initialization goes here.
            cc.systemEvent.on(Node.EventType.TOUCH_END, function () {
              console.log('touchend');

              _this2.fire();
            });
          }
        }, {
          key: "fire",
          value: function fire() {
            var node = instantiate(this.bullet);
            node.parent = this.node.parent;
            node.position = this.node.position;
            var bullet = node.getComponent(RigidBodyComponent);
            bullet.applyImpulse(new Vec3(0, 0, -1 * this.speed)); // bullet.applyImpulse(new Vec3(0, 2.29, -1 * this.speed));
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);
        return ShootMgr;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "bullet", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "speed", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end ShootMgr

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvU2hvb3RNZ3IudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsIlJpZ2lkQm9keUNvbXBvbmVudCIsIlZlYzMiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJTaG9vdE1nciIsImNjIiwiRmxvYXQiLCJzeXN0ZW1FdmVudCIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfRU5EIiwiY29uc29sZSIsImxvZyIsImZpcmUiLCJub2RlIiwiYnVsbGV0IiwicGFyZW50IiwicG9zaXRpb24iLCJnZXRDb21wb25lbnQiLCJhcHBseUltcHVsc2UiLCJzcGVlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxrQixPQUFBQSxrQjtBQUFvQkMsTUFBQUEsSSxPQUFBQSxJOzs7K0VBRU47OztBQURqRUMsTUFBQUEsTyxHQUFzQlAsVSxDQUF0Qk8sTztBQUFTQyxNQUFBQSxRLEdBQWFSLFUsQ0FBYlEsUTs7MEJBR0pDLFEsV0FEWkYsT0FBTyxDQUFDLFVBQUQsQyxVQUdIQyxRQUFRLENBQUNMLE1BQUQsQyxVQUdSSyxRQUFRLENBQUNFLEVBQUUsQ0FBQ0MsS0FBSixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR0Q7QUFBQTs7QUFDSjtBQUNBRCxZQUFBQSxFQUFFLENBQUNFLFdBQUgsQ0FBZUMsRUFBZixDQUFrQlgsSUFBSSxDQUFDWSxTQUFMLENBQWVDLFNBQWpDLEVBQTRDLFlBQU07QUFDOUNDLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7O0FBQ0EsY0FBQSxNQUFJLENBQUNDLElBQUw7QUFDSCxhQUhEO0FBSUg7OztpQ0FFTTtBQUNILGdCQUFJQyxJQUFJLEdBQUdmLFdBQVcsQ0FBQyxLQUFLZ0IsTUFBTixDQUF0QjtBQUNBRCxZQUFBQSxJQUFJLENBQUNFLE1BQUwsR0FBYyxLQUFLRixJQUFMLENBQVVFLE1BQXhCO0FBQ0FGLFlBQUFBLElBQUksQ0FBQ0csUUFBTCxHQUFnQixLQUFLSCxJQUFMLENBQVVHLFFBQTFCO0FBQ0EsZ0JBQUlGLE1BQTBCLEdBQUdELElBQUksQ0FBQ0ksWUFBTCxDQUFrQmxCLGtCQUFsQixDQUFqQztBQUNBZSxZQUFBQSxNQUFNLENBQUNJLFlBQVAsQ0FBb0IsSUFBSWxCLElBQUosQ0FBUyxDQUFULEVBQVksQ0FBWixFQUFlLENBQUMsQ0FBRCxHQUFLLEtBQUttQixLQUF6QixDQUFwQixFQUxHLENBTUg7QUFFSCxXLENBRUQ7QUFDQTtBQUNBOzs7O1FBNUIwQnhCLFM7Ozs7O2lCQUdULEk7Ozs7Ozs7aUJBR1QsQzs7OztvQkFSTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgUHJlZmFiLCBpbnN0YW50aWF0ZSwgUmlnaWRCb2R5Q29tcG9uZW50LCBWZWMzIH0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIlNob290TWdyXCIpXHJcbmV4cG9ydCBjbGFzcyBTaG9vdE1nciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KFByZWZhYilcclxuICAgIGJ1bGxldDogUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXHJcbiAgICBzcGVlZCA9IDI7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b3VjaGVuZCcpO1xyXG4gICAgICAgICAgICB0aGlzLmZpcmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaXJlKCkge1xyXG4gICAgICAgIGxldCBub2RlID0gaW5zdGFudGlhdGUodGhpcy5idWxsZXQpO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICBub2RlLnBvc2l0aW9uID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgIGxldCBidWxsZXQ6IFJpZ2lkQm9keUNvbXBvbmVudCA9IG5vZGUuZ2V0Q29tcG9uZW50KFJpZ2lkQm9keUNvbXBvbmVudCk7XHJcbiAgICAgICAgYnVsbGV0LmFwcGx5SW1wdWxzZShuZXcgVmVjMygwLCAwLCAtMSAqIHRoaXMuc3BlZWQpKTtcclxuICAgICAgICAvLyBidWxsZXQuYXBwbHlJbXB1bHNlKG5ldyBWZWMzKDAsIDIuMjksIC0xICogdGhpcy5zcGVlZCkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==