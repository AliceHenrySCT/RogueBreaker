import { SharedValue } from "react-native-reanimated";

type ShapeVariant = "Circle";

export interface ShapeInterface {
    x: SharedValue<number>;
    y: SharedValue<number>;
    ax: number;
    ay: number;
    vx: number;
    vy: number;
    type: ShapeVariant;
    id: number;
}

export interface CircleInterface extends ShapeInterface{
    type: "Circle";
    r:number;
}