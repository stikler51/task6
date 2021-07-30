import React from "react";
import NewEmployeeForm from "./NewEmployeeForm";

class ListOfEmployees extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            employeesList: []
        }

        this.removeFromList = this.removeFromList.bind(this)
        this.addToList = this.addToList.bind(this)
    }

    componentDidMount() {
        fetch('https://reqres.in/api/users?per_page=12')
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    employeesList: result.data
                });
            })
    }

    removeFromList(id) {
        let newList = this.state.employeesList.filter(item => {
            return item.id !== id
        })

        this.setState({
            employeesList: newList
        })
    }

    addToList(data) {
        // берем последний элемент в стейте, смотрим его id и добавляем к нему единицу
        data.id = this.state.employeesList.length ? this.state.employeesList[this.state.employeesList.length - 1].id + 1 : 1
        let newList = [...this.state.employeesList, data]
        this.setState({
            employeesList: newList
        })
    }

    render() {
        return <div className="container">
            {this.state.isLoaded ? '' : 'Loading...'}
            {this.state.employeesList.length ? <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Remove from list</th>
                </tr>
                </thead>
                <tbody>
                {this.state.employeesList.map(employee => {
                    return <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{`${employee.first_name} ${employee.last_name}`}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => this.removeFromList(employee.id)}>Delete</button>
                        </td>
                    </tr>
                })}
                </tbody>
            </table> : ''}
            <NewEmployeeForm addNewEmployee={this.addToList}/>
        </div>
    }
}

export default ListOfEmployees