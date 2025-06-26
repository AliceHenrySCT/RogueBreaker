import { SharedValue } from "react-native-reanimated";
import { MAX_SPEED, RADIUS } from "./constants";
import { CircleInterface, ShapeInterface } from "./types";


export const createBouncingExample = (CircleObject: CircleInterface) => {
    "worklet"

    CircleObject.x.value = 100;
    CircleObject.y.value = 450;
    CircleObject.r = RADIUS;
    CircleObject.ax = 0.5;
    CircleObject.ay = 1;
    CircleObject.vx = 0;
    CircleObject.vy = 0;
}

const move = (object: ShapeInterface, dt: number) => {
    "worklet";

    object.vx += object.ax * dt
    object.vy += object.ay * dt

    if(object.vx > MAX_SPEED){
        object.vx = MAX_SPEED;
    }
    if(object.vy > MAX_SPEED){
        object.vy = MAX_SPEED;
    }
    if(object.vx < -MAX_SPEED){
        object.vx = -MAX_SPEED;
    }
    if(object.vy < -MAX_SPEED){
        object.vy = -MAX_SPEED;
    }
}

export const animate = (
    objects: ShapeInterface[],
    timeSincePreviousFrame: number,
    brickCount: number
) => {
    "worklet"

    for(const o of objects) {
        if(o.type === "Circle") {
            move(o, 0.15)
        }
    }
}