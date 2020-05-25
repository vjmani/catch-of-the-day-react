import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import Fish from "./Fish";
import base from "../base";

import fishes from "../sample-fishes";

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  static propTypes = {
    match: PropTypes.object
  }

  componentDidMount() {
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes",
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = (fish) => {
    // 1. copy the existing state
    const fishes = { ...this.state.fishes };

    // 2. add fish to the copied state
    fishes[`fish${Date.now()}`] = fish;

    // 3. update the state
    this.setState({ fishes: fishes });
  };

  editFish = (key, fish) => {
    const fishes = { ...this.state.fishes };
    fishes[key] = fish;
    this.setState({ fishes });
  };

  deleteFish = (key) => {
    // 1. copy the existing state
    const fishes = { ...this.state.fishes };
    // 2. update the state variable
    fishes[key] = null;
    // 3. update the state
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: fishes });
  };

  addToOrder = (key) => {
    // 1. take the copy of state
    const order = { ...this.state.order };
    // 2. Add order
    order[key] = order[key] + 1 || 1;
    // 3. Update state
    this.setState({ order });
  };

  deleteOrder = (key) => {
    // 1. take the copy of state
    const order = { ...this.state.order };
    // 2. delete order
    delete order[key];
    // 3. Update state
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul>
            {Object.keys(this.state.fishes).map((key) => (
              <Fish
                key={key}
                details={this.state.fishes[key]}
                index={key}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          deleteOrder={this.deleteOrder}
        />
        <Inventory
          addFish={this.addFish}
          editFish={this.editFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
          storeId={this.props.match.params.storeId}
        />
      </div>
    );
  }
}

export default App;
