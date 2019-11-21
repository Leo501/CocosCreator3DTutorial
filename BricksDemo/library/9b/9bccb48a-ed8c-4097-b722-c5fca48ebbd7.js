"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _decorator, Component, Vec3, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, Bullet;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "9bccbSK7YxAl7cixfykjrvX", "Bullet"); // begin Bullet


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Bullet", Bullet = (_dec = ccclass("Bullet"), _dec2 = property(Vec3), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(Bullet, _Component);

        function Bullet() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, Bullet);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(Bullet)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "destroyLocation", _descriptor, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(Bullet, [{
          key: "start",
          value: function start() {
            // Your initialization goes here.
            console.log('Node', this.node);
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            // Your update function goes here.
            if (this.node.position.y < this.destroyLocation.y) {
              console.log('destroy instance');
              this.node.destroy();
            }
          }
        }]);
        return Bullet;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "destroyLocation", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end Bullet

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvQnVsbGV0LnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJWZWMzIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQnVsbGV0IiwiY29uc29sZSIsImxvZyIsIm5vZGUiLCJkZWx0YVRpbWUiLCJwb3NpdGlvbiIsInkiLCJkZXN0cm95TG9jYXRpb24iLCJkZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsSSxPQUFBQSxJOzs7NkVBRW1DOzs7QUFEakVDLE1BQUFBLE8sR0FBc0JILFUsQ0FBdEJHLE87QUFBU0MsTUFBQUEsUSxHQUFhSixVLENBQWJJLFE7O3dCQUdKQyxNLFdBRFpGLE9BQU8sQ0FBQyxRQUFELEMsVUFHSEMsUUFBUSxDQUFDRixJQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdEO0FBQ0o7QUFDQUksWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQixLQUFLQyxJQUF6QjtBQUVIOzs7aUNBRU1DLFMsRUFBbUI7QUFDdEI7QUFDQSxnQkFBSSxLQUFLRCxJQUFMLENBQVVFLFFBQVYsQ0FBbUJDLENBQW5CLEdBQXVCLEtBQUtDLGVBQUwsQ0FBcUJELENBQWhELEVBQW1EO0FBQy9DTCxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQUNBLG1CQUFLQyxJQUFMLENBQVVLLE9BQVY7QUFDSDtBQUNKOzs7UUFqQnVCWixTOzs7OztpQkFHQSxJOzs7O29CQUxWIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBWZWMzIH0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIkJ1bGxldFwiKVxyXG5leHBvcnQgY2xhc3MgQnVsbGV0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoVmVjMylcclxuICAgIGRlc3Ryb3lMb2NhdGlvbjogVmVjMyA9IG51bGw7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ05vZGUnLCB0aGlzLm5vZGUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5wb3NpdGlvbi55IDwgdGhpcy5kZXN0cm95TG9jYXRpb24ueSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGVzdHJveSBpbnN0YW5jZScpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=