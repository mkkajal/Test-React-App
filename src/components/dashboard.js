import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DATA from './data';
import ListHandler from '../containers/listHandler';
import { Toolbar } from 'primereact/components/toolbar/Toolbar';
import { Button } from 'primereact/components/button/Button';


class Dashboard extends Component {

    onSignOut = () => {
        this.props._authFail()
        this.props.history.push("/")
    }

    componentDidMount() {
        if (!localStorage.getItem('token')) {
            this.onSignOut()
        }
    }

    onContentLoad = (action) => {
        switch (action) {
            case "list":
                return <ListHandler />
            default:
                return <div />
        }
    }


    render() {
        const locationState = this.props.location.state ? this.props.location.state : undefined
        const listUrl = "/"


        return (
            <div>
                <Toolbar>
                    <h2 style={{ float: "left" }}>{"Dashboard"}</h2>
                     <div style={{ float: "right" }}>
                        <Button label="Sign out" onClick={this.onSignOut.bind(this)} />
                        <br />
                    </div>

                </Toolbar>
                <div>
                    {
                        DATA.modules.map((module, i) => {
                            return (
                                <div key={i}>
                                    {module.menu && <div className="sideBar-submenu">
                                        <span className="submenu_arrow flaticon-menu-side"></span>
                                        <nav className="sideBar-submenu-link">
                                            <ul>
                                                {module.menu.map((item, i) => {
                                                    return (
                                                        <li className="sub-menu-item" key={i}>
                                                            <Link style={!item.link ? { pointerEvents: 'none' } : {}} to={{ pathname: listUrl, state: { title: item.title, table: item.table, module: item.module, action: item.action || "list", schema: item.schema } }}>
                                                                <div className="sideBar-menu-link">
                                                                    <i className={item.icon ? item.icon : ""}></i>
                                                                    {item.title}
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    )

                                                })

                                                }
                                            </ul>
                                        </nav>
                                    </div>}
                                </div>
                            )

                        })
                    }

                </div>
                <div className="contentCon">
                    {
                        locationState && locationState.action && this.onContentLoad(locationState.action)
                    }
                </div>
            </div>


        )
    }
}

export default Dashboard
