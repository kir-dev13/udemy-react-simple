import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsFilter = [
        { name: "all", label: "Все сотрудники" },
        { name: "rise", label: "На повышение" },
        { name: "salaryOver1000", label: "З/П больше 1000$" },
        { name: "increase", label: "С печенькой" },
    ];
    console.log(props.filters);
    let clazz = "";

    return (
        <div className="btn-group">
            {buttonsFilter.map((item) => {
                if (props.filters.some((filter) => filter === item.name)) {
                    console.log(item.name);
                    clazz = "btn-light";
                } else {
                    clazz = "btn-outline-light";
                }
                if (item.name === "all" && props.filters.length === 0) {
                    clazz = "btn-light";
                }

                return (
                    <button
                        key={item.name}
                        className={`btn ${clazz}`}
                        type="button"
                        onClick={() => props.onFilterChange(item.name)}
                    >
                        {item.label}
                    </button>
                );
            })}
        </div>
    );
};
export default AppFilter;
