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
        if (item.name === props.filter) {
          clazz = "btn-light";
        } else {
          clazz = "btn-outline-light";
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
      {/* <button className="btn btn-light" type="button">
                Все сотрудники
            </button>
            <button
                className="btn btn-outline-light"
                type="button"
                onClick={() => props.onFilterChange("rise")}
            >
                На повышение
            </button>
            <button className="btn btn-outline-light" type="button">
                З/П больше 1000$
            </button> */}
    </div>
  );
};
export default AppFilter;
