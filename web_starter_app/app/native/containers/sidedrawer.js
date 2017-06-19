import React from 'react';
import {
	Drawer
} from 'native-base';
import { connect } from 'react-redux';
import SideBar from './sidebar';

var DrawerView = React.createClass({

	closeDrawer() {
		this.drawer._root.close()
	},
	
	openDrawer() {
		this.drawer._root.open()
	},

    render() {
        return (
            <Drawer
              ref={(ref) => { this.drawer = ref; }}
              content={<SideBar navigator={this.navigator} />}
              onClose={() => this.closeDrawer()} >
            </Drawer>
        )
    }
});

const mapStateToProps = state => ({
	isOpen: state.drawer.drawerOpen
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);