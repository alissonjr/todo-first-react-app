import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { deleteTask } from "../../actions/";

class Task extends Component {
    render () {
        return (
            <tr>
                <td>
                    { this.props.task }
                </td>
                <td>
                    <button onClick={() => {this.props.deleteTask(this.props.id)}} class="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ deleteTask }, dispatch);
}

export default connect(() => {}, mapDispatchToProps)(Task);