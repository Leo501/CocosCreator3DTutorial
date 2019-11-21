import { _decorator, Component, Node, Prefab, instantiate, RigidBodyComponent, Vec3 } from "cc";
const { ccclass, property } = _decorator;

@ccclass("ShootMgr")
export class ShootMgr extends Component {

    @property(Prefab)
    bullet: Prefab = null;

    @property(cc.Float)
    speed = 2;

    start() {
        // Your initialization goes here.
        cc.systemEvent.on(Node.EventType.TOUCH_END, () => {
            console.log('touchend');
            this.fire();
        });
    }

    fire() {
        let node = instantiate(this.bullet);
        node.parent = this.node.parent;
        node.position = this.node.position;
        let bullet: RigidBodyComponent = node.getComponent(RigidBodyComponent);
        bullet.applyImpulse(new Vec3(0, 0, -1 * this.speed));
        // bullet.applyImpulse(new Vec3(0, 2.29, -1 * this.speed));

    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
