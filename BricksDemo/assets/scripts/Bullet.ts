import { _decorator, Component, Node, Vec3 } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Bullet")
export class Bullet extends Component {

    @property(Vec3)
    destroyLocation: Vec3 = null;

    start() {
        // Your initialization goes here.
        console.log('Node', this.node);

    }

    update(deltaTime: number) {
        // Your update function goes here.
        if (this.node.position.y < this.destroyLocation.y) {
            console.log('destroy instance');
            this.node.destroy();
        }
    }
}
