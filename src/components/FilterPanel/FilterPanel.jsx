import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import React, { Component } from 'react';

export default class FilterPanel extends Component {
  constructor() {
    super();

    this.onClick = (e) => {
      document
        .querySelectorAll('.filters-panel .button')
        .forEach((item) => item.classList.remove('active'));
      e.target.classList.add('active');
      this.props.setFilter(e.target.dataset.filter);
    };
  }
  render() {
    const { setSearchString } = this.props;
    return (
      <div className="flex gap-1 filters-panel">
        <Input
          type="search"
          placeholder="search"
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
        />
        <Button dataFilter="all" onClick={this.onClick}>
          All
        </Button>
        <Button dataFilter="active" onClick={this.onClick}>
          Active
        </Button>
        <Button dataFilter="done" onClick={this.onClick}>
          Done
        </Button>
      </div>
    );
  }
}
