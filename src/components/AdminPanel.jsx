import { useState, useEffect } from 'react';
import CourseForm from './CourseForm';

const AdminPanel = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const savedCourses = JSON.parse(localStorage.getItem('courses')) || [];
    setCourses(savedCourses);
  }, []);

  const handleSave = (course) => {
    const updatedCourses = selectedCourse
      ? courses.map(c => c.id === selectedCourse.id ? course : c)
      : [...courses, { ...course, id: Date.now() }];
      
    setCourses(updatedCourses);
    localStorage.setItem('courses', JSON.stringify(updatedCourses));
    setSelectedCourse(null);
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <CourseForm course={selectedCourse} onSave={handleSave} />
     
    </div>
  );
};

export default AdminPanel;
