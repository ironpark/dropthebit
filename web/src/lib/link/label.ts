import * as _ from "lodash";
import {LabelModel} from "storm-react-diagrams";
import {DiagramEngine} from "storm-react-diagrams";

export class DefaultLabelModel extends LabelModel {
    public label: string;

    constructor() {
        super("default");
        this.offsetY = -23;
    }

    public setLabel(label: string) {
        this.label = label;
    }

    public deSerialize(ob, engine: DiagramEngine) {
        super.deSerialize(ob, engine);
        this.label = ob.label;
    }

    public serialize() {
        return _.merge(super.serialize(), {
            label: this.label
        });
    }
}

export default DefaultLabelModel