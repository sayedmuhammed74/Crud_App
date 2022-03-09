import React,{Component} from 'react'

class List extends Component{

    state = {
        isEdit : false
    }
    // render Course
    renderCourse = () => {
        return(
            <>
            <li>
                <span>{this.props.details.name}</span>
                <button className='edit' onClick={() => this.toggleState()}>Edit Course</button>
                <button className='delete' onClick={() => {this.props.deleteCourse(this.props.index)}}>Delete</button>
            </li>
            <div className='clear'></div>
            </>
        )
    }

    // update Course Item 
    updateCourseItem = (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index, this.input.value);
        this.toggleState();
    }

    // Update Course
    updateCourse = () => {
        return(
            <form onSubmit={this.updateCourseItem}>
                <input id='form' type='text' ref={(v) => this.input = v} defaultValue={this.props.details.name}/>
                <button className='update'>Update Course</button>
            </form>
        )
    }

    // Toggle State
    toggleState = () => {
        let {isEdit} = this.state;
        this.setState({
            isEdit : !isEdit
        });
    }
    render(){
        let {isEdit} = this.state;
        return(
            <>
                {isEdit ? this.updateCourse() : this.renderCourse()}
            </>
        );
    }
}

export default List;