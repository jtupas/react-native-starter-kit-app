import React from 'react';
import {
  Container,
  Content,
  Item,
  InputGroup,
  Input,
  Spinner,
} from 'native-base';
import {
  Actions,
  ActionConst,
} from 'react-native-router-flux';
import { connect } from 'react-redux';


import { addUser, updateUser, resetState } from '../../actions/contactActions';
import {
  setFirstName,
  setLastName,
  setAddress,
  setEmail,
  setContactNumber,
  setAll,
  setNew,
} from '../../actions/contactDetailActions';

import Header from '../components/header';

const Details = React.createClass({

  componentWillMount() {
    if (this.props.user) {
      this.props.all(this.props.user);
    } else {
      this.props.setnew();
    }
  },

  renderSpinner() {
    if (this.props.isfetching) {
      return <Spinner />;
    }
    return null;
  },

  renderAlert() {
    if (this.props.alertmessage) {
      alert(this.props.alertmessage);
      this.props.resetAll();
    }
  },

  render() {
    return (
      <Container>
        <Header
          headerTitle="Details"
          leftTitle="Back"
          leftIcon="ios-arrow-back"
          leftAction={() => {
            this.props.setnew();
            Actions.pop();
          }}
          rightTitle="Save"
          rightAction={() => {
            const data = {
              first_name: this.props.firstname,
              last_name: this.props.lastname,
              address: this.props.address,
              email: this.props.email,
              contact_number: this.props.contactnumber,
              _id: this.props._id,
            };

            if (this.props.isnew) {
              this.props.add(data);
            } else {
              this.props.update(data);
            }
          }}
        />

        {this.renderSpinner()}
        {this.renderAlert()}

        <Content>
          <Item regular>
            <Input
              placeholder="First Name"
              value={this.props.firstname}
              onChangeText={(text) => { this.props.setfirstname(text); }}
            />
          </Item>
          <Item regular>
            <Input
              placeholder="Last Name"
              value={this.props.lastname}
              onChangeText={(text) => { this.props.setlastname(text); }}
            />
          </Item>
          <Item regular>
            <Input
              placeholder="Address"
              value={this.props.address}
              onChangeText={(text) => { this.props.setaddress(text); }}
            />
          </Item>
          <Item regular>
            <Input
              placeholder="Email"
              value={this.props.email}
              onChangeText={(text) => { this.props.setemail(text); }}
            />
          </Item>
          <Item regular>
            <Input
              placeholder="Contact Number"
              value={this.props.contactnumber}
              onChangeText={(text) => { this.props.setcontactnumber(text); }}
            />
          </Item>
        </Content>
      </Container>
    );
  },
});

const mapStateToProps = state => ({
  firstname: state.contactDetail.first_name,
  lastname: state.contactDetail.last_name,
  address: state.contactDetail.address,
  email: state.contactDetail.email,
  contactnumber: state.contactDetail.contact_number,
  _id: state.contactDetail._id,

  isnew: state.contactDetail.isNew,

  isfetching: state.contact.fetching,
  alertmessage: state.contact.alertMessage,
});

const mapDispatchToProps = dispatch => ({
  update: data => dispatch(updateUser(data)),
  add: data => dispatch(addUser(data)),
  all: data => dispatch(setAll(data)),
  resetAll: () => dispatch(resetState()),

  setnew: () => dispatch(setNew()),
  setfirstname: data => dispatch(setFirstName(data)),
  setlastname: data => dispatch(setLastName(data)),
  setaddress: data => dispatch(setAddress(data)),
  setemail: data => dispatch(setEmail(data)),
  setcontactnumber: data => dispatch(setContactNumber(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
