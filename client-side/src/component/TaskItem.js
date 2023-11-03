import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { ListGroupItem, Button, Form } from "react-bootstrap";
import axios from "axios";
import { API_BASE_URL } from "../apiConfig";
import { toast } from "react-toastify";

const TaskItem = ({ task }) => {
  const { updateTask, deleteTask } = useContext(TaskContext);
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);

  const handleUpdateTask = async () => {
    try {
      const updatedTask = { ...task, completed: !task.completed };
      const response = await axios.put(
        `${API_BASE_URL}/api/tasks/${task._id}`,
        { completed: updatedTask.completed },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data && response.data.task) {
        updatedTask.completed = response.data.task.completed;
      }

      updateTask(task._id, updatedTask.completed);

      toast.success(response.data.message);
    } catch (error) {
      console.error("Error updating task:", error);
      toast.error(error.response.data.error);
    }
  };

  const handleDeleteTask = async () => {
    try {
      setLoading(true);

      const response = await axios.delete(
        `${API_BASE_URL}/api/tasks/${task._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      deleteTask(task._id);

      toast.success(response.data.message);

      console.log(response, "delete response");
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ListGroupItem
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Form.Check
        type="checkbox"
        label="Completed"
        checked={task.completed}
        onChange={handleUpdateTask}
        className="mr-2"
      />
      <span></span>
      <Button
        variant="danger"
        onClick={handleDeleteTask}
        disabled={loading}
        className="ml-2"
      >
        {loading ? "Deleting..." : "Delete"}
      </Button>
    </ListGroupItem>
  );
};

export default TaskItem;
