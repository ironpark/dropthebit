import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DiagramEngine, DiagramModel, LinkModel,DefaultLinkModel, DiagramWidget,DefaultNodeModel} from "storm-react-diagrams";
// import DefaultNodeModel from "../lib/node/index

class FlowEditor extends Component {
    constructor(props) {
        super(props);
        //1) setup the diagram engine
        this.engine = new DiagramEngine();
        this.engine.installDefaultFactories();

        //2) setup the diagram model
        let model = new DiagramModel();

        //3-A) create a default node
        var node1 = new DefaultNodeModel("Source", "rgb(0,192,255)");
        node1.width = 200;
        let port = node1.addOutPort("Out");
        let port3 = node1.addOutPort("In");
        node1.setPosition(100, 100);

        //3-B) create another default node
        var node2 = new DefaultNodeModel("Node 2", "rgb(192,255,0)");
        let port2 = node2.addInPort("In");
        node2.setPosition(400, 100);

        // link the ports
        let link1 = port.link(port2);

        //4) add the models to the root graph
        model.addAll(node1, node2, link1);

        //5) load model into engine
        this.engine.setDiagramModel(model);
    }

    render() {
//1) setup the diagram engine
        var engine = new DiagramEngine();
        engine.installDefaultFactories();

        //2) setup the diagram model
        var model = new DiagramModel();

        //3-A) create a default node
        var node1 = new DefaultNodeModel("Node 1", "rgb(0,192,255)");
        let port1 = node1.addOutPort("Out");
        node1.setPosition(100, 100);

        //3-B) create another default node
        var node2 = new DefaultNodeModel("Node 2", "rgb(192,255,0)");
        let port2 = node2.addInPort("In");
        node2.setPosition(400, 100);

        // link the ports
        let link1 = port1.link(port2);
        link1.addLabel("Hello World!");

        //4) add the models to the root graph
        model.addAll(node1, node2, link1);

        //5) load model into engine
        engine.setDiagramModel(model);


        return <DiagramWidget className="srd-demo-canvas" diagramEngine={engine} />;
    }
}

FlowEditor.propTypes = {};

export default FlowEditor;