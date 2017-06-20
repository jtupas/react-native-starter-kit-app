import React from 'react';
import {
    Container,
    Content,
    List,
    ListItem,
    Text,
    Header,
} from 'native-base';
import {
	Actions,
	ActionConst,
} from 'react-native-router-flux';
import strings from '../../config/constants';
import { connect } from 'react-redux';
import { closeDrawer } from '../../actions/drawerActions';

var sideBar = React.createClass({
    render() {
        return (
            <Container>
                <Header />
                <Content style={{ flex: 1, backgroundColor: '#fff', top: -1 }}>
                    <List>
                        <ListItem button onPress={() => {Actions.camera({type: ActionConst.REPLACE }); this.props.closeMenu();} }>
                            <Text>{strings.header_camera}</Text>
                        </ListItem>
                        <ListItem button onPress={() => {Actions.storage({type: ActionConst.REPLACE }); this.props.closeMenu();} }>
                            <Text>{strings.header_storage}</Text>
                        </ListItem>
                        <ListItem button onPress={() => {Actions.contactlist({type: ActionConst.REPLACE }); this.props.closeMenu();} }>
                            <Text>{strings.header_contacts}</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
});

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
	closeMenu: () => dispatch(closeDrawer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(sideBar); 