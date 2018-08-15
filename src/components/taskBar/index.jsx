import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { addTask } from "../../actions/";

class TaskBar extends Component {
    render () {
        return (
            <div class="container">
                <form class="form-inline" action="javascript:return void;" onSubmit={()=>this.props.addTask(this.refs.task.value)}>
                    <div class="form-group mb-3">
                        <label for="task" class="sr-only">New Task</label>
                        <input type="text" name="task" ref="task" class="form-control" placeholder="add your tasks here" />
                    </div>
                    <button type="button" class="btn btn-primary mb-3 ml-2">Add Task</button>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addTask }, dispatch);
}

export default connect(() => {}, mapDispatchToProps)(TaskBar);