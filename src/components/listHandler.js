import React, { Component } from 'react'
import { DataTable } from 'primereact/components/datatable/DataTable';
import { Column } from 'primereact/components/column/Column';
import { Tooltip } from 'primereact/components/tooltip/Tooltip';
import { InputText } from 'primereact/components/inputtext/InputText';


class ListHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
       
    }

    componentWillMount() {
    }

    componentWillReceiveProps(nextProps) {
       
    }


    getNested(theObject, path, separator) {
        try {
            separator = separator || '.';

            return path.replace('[', separator).replace(']', '').split(separator).reduce(
                function (obj, property) {
                    return obj[property];
                }, theObject
            );

        } catch (err) {
            return undefined;
        }
    }

   

    displayRow(rowData, column) {
        let value = this.getNested(rowData, column.field)
        value = value ? value.toString() : "false"
        return <div> {value} </div>
    }

    render() {
        var header = <div className="tableHeader">
            <div className="tableSearch">
                <i className="fa fa-search" style={{ margin: '4px 4px 0 0' }}></i>
                <InputText type="search" onInput={(e) => this.setState({ globalFilter: e.target.value })} placeholder="Search..." size="50" />
            </div>

            
        </div>

        const routeState = this.props.location.state
    
        const tableData = [{
        
            "id":1,
            "name":"test1",
            "age" : "11",
            "gender":"male",
            "email" : "test1@gmail.com",
            "phoneNo" : "9415346313"
            },
            {
            "id" : 2,
            "name":"test2",
            "age" : "12",
            "gender":"male",
            "email" : "test2@gmail.com",
            "phoneNo" : "9415346314"
            },
            {
                "id":3,
                "name":"test3",
                "age" : "13",
                "gender":"male",
                "email" : "test3@gmail.com",
                "phoneNo" : "9415346315"
                },
                {
                "id":4,
                "name":"test4",
                "age" : "14",
                "gender":"male",
                "email" : "test4@gmail.com",
                "phoneNo" : "9415346316"
                },
                {
                "id":5,
                "name":"test5",
                "age" : "15",
                "gender":"male",
                "email" : "test5@gmail.com",
                "phoneNo" : "9415346317"
                },
                {
                "id":6,
                "name":"test6",
                "age" : "16",
                "gender":"male",
                "email" : "test6@gmail.com",
                "phoneNo":"9415346318"
                }
       ]
       
        
        return (
            <div>
                {
                    <div className="content-section-implementation">
                        {tableData && <div className="content-section">
                            <h4>{routeState.title}
                                <i id="info" className="fa fa-question-circle" aria-hidden="true" style={{ color: 'orange' }}></i>
                                <Tooltip for="#info" title="This area Define Employees List" /> </h4>

                            <div className="tableCon ui-g">
                                <DataTable
                                    value={tableData}
                                    selectionMode="multiple"
                                    paginator={true}
                                    rows={10}
                                    header={header}
                                    globalFilter={this.state.globalFilter}
                                    filters={this.state.filters}
                                    onFilter={this.onFilter}
                                    sortMode="multiple"
                                    resizableColumns={true}
                                    reorderableColumns={true}
                                   // onSelectionChange={this.onSelection.bind(this)}
                                >
                                    {
                                        routeState.table ? routeState.table.map((data, i) => {
                                            return <Column key={i} body={this.displayRow.bind(this)} field={data.field} header={data.header} />
                                        }) : []
                                    }
                                </DataTable>
                            </div>

                        </div>
                        }
                    </div>
                }
            </div>
        )
    }
}

export default ListHandler
