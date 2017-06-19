import React from 'react';
import {
    Container,
    Content,
    List,
    ListItem,
    Text,
    Header,
} from 'native-base';

export default React.createClass({
    render() {
        const testList = ['test1', 'test2'];
        return (
            <Container>
                <Header />
                <Content style={{ flex: 1, backgroundColor: '#fff', top: -1 }}>
                    <List 	dataArray={testList}
                            renderRow={(item) => 
                            <ListItem button>
                                <Text>{item}</Text>
                            </ListItem> } >
                    </List>
                </Content>
            </Container>
        )
    }
});