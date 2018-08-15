import React, { Component } from 'react';
import { connect } from 'react-redux';

class TaskCount extends Component {
    render () {
        return (
            <div class="container text-left">
                <p>
                    <b>Total tasks:</b>
                    <span class="ml-2">{this.props.tasks.length}</span>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    let { tasks } = state
    return { tasks }
}

export default connect(mapStateToProps)(TaskCount);