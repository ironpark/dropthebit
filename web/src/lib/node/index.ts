import * as _ from "lodash";
import { DefaultPortModel } from "../port";

import { NodeModel } from "storm-react-diagrams";
import { Toolkit } from "storm-react-diagrams";
import { DiagramEngine } from "storm-react-diagrams";

/**
 * @author Dylan Vorster
 */
export class DefaultNodeModel extends NodeModel {
    public name: string;
    public color: string;
    public ports: { [s: string]: DefaultPortModel };

    constructor(name: string = "Untitled", color: string = "rgb(0,192,255)") {
        super("default");
        this.name = name;
        this.color = color;
        this.width = 100;
        this.addPort(new DefaultPortModel(true, Toolkit.UID(), "eeeeee"));
        this.addPort(new DefaultPortModel(true, Toolkit.UID(), "asdas"));
    }

    public addInPort(label: string): DefaultPortModel {
        return this.addPort(new DefaultPortModel(true, Toolkit.UID(), label));
    }

    public addOutPort(label: string): DefaultPortModel {
        return this.addPort(new DefaultPortModel(false, Toolkit.UID(), label));
    }

    public deSerialize(object, engine: DiagramEngine) {
        super.deSerialize(object, engine);
        this.name = object.name;
        this.color = object.color;
    }

    public serialize() {
        return _.merge(super.serialize(), {
            name: this.name,
            color: this.color
        });
    }

    public getInPorts(): DefaultPortModel[] {
        return _.filter(this.ports, portModel => {
            return portModel.in;
        });
    }

    public getOutPorts(): DefaultPortModel[] {
        return _.filter(this.ports, portModel => {
            return !portModel.in;
        });
    }
}

export default DefaultNodeModel