import React from "react";
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import MainModal from "./MainModal";

function MainTimeline() {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <Timeline id="exp">
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content className="text-left">
          <Timeline.Time>February 2022</Timeline.Time>
          <Timeline.Title> Lorem ipsum dolor sit amet. </Timeline.Title>
          <Timeline.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            recusandae accusantium rem corporis neque eligendi fugit totam quos,
            perferendis odit cum explicabo saepe ipsam aperiam nostrum porro
            fugiat quo velit!
          </Timeline.Body>
          <Button color="gray" onClick={() => setOpenModal(true)}>
            Learn More
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content className="text-left">
          <Timeline.Time>March 2022</Timeline.Time>
          <Timeline.Title> Lorem ipsum dolor sit amet. </Timeline.Title>
          <Timeline.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            earum veniam impedit omnis, exercitationem, non voluptatibus sit
            libero adipisci alias distinctio! Consectetur, iste hic eum labore
            impedit mollitia minima voluptatum.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content className="text-left">
          <Timeline.Time>April 2022</Timeline.Time>
          <Timeline.Title> Lorem ipsum dolor sit amet. </Timeline.Title>
          <Timeline.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            expedita voluptas numquam id molestias totam assumenda vitae est
            facere esse alias, cumque vel repellendus accusantium suscipit nisi
            ipsa voluptates nesciunt!
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <MainModal openModal={openModal} setOpenModal={setOpenModal} />
    </Timeline>
  );
}

export default MainTimeline;
