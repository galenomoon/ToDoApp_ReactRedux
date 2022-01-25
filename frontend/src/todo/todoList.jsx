import React from "react";
import { connect } from "react-redux"; //1) import connect
import { bindActionCreators } from 'redux';
import IconButton from "../template/iconButton";
import { markAsDone, markAsPending } from "./todoActions";

const TodoList = (props) => { //2) Transform the export default in a function

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check' hide={todo.done}
                        onClick={() => props.markAsDone(todo)} />
                    <IconButton style='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.markAsPending(todo)} />
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
const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ markAsDone, markAsPending }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);