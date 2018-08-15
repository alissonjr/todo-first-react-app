import React, { Component } from 'react';

export default class Header extends Component {
    render () {
        return (
            <h1 class="m-3">
                <span class="badge badge-light">Todo</span>
                <span class="badge badge-secondary ml-2">Application</span>
            </h1>
        );
    }
}