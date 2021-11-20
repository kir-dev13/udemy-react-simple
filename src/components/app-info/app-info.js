import "./app-info.css";

const AppInfo = (props) => {
    const { employesCount, increaseCount } = props;
    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании Х</h1>
            <h2>Общее число сотрудников: {employesCount}</h2>
            <h2>Премию получат: {increaseCount}</h2>
        </div>
    );
};

export default AppInfo;
