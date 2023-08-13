import TodoList from '../TodoList/TodoList';
import FilterPanel from '../FilterPanel/FilterPanel';
import AppHeader from '../AppHeader/AppHeader';
import CreateTodo from '../CreateTodo/CreateTodo';

import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoData: [],
      searchString: '',
      filterName: '',
    };
    this.deleteItem = (id) => {
      this.setState(({ todoData }) => {
        return {
          todoData: [...todoData.filter((item) => item.id !== id)],
        };
      });
    };
    this.addItem = (label) => {
      this.setState(({ todoData }) => {
        return {
          todoData: [
            ...todoData,
            {
              label,
              important: false,
              id: Math.round(Date.now() * Math.random()),
              done: false,
            },
          ],
        };
      });
    };
    this.toggleImportant = (id) => {
      this.setState(({ todoData }) => {
        const newData = [];
        todoData.forEach((item) => {
          let currentImportant = item.important;
          if (item.id === id) {
            newData.push({ ...item, important: !currentImportant });
          } else {
            newData.push(item);
          }
        });

        return {
          todoData: newData,
        };
      });
    };
    this.toggleDone = (id) => {
      this.setState(({ todoData }) => {
        const newData = [];
        todoData.forEach((item) => {
          let currentDone = item.done;
          if (item.id === id) {
            newData.push({ ...item, done: !currentDone });
          } else {
            newData.push(item);
          }
        });

        return {
          todoData: newData,
        };
      });
    };

    this.itemsFilter = (items, string = '', filter = '') => {
      switch (filter) {
        case 'search':
          if (string.length === 0) return items;
          return items.filter((item) =>
            item.label.toLowerCase().includes(string.toLowerCase())
          );
        case 'active':
          return items.filter((item) => !item.done);
        case 'done':
          return items.filter((item) => item.done);
        case 'all':
        default:
          return items;
      }
    };

    this.setSearchString = (string) => {
      this.setState({
        searchString: string,
        filterName: 'search',
      });
    };

    this.setFilter = (filter) => {
      this.setState({
        filterName: filter,
      });
    };
  }

  render() {
    const { todoData, searchString, filterName } = this.state;

    const more = [...this.state.todoData].filter((item) => !item.done).length;
    const done = [...this.state.todoData].filter((item) => item.done).length;

    const filteredData =
      this.itemsFilter(todoData, searchString, filterName) || [];

    return (
      <div className="container mx-auto my-0 py-10 px-5 max-w-xl grid grid-cols-1 gap-8">
        <AppHeader more={more} done={done} />
        <FilterPanel
          setSearchString={this.setSearchString}
          setFilter={this.setFilter}
        />
        <TodoList
          todos={filteredData}
          onDeleted={this.deleteItem}
          onImportant={this.toggleImportant}
          onDone={this.toggleDone}
        />
        <CreateTodo onAdd={this.addItem} />
      </div>
    );
  }
}
export default App;
