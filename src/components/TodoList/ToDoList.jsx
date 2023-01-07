import { useState } from "react";
import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addJob } from "./toDoListSclice";
import { selectFilterdToDoJobs } from "../../redux/selectors";

export default function ToDoList() {
  const dispatch = useDispatch();
  const filterdJobs = useSelector(selectFilterdToDoJobs);
  // States
  const [content, setContent] = useState("");
  const [priority, setPriority] = useState("Medium");

  const canSubmit = [content, priority].every(Boolean);
  // Handlers
  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };
  const handelChangePriority = (value) => {
    setPriority(value);
  };
  const handleAddJob = () => {
    if (canSubmit) {
      const job = {
        id: nanoid(),
        content,
        status: "Uncompleted",
        priority,
      };
      dispatch(addJob(job));
    }
  };
  // Rendered
  const renderedFilteredJobs = filterdJobs.map((job) => {
    return (
      <Todo
        key={job.id}
        jobId={job.id}
        name={job.content}
        prioriry={job.priority}
        completed={job.completed}
      />
    );
  });
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {renderedFilteredJobs}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={content} onChange={handleChangeContent} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handelChangePriority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" disabled={!canSubmit} onClick={handleAddJob}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
