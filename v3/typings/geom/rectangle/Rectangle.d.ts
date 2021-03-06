import Area from './Area';
import Ceil from './Ceil';
import CeilAll from './CeilAll';
import CenterOn from './CenterOn';
import Clone from './Clone';
import Contains from './Contains';
import ContainsPoint from './ContainsPoint';
import ContainsRect from './ContainsRect';
import CopyFrom from './CopyFrom';
import Equals from './Equals';
import FitInside from './FitInside';
import FitOutside from './FitOutside';
import Floor from './Floor';
import FloorAll from './FloorAll';
import GetAspectRatio from './GetAspectRatio';
import GetCenter from './GetCenter';
import GetSize from './GetSize';
import Inflate from './Inflate';
import MergePoints from './MergePoints';
import MergeRect from './MergeRect';
import MergeXY from './MergeXY';
import Offset from './Offset';
import OffsetPoint from './OffsetPoint';
import Overlaps from './Overlaps';
import Perimeter from './Perimeter';
import Random from './Random';
import Scale from './Scale';
import Union from './Union';
export default class Rectangle {
    x: any;
    y: any;
    width: any;
    height: any;
    static Area: typeof Area;
    static Ceil: typeof Ceil;
    static CeilAll: typeof CeilAll;
    static CenterOn: typeof CenterOn;
    static Clone: typeof Clone;
    static Contains: typeof Contains;
    static ContainsPoint: typeof ContainsPoint;
    static ContainsRect: typeof ContainsRect;
    static CopyFrom: typeof CopyFrom;
    static Equals: typeof Equals;
    static FitInside: typeof FitInside;
    static FitOutside: typeof FitOutside;
    static Floor: typeof Floor;
    static FloorAll: typeof FloorAll;
    static GetAspectRatio: typeof GetAspectRatio;
    static GetCenter: typeof GetCenter;
    static GetSize: typeof GetSize;
    static Inflate: typeof Inflate;
    static MergePoints: typeof MergePoints;
    static MergeRect: typeof MergeRect;
    static MergeXY: typeof MergeXY;
    static Offset: typeof Offset;
    static OffsetPoint: typeof OffsetPoint;
    static Overlaps: typeof Overlaps;
    static Perimeter: typeof Perimeter;
    static Random: typeof Random;
    static Scale: typeof Scale;
    static Union: typeof Union;
    constructor(x?: number, y?: number, width?: number, height?: number);
    setTo(x: any, y: any, width: any, height: any): this;
    setEmpty(): this;
    setPosition(x: any, y: any): this;
    setSize(width: any, height: any): this;
    isEmpty(): boolean;
    left: any;
    right: any;
    top: any;
    bottom: any;
}
