import React from "react";
import firebase from "firebase/app";
import 'firebase/firebase-auth';
import PropTypes from "prop-types";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login from "./Login";
import base, { firebaseApp } from "../base";

class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    editFish: PropTypes.func,
    deleteFish: PropTypes.func,
    addFish: PropTypes.func,
    loadSample: PropTypes.func,
  };

  state = {
    uid: null,
    owner: null,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.authHandler(user);
      }
    })
  }

  authHandler = async (authData) => {
    // 1. look up the current store in the firebase database
    const store = await base.fetch(this.props.storeId, { context: this });
    const user = authData.user ? authData.user : authData
    console.log(store);
    // 2. claim it if there is no owner
    if (!store.owner) {
      // save it as your own
      await base.post(`${this.props.storeId}/owner`, {
        data: user.uid,
      });
    }
    // 3. set the state of the invetory component to reflect the current user
    this.setState({
      uid: user.uid,
      owner: store.owner || authData.uid,
    });
  };

  authenticate = (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
  };

  logout = async () => {
    await firebase.auth().signOut();
    this.setState({
      uid: null,
    });
  };

  render() {
    const logout = <button onClick={this.logout}>Log out!</button>;
    // 1. check if they are logged in
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }

    // 2. check if they are not the owner of the store
    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>You are not the owner!</p>
          {logout}
        </div>
      );
    }

    // 3. they must be owner, jus render the inventory
    return (
      <div className="inventory">
        <h2>Inventory !</h2>
        {logout}
        {Object.keys(this.props.fishes).map((key) => (
          <EditFishForm
            key={key}
            index={key}
            fish={this.props.fishes[key]}
            editFish={this.props.editFish}
            deleteFish={this.props.deleteFish}
          />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes!!!
        </button>
      </div>
    );
  }
}

export default Inventory;
