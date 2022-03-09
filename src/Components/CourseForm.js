import React,{Component} from 'react'

class Form extends Component{
    render(){
        return(
            <form onSubmit={this.props.addCourse}>
                <input type='text' onChange={this.props.updateCourse}/>
                <button className='add' type='submit'>Add Course</button>
            </form>
        );
    }
}

export default Form;