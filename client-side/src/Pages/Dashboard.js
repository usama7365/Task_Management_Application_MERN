import React from 'react';
import NavigationBar from '../component/navbar';
import TaskForm from '../component/TaskForm';
import TaskList from '../component/TaskList';
import TaskFilter from '../component/TaskFilter';
import { Container, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
  console.log("Dashboard component is rendering");

  return (
    <div style={{height:"auto"}}>
      <NavigationBar />
              

        <Container style={{padding:"1rem", position:"relative"}} >
          <Row>
            <Col>
              <div>
                <h1>Task Management App</h1>
                <TaskForm />
                <TaskFilter />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <TaskList />
            </Col>
          </Row>
        </Container>
    </div>
  );
};

export default Dashboard;
