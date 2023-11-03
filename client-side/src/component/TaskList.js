  import React, { useContext, useEffect } from 'react';
  import { TaskContext } from '../context/TaskContext';
  import { Card, Row, Col } from 'react-bootstrap';
  import TaskItem from './TaskItem';
  import axios from 'axios';
  import { API_BASE_URL } from '../apiConfig';

  const TaskList = () => {
    const { tasks, filter, setTasks, updateTask } = useContext(TaskContext);

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get(`${API_BASE_URL}/api/tasks`);
          console.log('API Response:', response.data.tasks);
          setTasks(response.data.tasks);
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      }

      fetchData();
    }, [setTasks]);

    return (
        <Row className="my-4">
          {tasks
            .filter((task) =>
              filter === 'all'
                ? true
                : filter === 'completed'
                ? task.completed
                : !task.completed
            )
            .map((task) => (
              <Col key={task._id} xs={12} sm={6} md={4} lg={3}  className="mb-3 ml-2" >
                <Card>
                  <Card.Body>
                    <Card.Title>{task.title}</Card.Title>
                    <Card.Text>{task.description}</Card.Text>
                    <TaskItem task={task} updateTask={updateTask} />
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
    );
  };

  export default TaskList;
