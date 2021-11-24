import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsFilter = [
        { name: "all", label: "Все сотрудники" },
        { name: "rise", label: "На повышение" },
        { name: "salaryOver1000", label: "З/П больше 1000$" },
    ];
    console.log(props);
    let clazz = "";

    return (
        <div className="btn-group">
            {buttonsFilter.map((item) => {
                item.name === props.filter
                    ? (clazz = "btn-light")
                    : (clazz = "btn-outline-light");
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
