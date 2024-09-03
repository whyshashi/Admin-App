import  { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard';
import { Link } from "react-router-dom";

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const savedCourses = JSON.parse(localStorage.getItem('courses')) || [];
    if (savedCourses.length === 0) {
      // Add dummy data if there are no courses
      const initialCourses = [
        { id: 1, title: 'Dummy Course 1', description: 'Description for course 1' },
        { id: 2, title: 'Dummy Course 2', description: 'Description for course 2' }
      ];
      localStorage.setItem('courses', JSON.stringify(initialCourses));
      setCourses(initialCourses);
    } else {
      setCourses(savedCourses);
    }
  }, []);

  return (
    <div>
      <nav>
      <Link to='/'>home</Link>
      <Link to='/admin'>admin</Link>
      <Link to='/courses'>courses</Link>
      </nav>
      


      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Home;
