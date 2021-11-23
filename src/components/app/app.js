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
                {
                    name: "John Smith",
                    salary: 800,
                    increase: false,
                    rise: true,
                    id: 1,
                },
                {
                    name: "Петя Васечкин",
                    salary: 3500,
                    increase: true,
                    rise: false,
                    id: 2,
                },
                {
                    name: "Кржечко Вацуцкевичусссс",
                    salary: 3000,
                    increase: false,
                    rise: false,
                    id: 3,
                },
            ],

            term: "",
            filter: "all",
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
        if (name !== "" && salary) {
            const employe = {
                name: name,
                salary: salary,
                increase: false,
                rise: false,
                id: this.maxId++,
            };
            // this.maxId += 1;
            this.setState(({ data }) => {
                return {
                    data: [...data, employe],
                };
            });
        }
    };

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map((elem) => {
                if (elem.id === id) {
                    return { ...elem, [prop]: !elem[prop] };
                    // elem.increase = !elem.increase;
                }
                return elem;
            }),
        }));
    };

    searchEmp = (items, term) => {
        if (items.length === 0) {
            return items;
        }

        return items.filter((item) => item.name.indexOf(term) > -1);
        // return items.filter((item) => item.name === term);
    };

    onUpdateSearch = (term) => {
        this.setState({ term });
    };

    filterData(items, filter) {
        switch (filter) {
            case "all":
                return items;
            case "rise":
                return items.filter((item) => item.rise);
            case "salaryOver1000":
                return items.filter((item) => item.salary > 1000);
            default:
                return items;
        }
    }

    onFilterChange = (filter) => {
        this.setState({ filter });
    };

    render() {
        const { data, term, filter } = this.state;
        const visibleData = this.filterData(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo
                    employesCount={data.length}
                    increaseCount={
                        data.filter((elem) => elem.increase === true).length
                    }
                />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter onFilterChange={this.onFilterChange} />
                </div>
                <EmployesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployesAddForm onAddItem={this.addItem} />
            </div>
        );
    }
}
export default App;
