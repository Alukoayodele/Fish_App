import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFishes } from '../../actions/fishAction';
class FishList extends Component {
  componentDidMount() {
    this.props.getFishes();
  }
  render() {
    const { fishes } = this.props.fish;
    console.log(fishes);
    return (
      <section>
        {fishes.map(({ id, name, type }) => (
          <div
            key={id}
            className='card '
            style={{ width: '25rem', textAlign: 'center', marginLeft: '5rem' }}
          >
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <span>Name: </span>
                <strong>{name}</strong>
              </li>
              <li className='list-group-item'>
                <span>Type: </span>
                <strong>{type}</strong>
              </li>
            </ul>
          </div>
        ))}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  fish: state.fish,
});
export default connect(mapStateToProps, { getFishes })(FishList);
