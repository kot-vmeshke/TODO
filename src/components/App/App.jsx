import TodoList from '../TodoList/TodoList';
import FilterPanel from '../FilterPanel/FilterPanel';
import AppHeader from '../AppHeader/AppHeader';
import CreateTodo from '../CreateTodo/CreateTodo';

import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoData: [
        {
          label: 'Learn React',
          important: false,
          id: Math.round(Date.now() * Math.random()),
          done: false,
        },
        {
          label: 'Drink Coffe',
          important: true,
          id: Math.round(Date.now() * Math.random()),
          done: false,
        },
        {
          label: 'Learn Vue',
          important: false,
          id: Math.round(Date.now() * Math.random()),
          done: false,
        },
      ],
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

  }
  render() {

        const more = [...this.state.todoData].filter(
          (item) => !item.done
        ).length;
        const done = [...this.state.todoData].filter((item) => item.done).length; 

    return (
      <div className="container mx-auto my-0 py-10 px-5 max-w-xl grid grid-cols-1 gap-8">
        <AppHeader more={more} done={done} />
        <FilterPanel />
        <TodoList
          todos={this.state.todoData}
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
