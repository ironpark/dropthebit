import * as React from 'react';
import "./editor.scss"
import _ from 'lodash';
import {
    DiagramWidget,
    DiagramEngine,
    DefaultNodeFactory,
    DefaultLinkFactory,
    DefaultNodeModel,
    DefaultPortModel
} from "storm-react-diagrams";

import Inventory from '../components/inventory/inventory'
import ItemWidget from "../components/inventory/item";
import {NodeModel} from "storm-react-diagrams/src/models/NodeModel";
import {Alignment, Button, Divider, InputGroup, Navbar, Tab, Tabs} from "@blueprintjs/core";

class DropManager {
    public engine: DiagramEngine;
    private component: React.Component;
    private nodes: NodeModel[];

    constructor(jsx: React.Component) {
        this.engine = new DiagramEngine();
        this.engine.registerNodeFactory(new DefaultNodeFactory());
        this.engine.registerLinkFactory(new DefaultLinkFactory());
        this.nodes = [];
        this.component = jsx;
    }

    private nodeFactory(t: string) {
        let node = null;
        if (t === 'in-out') {
            node = new DefaultNodeModel('Node ' + (this.nodes.length), 'peru');
            node.addPort(new DefaultPortModel(true, 'in-1', 'In'));
            node.addPort(new DefaultPortModel(false, 'out-1', 'Out'));
        } else if (t === 'in') {
            node = new DefaultNodeModel('Node ' + (this.nodes.length), 'peru');
            node.addPort(new DefaultPortModel(true, 'in-1', 'In'));
        } else {
            node = new DefaultNodeModel('Node ' + (this.nodes.length), 'hotpink');
            node.addPort(new DefaultPortModel(false, 'out-1', 'Out'));
        }
        this.nodes.push(node);
        return node;
    }

    onDrop(event) {
        let data = JSON.parse(event.dataTransfer.getData('storm-diagram-node'));
        // let length = _.keys(this.model.getNodes()).length;
        let node = this.nodeFactory(data.type);
        let points = this.engine.getRelativeMousePoint(event);
        node.x = points.x;
        node.y = points.y;
        this.engine.getDiagramModel().addNode(node);
        this.component.forceUpdate();
    }

    get model() {
        return this.engine.getDiagramModel()
    }
}

class FlowEditor extends React.Component {
    private dm: DropManager;

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.dm = new DropManager(this);
    }

    handleTabChange() {

    }

    public render(): JSX.Element {
        return (
            <React.Fragment>
                <div className={"container"}>
                    <Navbar className={"bp3-dark"}>
                        <Navbar.Group align={Alignment.LEFT}>
                            <Navbar.Heading>Drop The BIT</Navbar.Heading>
                            <Navbar.Divider/>
                            <Button className="bp3-minimal" icon="home" text="Home"/>
                            <Button className="bp3-minimal" icon="document" text="Files"/>
                        </Navbar.Group>
                        <Navbar.Group align={Alignment.RIGHT}>

                        </Navbar.Group>
                    </Navbar>
                    <div className={"contents"}>
                        <div className={"inventory"}>
                            <InputGroup
                                disabled={false}
                                large={false}
                                leftIcon="search"
                                // onChange=
                                placeholder="block.."
                                // rightElement={maybeSpinner}
                                // value={filterValue}
                            />
                            <Divider></Divider>
                            <div className={"list"}>
                                Trigger
                                <Divider></Divider>
                                <ItemWidget model={{type: 'out'}} name="Alarm" color="peru"/>
                                <ItemWidget model={{type: 'in-out'}} name="WebHook" color="hotpink"/>
                                <ItemWidget model={{type: 'in'}} name="Watch & Change" color="hotpink"/>
                                <ItemWidget model={{type: 'in-out'}} name="Loops" color="hotpink"/>
                                Source
                                <Divider></Divider>
                                <ItemWidget model={{type: 'in'}} name="HTTP/HTTPS" color="hotpink"/>
                                Process
                                <Divider></Divider>
                                <ItemWidget model={{type: 'in'}} name="Data Merge" color="hotpink"/>
                                <ItemWidget model={{type: 'in'}} name="Filter" color="hotpink"/>
                                <ItemWidget model={{type: 'in'}} name="Convert" color="hotpink"/>
                                Store
                                <Divider></Divider>
                                <ItemWidget model={{type: 'in'}} name="SQLite" color="hotpink"/>
                                <ItemWidget model={{type: 'in'}} name="PostgreSQL" color="hotpink"/>
                                <ItemWidget model={{type: 'in'}} name="File" color="hotpink"/>
                            </div>
                        </div>

                        <div className="diagram-layer"
                             onDrop={(event) => {
                                 this.dm.onDrop(event);
                             }}
                             onDragOver={event => {
                                 event.preventDefault();
                             }}>
                            <DiagramWidget className="srd-demo-canvas" diagramEngine={this.dm.engine}/>;
                        </div>

                        <div className={"property"}>

                            <Tabs id="TabsExample" onChange={this.handleTabChange} selectedTabId="ng">
                                <Tab id="ng" title="basic"/>
                                <Tab id="mb" title="request"/>
                                <Tab id="rx" title="auth"/>
                            </Tabs>
                        </div>
                    </div>
                    <div className={"console"}>
                        asd
                    </div>
                </div>

            </React.Fragment>
        )
    }
}


export default FlowEditor;