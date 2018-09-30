import * as React from 'react';
import './item.scss'
export interface ItemWidgetProps {
    model: any,
    color?: string,
    name: string
}

export interface ItemWidgetState {

}

export default class ItemWidget extends React.Component<ItemWidgetProps, ItemWidgetState> {
    constructor(props: ItemWidgetProps) {
        super(props);
        this.state = {};
    }

    public render(): JSX.Element {
        return (
            <div
                style={{background: this.props.color}}
                draggable={true}
                onDragStart={event => {
                    event.dataTransfer.setData('storm-diagram-node', JSON.stringify(this.props.model));
                }}
                className="tray-item"
            >
                {this.props.name}
            </div>
        );
    }
}
