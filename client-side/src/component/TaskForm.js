import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { Form, Button, Spinner } from "react-bootstrap";
import axios from "axios";
import { API_BASE_URL } from "../apiConfig";
import { toast } from "react-toastify";

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [task, setTask] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      setLoading(true);

      const response = await axios.post(
        `${API_BASE_URL}/api/tasks`,
        task,
        config
      );
      addTask(response.data.task);
      setTask({ title: "", description: "" });
      setLoading(false);

      toast.success(response.data.message);
    } catch (error) {
      console.error("Error creating task:", error);
      toast.error(error.response.data.error);

      setLoading(false);
    }
  };

  return (
    <Form className="my-4" onSubmit={handleSubmit}>
      <Form.Group controlId="title">
        <Form.Label>Task Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="Task Title"
          value={task.title}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Task Description</Form.Label>
        <Form.Control
          type="text"
          name="description"
          placeholder="Task Description"
          value={task.description}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        className="mt-3"
        disabled={loading}
      >
        {loading ? <Spinner animation="border" size="sm" /> : "Add Task"}
      </Button>
    </Form>
  );
};

export default TaskForm;
