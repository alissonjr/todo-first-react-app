import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from "../task";

class TaskList extends Component {
    render () {
        return (
            <div class="container">
                <table class="table table-hover table-bordered table-sm">
                    <thead>
                        <tr>
                            <th>Tasks</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.tasks.map((task, index) => <Task key={index} task={task} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    let { tasks } = state
    return { tasks }
}

export default connect(mapStateToProps)(TaskList);