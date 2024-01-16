import React from "react";
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import MainModal from "./MainModal";
import { useContext } from "react";
import { LangContext } from "../App";
import { en, al } from "../helper/lang";

function MainTimeline() {
  const [openModal, setOpenModal] = React.useState(false);
  const lang = useContext(LangContext);
  return (
    <Timeline id="exp">
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content className="text-left">
          <Timeline.Time>
            {lang === "al" ? al.Timeline.First.Date : en.Timeline.First.Date}
          </Timeline.Time>
          <Timeline.Title>
            {" "}
            {lang === "al" ? al.Timeline.First.Title : en.Timeline.First.Title}
          </Timeline.Title>
          <Timeline.Body>
            {lang === "al" ? al.Timeline.First.Text : en.Timeline.First.Text}
          </Timeline.Body>
          <Button color="gray" onClick={() => setOpenModal(true)}>
            {lang === "al" ? "Lexo më shumë" : "Read more"}
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
      <MainModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        content={
          lang === "al" ? al.Timeline.First.Content : en.Timeline.First.Content
        }
        title={
          lang === "al" ? al.Timeline.First.Title : en.Timeline.First.Title
        }
      />
    </Timeline>
  );
}

export default MainTimeline;
