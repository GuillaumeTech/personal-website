import React, { Component } from "react";
import Project from "./Project"
import {
    SectionTitle,
    Link,
} from "./CssComponents";
class Projects extends Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this)
        this.title = null
        this.titleRef = element => {
            this.title = element;
        };
        this.state = {
            projects: [{
                content: <div> A todo application that was built to learn React - <i>Finished</i>  <br /><br /><Link className="underline"
                    href="https://todo.gtecher.fr">Demo</Link> | <Link className="underline"
                        href="https://github.com/GuillaumeTech/supertodo">Code</Link></div>,
                name: 'Super todo'
            },
            {
                content: <div>Application to find paths between wikipedia pages - <i>Work in progress</i>  <br /><br /> <Link className="underline"
                    href="https://github.com/GuillaumeTech/wikipathfinder">Code</Link></div>,
                name: 'Wiki pathfinder'

            }]
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        if (this.title.getBoundingClientRect().y < 150 && this.title.getBoundingClientRect().y > 70) { // on top of the screen
            this.title.style.animationPlayState = "running"
            setTimeout(() => this.title.style.animation = "none", 500)
        } else if (this.title.getBoundingClientRect().y < -100 || this.title.getBoundingClientRect().y > window.outerHeight - 100) { // no more visibile on screen
            this.title.style.animation = ""
        }
    }


    render() {
        return (
            <section className="section">
                <div className="container">
                    <SectionTitle ref={this.titleRef} id="projects">Projects</SectionTitle>
                    <br />
                    <br />




                    <div class="columns">
                        {this.state.projects.map(project => {
                            return <div class="column"><Project content={project.content} name={project.name} />
                            </div>
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;
