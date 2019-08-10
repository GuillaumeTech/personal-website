import React, { Component } from "react";

class Project extends Component {

    render() {
        return (
            <div class="card">

                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <div class="title is-4">{this.props.name}</div>
                        </div>
                    </div>

                    <div class="content">
                        {this.props.content}
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;
