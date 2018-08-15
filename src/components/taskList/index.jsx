import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from "../task";

class TaskList extends Component {
    render () {
        let content = "";

        if (this.props.tasks.length > 0) {
            content = <table class="table table-hover table-bordered table-sm">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th style={{width: '200px'}}>Status</th>
                        <th style={{width: '150px'}}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.tasks.map((task, index) => <Task key={index} task={task} />)}
                </tbody>
            </table>;
        } else {
            content = <p>No registered tasks!</p>
        }
        return (
            <div class="container">
                { content }
            </div>
        );
    }
}

function mapStateToProps(state) {
    let { tasks } = state
    return { tasks }
}

export default connect(mapStateToProps)(TaskList);