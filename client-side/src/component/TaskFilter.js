import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { ButtonGroup, Button } from 'react-bootstrap';

const TaskFilter = () => {
  const { setFilter } = useContext(TaskContext);

  return (
    <ButtonGroup className="my-4">
      <Button variant="secondary" onClick={() => setFilter('all')}>
        All
      </Button>
      <Button variant="secondary" onClick={() => setFilter('completed')}>
        Completed
      </Button>
      <Button variant="secondary" onClick={() => setFilter('notCompleted')}>
        Not Completed
      </Button>
    </ButtonGroup>
  );
};

export default TaskFilter;


