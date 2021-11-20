import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployesList from "../employes-list/employes-list";
import EmployesAddForm from "../employes-add-form/employes-add-form";

import "./app.css";

class App extends Component {
    constructor() {
        super();

        this.state = {
            data: [
                { name: "John Smith", salary: 800, id: 1 },
                { name: "Петя Васечкин", salary: 3500, id: 2 },
                {
                    name: "Кржечко Вацуцкевичусссс",
                    salary: 3000,

                    id: 3,
                },
            ],
        };
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter((elem) => elem.id !== id),
            };
        });
    };

    addItem = (name, salary) => {
        if ((name, salary)) {
            const employe = {
                name: name,
                salary: salary,
                id: this.maxId,
            };
            this.maxId += 1;
            this.setState(({ data }) => {
                return {
                    data: [...data, employe],
                };
            });
        }
    };

    render() {
        const { data } = this.state;
        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployesList data={data} onDelete={this.deleteItem} />
                <EmployesAddForm onAddItem={this.addItem} />
            </div>
        );
    }
}
export default App;
