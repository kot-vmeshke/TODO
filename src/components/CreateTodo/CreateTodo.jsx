import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

import React, { Component } from 'react';
class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      label: '',
    };
    this.setLabel = (value) => {
      this.setState(({ label }) => {
        return {
          label: value,
        };
      });
    };
  }

  render() {
    const { onAdd } = this.props;
    return (
      <form
        className="flex gap-1"
        onSubmit={(e) => {
          e.preventDefault();
          if (this.state.label.length) {
            onAdd(this.state.label);
            this.setState(({ label }) => {
              return {
                label: '',
              };
            });
          } else {
            alert('Add some text');
          }
        }}>
        <Input
          placeholder="Create new"
          onChange={(e) => this.setLabel(e.target.value)}
          value={this.state.label}
        />
        <Button>Create</Button>
      </form>
    );
  }
}

export default CreateTodo;
