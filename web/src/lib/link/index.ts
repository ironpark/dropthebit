/**
 * @author Dylan Vorster
 */
import * as _ from "lodash";
import {BaseEvent, DiagramEngine, LabelModel, LinkModel, LinkModelListener} from "storm-react-diagrams";
import {DefaultLabelModel} from "./label";

export interface DefaultLinkModelListener extends LinkModelListener {
    colorChanged?(event: BaseEvent<DefaultLinkModel> & { color: null | string }): void;

    widthChanged?(event: BaseEvent<DefaultLinkModel> & { width: 0 | number }): void;
}

export class DefaultLinkModel extends LinkModel<DefaultLinkModelListener> {
    public width: number;
    public color: string;
    public curvyness: number;

    constructor(type: string = "default") {
        super(type);
        this.color = "rgba(255,255,255,0.5)";
        this.width = 3;
        this.curvyness = 50;
    }

    public serialize() {
        return _.merge(super.serialize(), {
            width: this.width,
            color: this.color,
            curvyness: this.curvyness
        });
    }

    public deSerialize(ob, engine: DiagramEngine) {
        super.deSerialize(ob, engine);
        this.color = ob.color;
        this.width = ob.width;
        this.curvyness = ob.curvyness;
    }

    public addLabel(label: LabelModel | string) {
        if (label instanceof LabelModel) {
            return super.addLabel(label);
        }
        const labelOb = new DefaultLabelModel();
        labelOb.setLabel(label);
        return super.addLabel(labelOb);
    }

    public setWidth(width: number) {
        this.width = width;
        this.iterateListeners((listener: DefaultLinkModelListener, event: BaseEvent) => {
            if (listener.widthChanged) {
                listener.widthChanged({...event, width});
            }
        });
    }

    public setColor(color: string) {
        this.color = color;
        this.iterateListeners((listener: DefaultLinkModelListener, event: BaseEvent) => {
            if (listener.colorChanged) {
                listener.colorChanged({...event, color});
            }
        });
    }
}

export default DefaultLinkModel