"use strict";

System.register(["cc"], function (_export, _context) {
  "use strict";

  var _decorator, Component, Node, Vec3, macro, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, ccclass, property, Movement;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      macro = _cc.macro;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "12a92dT1fhLZIalEszg/o2S", "Movement"); // begin Movement


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Movement", Movement = (_dec = ccclass("Movement"), _dec2 = property(Node), _dec3 = property(Vec3), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(Movement, _Component);

        function Movement() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, Movement);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(Movement)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "speed", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "camera", _descriptor2, babelHelpers.assertThisInitialized(_this));
          _this.offset = null;
          _this.startPoint = null;
          babelHelpers.initializerDefineProperty(_this, "cameraStartPos", _descriptor3, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(Movement, [{
          key: "start",
          value: function start() {
            // Your initialization goes here.
            this.init();
          }
        }, {
          key: "onEnable",
          value: function onEnable() {
            cc.systemEvent.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
            cc.systemEvent.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
            cc.systemEvent.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
            cc.systemEvent.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
            cc.systemEvent.on(Node.EventType.KEY_DOWN, this.onKeyDown, this);
          }
        }, {
          key: "onDisable",
          value: function onDisable() {
            cc.systemEvent.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
            cc.systemEvent.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
            cc.systemEvent.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
            cc.systemEvent.off(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
          }
        }, {
          key: "init",
          value: function init() {
            this.offset = new Vec3(0, 0, 0);
          }
        }, {
          key: "onTouchStart",
          value: function onTouchStart(event) {
            this.startPoint = event.getLocation();
          }
        }, {
          key: "onTouchMove",
          value: function onTouchMove(event) {
            var cur = event.getLocation();
            var offsetX = this.startPoint.x - cur.x;
            var offsetY = this.startPoint.y - cur.y;
            console.log('cur', offsetX, offsetY);
            this.offset.x = offsetX > 0 ? 1 : -1;
            this.offset.y = offsetY > 0 ? 1 : -1; // this.startPoint = cur;
          }
        }, {
          key: "onKeyDown",
          value: function onKeyDown(event) {
            console.log('event', event);

            switch (event.keyCode) {
              case macro.KEY.space:
                {
                  this.camera.setPosition(this.cameraStartPos);
                }
                break;

              default:
                break;
            }
          }
        }, {
          key: "onTouchEnd",
          value: function onTouchEnd() {
            this.offset.x = this.offset.y = 0;
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            this.camera.translate(this.offset.multiplyScalar(deltaTime * this.speed));
          }
        }]);
        return Movement;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "camera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "cameraStartPos", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end Movement

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvTW92ZW1lbnQudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJWZWMzIiwibWFjcm8iLCJjY2NsYXNzIiwicHJvcGVydHkiLCJNb3ZlbWVudCIsIm9mZnNldCIsInN0YXJ0UG9pbnQiLCJpbml0IiwiY2MiLCJzeXN0ZW1FdmVudCIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJvblRvdWNoU3RhcnQiLCJUT1VDSF9NT1ZFIiwib25Ub3VjaE1vdmUiLCJUT1VDSF9FTkQiLCJvblRvdWNoRW5kIiwiVE9VQ0hfQ0FOQ0VMIiwiS0VZX0RPV04iLCJvbktleURvd24iLCJvZmYiLCJldmVudCIsImdldExvY2F0aW9uIiwiY3VyIiwib2Zmc2V0WCIsIngiLCJvZmZzZXRZIiwieSIsImNvbnNvbGUiLCJsb2ciLCJrZXlDb2RlIiwiS0VZIiwic3BhY2UiLCJjYW1lcmEiLCJzZXRQb3NpdGlvbiIsImNhbWVyYVN0YXJ0UG9zIiwiZGVsdGFUaW1lIiwidHJhbnNsYXRlIiwibXVsdGlwbHlTY2FsYXIiLCJzcGVlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEksT0FBQUEsSTtBQUFtQkMsTUFBQUEsSyxPQUFBQSxLOzs7K0VBRWdCOzs7QUFEakVDLE1BQUFBLE8sR0FBc0JMLFUsQ0FBdEJLLE87QUFBU0MsTUFBQUEsUSxHQUFhTixVLENBQWJNLFE7OzBCQUdKQyxRLFdBRFpGLE9BQU8sQ0FBQyxVQUFELEMsVUFLSEMsUUFBUSxDQUFDSixJQUFELEMsVUFLUkksUUFBUSxDQUFDSCxJQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBRlRLLE0sR0FBZSxJO2dCQUNmQyxVLEdBQW1CLEk7Ozs7Ozs7a0NBSVg7QUFDSjtBQUNB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O3VDQUVZO0FBQ1QsaUJBQUsvQixNQUFMLENBQVlxQixDQUFaLEdBQWdCLEtBQUtyQixNQUFMLENBQVl1QixDQUFaLEdBQWdCLENBQWhDO0FBQ0g7OztpQ0FFTVMsUyxFQUFtQjtBQUN0QixpQkFBS0gsTUFBTCxDQUFZSSxTQUFaLENBQXNCLEtBQUtqQyxNQUFMLENBQVlrQyxjQUFaLENBQTJCRixTQUFTLEdBQUcsS0FBS0csS0FBNUMsQ0FBdEI7QUFDSDs7O1FBeEV5QjFDLFMsNkZBQ3pCSyxROzs7OztpQkFDTyxDOzs7Ozs7O2lCQUdPLEk7Ozs7Ozs7aUJBS1EsSTs7OztvQkFaVCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVmVjMywgVmVjMiwgVG91Y2gsIG1hY3JvIH0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIk1vdmVtZW50XCIpXHJcbmV4cG9ydCBjbGFzcyBNb3ZlbWVudCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHlcclxuICAgIHNwZWVkID0gNTtcclxuXHJcbiAgICBAcHJvcGVydHkoTm9kZSlcclxuICAgIGNhbWVyYTogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgb2Zmc2V0OiBWZWMzID0gbnVsbDtcclxuICAgIHN0YXJ0UG9pbnQ6IFZlYzIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KFZlYzMpXHJcbiAgICBjYW1lcmFTdGFydFBvczogVmVjMyA9IG51bGw7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKE5vZGUuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihOb2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihOb2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihOb2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLm9mZnNldCA9IG5ldyBWZWMzKDAsIDAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hTdGFydChldmVudDogVG91Y2gpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0UG9pbnQgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hNb3ZlKGV2ZW50OiBUb3VjaCkge1xyXG4gICAgICAgIGxldCBjdXIgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIGxldCBvZmZzZXRYID0gdGhpcy5zdGFydFBvaW50LnggLSBjdXIueDtcclxuICAgICAgICBsZXQgb2Zmc2V0WSA9IHRoaXMuc3RhcnRQb2ludC55IC0gY3VyLnk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2N1cicsIG9mZnNldFgsIG9mZnNldFkpO1xyXG5cclxuICAgICAgICB0aGlzLm9mZnNldC54ID0gb2Zmc2V0WCA+IDAgPyAxIDogLTE7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQueSA9IG9mZnNldFkgPiAwID8gMSA6IC0xO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnN0YXJ0UG9pbnQgPSBjdXI7XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlEb3duKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2V2ZW50JywgZXZlbnQpO1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIG1hY3JvLktFWS5zcGFjZTpcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYS5zZXRQb3NpdGlvbih0aGlzLmNhbWVyYVN0YXJ0UG9zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoRW5kKCkge1xyXG4gICAgICAgIHRoaXMub2Zmc2V0LnggPSB0aGlzLm9mZnNldC55ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmNhbWVyYS50cmFuc2xhdGUodGhpcy5vZmZzZXQubXVsdGlwbHlTY2FsYXIoZGVsdGFUaW1lICogdGhpcy5zcGVlZCkpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==