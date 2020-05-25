import React from "react";
import PropTypes from "prop-types";

class EditFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      name: PropTypes.string,
      imag: PropTypes.string,
      desc: PropTypes.string,
      stat: PropTypes.string,
      price: PropTypes.number,
    }),
    index: PropTypes.string,
    editFish: PropTypes.func,
    deleteFish: PropTypes.func
  };

  handleChange = (event) => {
    const updatedState = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value,
    };

    this.props.editFish(this.props.index, updatedState);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          name="name"
          type="text"
          value={this.props.fish.name}
          onChange={this.handleChange}
        />
        <input
          name="price"
          type="text"
          value={this.props.fish.price}
          onChange={this.handleChange}
        />
        <select
          name="status"
          value={this.props.fish.status}
          onChange={this.handleChange}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          value={this.props.fish.desc}
          onChange={this.handleChange}
        ></textarea>
        <input
          name="image"
          value={this.props.fish.image}
          onChange={this.handleChange}
        />
        <button
          onClick={() => {
            this.props.deleteFish(this.props.index);
          }}
        >Remove Fish</button>
      </div>
    );
  }
}

export default EditFishForm;
