import React, { Component } from 'react';

export default class TaskBar extends Component {
    render () {
        return (
            <div>
                <input type="text" ref="task" placeholder="add your tasks here" />
                <button>Add Task</button>
            </div>
        );
    }
}