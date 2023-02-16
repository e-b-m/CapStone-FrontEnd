const Need = ({need}) => {

    return (  
        <div className="todo-container">
        <ul>
            <p className="need-name">{need.name}:</p>
            <li className="need-description">{need.description}</li>
            <p className="need-complete">{need.completed}</p>
        </ul>
        </div>
    );
}

export default Need;