import React, { Component } from 'react';

export default class TaskList extends Component {
    render () {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Tasks</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        );
    }
}