import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import React, { Component } from 'react';

export default class FilterPanel extends Component {
  render() {
    return (
      <div className="flex gap-1">
        <Input type="search" placeholder="search" />
        <Button active>All</Button>
        <Button>Active</Button>
        <Button>Done</Button>
      </div>
    );
  }
}
