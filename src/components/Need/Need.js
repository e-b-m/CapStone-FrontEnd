const Need = ({need}) => {

    return (  
        <div className="todo-container">
        <ul>
            <li className="need-name">{need.name}:</li>
            <p className="need-description">{need.description}</p>
            <p className="need-complete">{need.completed}</p>
        </ul>
        </div>
    );
}

export default Need;