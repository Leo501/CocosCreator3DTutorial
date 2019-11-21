import { _decorator, Component, Node, Vec3, Vec2, Touch, macro } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Movement")
export class Movement extends Component {
    @property
    speed = 5;

    @property(Node)
    camera: Node = null;

    offset: Vec3 = null;
    startPoint: Vec2 = null;
    @property(Vec3)
    cameraStartPos: Vec3 = null;

    start() {
        // Your initialization goes here.
        this.init();
    }

    onEnable() {
        cc.systemEvent.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        cc.systemEvent.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        cc.systemEvent.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        cc.systemEvent.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        cc.systemEvent.on(Node.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    onDisable() {
        cc.systemEvent.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
        cc.systemEvent.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        cc.systemEvent.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        cc.systemEvent.off(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }

    init() {
        this.offset = new Vec3(0, 0, 0);
    }

    onTouchStart(event: Touch) {
        this.startPoint = event.getLocation();
    }

    onTouchMove(event: Touch) {
        let cur = event.getLocation();
        let offsetX = this.startPoint.x - cur.x;
        let offsetY = this.startPoint.y - cur.y;
        console.log('cur', offsetX, offsetY);

        this.offset.x = offsetX > 0 ? 1 : -1;
        this.offset.y = offsetY > 0 ? 1 : -1;

        // this.startPoint = cur;
    }

    onKeyDown(event) {
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

    onTouchEnd() {
        this.offset.x = this.offset.y = 0;
    }

    update(deltaTime: number) {
        this.camera.translate(this.offset.multiplyScalar(deltaTime * this.speed));
    }
}
