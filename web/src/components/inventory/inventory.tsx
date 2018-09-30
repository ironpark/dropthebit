import * as React from 'react';

export interface InventoryProps {
}

export interface InventoryState {
}

export default class Inventory extends React.Component<InventoryProps, InventoryState> {
    constructor(props: InventoryProps) {
        super(props);
        this.state = {};
    }

    public render(): JSX.Element {
        return (
            <div className="tray">
                {this.props.children}
            </div>
        );
    }
}
