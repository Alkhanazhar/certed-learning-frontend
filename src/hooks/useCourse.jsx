// src/hooks/useCourse.js
import apiClient from "../../apiClient";
import { useEffect, useState } from "react";

const useCourse = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all courses
  const fetchCourses = async () => {
    setLoading(true);
    try {
      const res = await apiClient.get("/course");
      console.log(res.data.data, "course");
      setCourses(res.data.data.courses);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch courses");
    } finally {
      setLoading(false);
    }
  };

  // Create a new course
  const createCourse = async (courseData) => {
    try {
      const res = await apiClient.post("/course", courseData);
      setCourses((prev) => [...prev, res.data]);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create course");
    }
  };

  // Update a course
  const updateCourse = async (id, updatedData) => {
    try {
      const res = await apiClient.put(`/course/${id}`, updatedData);
      setCourses((prev) =>
        prev.map((course) => (course._id === id ? res.data : course))
      );
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update course");
    }
  };

  // Delete a course
  const deleteCourse = async (id) => {
    try {
      await apiClient.delete(`/course/${id}`);
      setCourses((prev) => prev.filter((course) => course._id !== id));
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete course");
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  return {
    courses,
    loading,
    error,
    fetchCourses,
    createCourse,
    updateCourse,
    deleteCourse,
  };
};

export default useCourse;
