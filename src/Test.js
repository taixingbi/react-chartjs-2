import React, {Component} from 'react';

export default class Test extends Component {
  state = {
    id: null,
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.setState({ id: id });

    console.log(id);
  }

  render() {
    const { id } = this.state;

    return (

      <div>
        <h2>session_id {id}</h2>
      </div>
    );
  }

}