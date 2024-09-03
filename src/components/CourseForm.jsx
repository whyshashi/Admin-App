import  { useState } from 'react';

const CourseForm = ({ course, onSave }) => {
  const [formData, setFormData] = useState(course || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title || ''}
        onChange={handleChange}
        placeholder="Title"
        required
      />
     
      <button type="submit">Save</button>
    </form>
  );
};

export default CourseForm;
