import React from "react";
import { connect } from "react-redux"; //1) import connect
import IconButton from "../template/iconButton";


const TodoList = (props) => { //2) Transform the export default in a function

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check' hide={todo.done}
                        onClick={() => props.handleMarkAsDone(todo)} />
                    <IconButton style='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.handleMarkAsPending(todo)} />
                    <IconButton style='danger' icon='trash-o' hide={!todo.done}
                        onClick={() => props.handleRemove(todo)} />
                </td>
            </tr>
        ))
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Description</th>
                    <th className="tableActions">Actions</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

//3) Mapping state of the {connected} application and send it to props
const mapStateToProps = state => ({
    list: state.todo.list
})
export default connect(mapStateToProps)(TodoList);