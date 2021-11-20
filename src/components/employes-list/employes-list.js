import EmployesListItem from "../employes-list-item/employes-list-item";

import "./employes-list.css";

const EmployesList = ({ data, onDelete }) => {
    const elements = data.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <EmployesListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
            />
        );
    });

    return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployesList;
