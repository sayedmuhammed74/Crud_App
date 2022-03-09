import React, { Component } from 'react';
import List from './Components/CourseList'
import Form from './Components/CourseForm'

class App extends Component{
  state = {
    courses: [
      {name:"HTML"},
      {name:"CSS"},
      {name:"JS"}
    ],
    current: ''
  }

  // Update
  updateCourse = (e) => {
     this.setState({current : e.target.value});
  }

  // Add
  addCourse = (e) => {
      e.preventDefault();
      if(document.querySelector('input').value !== ''){
        let current = this.state.current;
        let courses = this.state.courses;
        courses.push({name:current});
        this.setState({
          courses : courses,
          current : ''
        });
        document.querySelector('input').value = '';
        document.getElementById('massege').classList.add('block');
      }
      else{
        alert('you must write !!');
      }
  }

  // Delete
  deleteCourse = (index) => {
    let courses = this.state.courses; 
    courses.splice(index , 1);
    this.setState({
      courses
    });
    if(this.state.courses.length === 0){
      document.getElementById('massege').classList.toggle('block');
    }
  }

  // edit course
  editCourse = (index, value) => {

    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({courses});
  }

  render(){
    const {courses} = this.state;
    const courseList = courses.map((course, index) => {
      return(
        <List details={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>
      );
    })

    return (
      <section className="App">
          <h2>Add Course</h2>
          <Form updateCourse={this.updateCourse} addCourse={this.addCourse}/>
          <p id='massege' className='block'>No Courses To Show</p>
          <ul>{courseList}</ul>
      </section>
    );
  }
}

export default App;
