import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addFish } from '../../actions/fishAction';

class FishForm extends Component {
  state = {
    name: '',
    type: '',
  };

  onchange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newFish = {
      id: uuidv4(),
      name: this.state.name,
      type: this.state.type,
    };
    this.props.addFish(newFish);
    this.setState({ name: '', type: '' });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h2>Add Fishes</h2>
        <input
          type='text'
          placeholder='Fish Name'
          name='name'
          onChange={this.onchange}
          className='my-3'
        />
        <input
          type='text'
          placeholder='Fish Type'
          name='type'
          onChange={this.onchange}
          className='my-3'
        />
        <div>
          <input
            type='submit'
            value='Add Fishes'
            className='btn btn-primary btn-block'
          />
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  fish: state.fish,
});
export default connect(mapStateToProps, { addFish })(FishForm);
