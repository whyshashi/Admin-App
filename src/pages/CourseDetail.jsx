import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const courses = JSON.parse(localStorage.getItem('courses')) || [];
    const foundCourse = courses.find(c => c.id === parseInt(id, 10));
    setCourse(foundCourse);
  }, [id]);

  if (!course) return <div>Course not found</div>;

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      {/* Add more details here */}
    </div>
  );
};

export default CourseDetail;
