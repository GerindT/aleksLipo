import React from "react";
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import MainModal from "./MainModal";
import { useContext } from "react";
import { LangContext } from "../App";
import { en, al } from "../helper/lang";

function MainTimeline() {
  const [openModal, setOpenModal] = React.useState(false);
  const [content, setContent] = React.useState("");
  const [title, setTitle] = React.useState("");
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
            {lang === "al" ? al.Timeline.First.Title : en.Timeline.First.Title}
          </Timeline.Title>
          <Timeline.Body>
            {lang === "al" ? al.Timeline.First.Text : en.Timeline.First.Text}
          </Timeline.Body>
          <Button
            color="gray"
            onClick={() => {
              setContent(
                lang === "al"
                  ? al.Timeline.First.Content
                  : en.Timeline.First.Content
              ),
                setTitle(
                  lang === "al"
                    ? al.Timeline.First.Title
                    : en.Timeline.First.Title
                ),
                setOpenModal(true);
            }}
          >
            {lang === "al" ? "Lexo më shumë" : "Read more"}
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content className="text-left">
          <Timeline.Time>
            {lang === "al" ? al.Timeline.Second.Date : en.Timeline.Second.Date}
          </Timeline.Time>
          <Timeline.Title>
            {lang === "al"
              ? al.Timeline.Second.Title
              : en.Timeline.Second.Title}
          </Timeline.Title>
          <Timeline.Body>
            {lang === "al" ? al.Timeline.Second.Text : en.Timeline.Second.Text}
          </Timeline.Body>
          <Button
            color="gray"
            onClick={() => {
              setContent(
                lang === "al"
                  ? al.Timeline.Second.Content
                  : en.Timeline.Second.Content
              ),
                setTitle(
                  lang === "al"
                    ? al.Timeline.Second.Title
                    : en.Timeline.Second.Title
                ),
                setOpenModal(true);
            }}
          >
            {lang === "al" ? "Lexo më shumë" : "Read more"}
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content className="text-left">
          <Timeline.Time>
            {lang === "al" ? al.Timeline.Third.Date : en.Timeline.Third.Date}
          </Timeline.Time>
          <Timeline.Title>
            {lang === "al" ? al.Timeline.Third.Title : en.Timeline.Third.Title}
          </Timeline.Title>
          <Timeline.Body>
            {lang === "al" ? al.Timeline.Third.Text : en.Timeline.Third.Text}
          </Timeline.Body>
          <Button
            color="gray"
            onClick={() => {
              setContent(
                lang === "al"
                  ? al.Timeline.Third.Content
                  : en.Timeline.Third.Content
              ),
                setTitle(
                  lang === "al"
                    ? al.Timeline.Third.Title
                    : en.Timeline.Third.Title
                ),
                setOpenModal(true);
            }}
          >
            {lang === "al" ? "Lexo më shumë" : "Read more"}
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content className="text-left">
          <Timeline.Time>
            {lang === "al" ? al.Timeline.Forth.Date : en.Timeline.Forth.Date}
          </Timeline.Time>
          <Timeline.Title>
            {lang === "al" ? al.Timeline.Forth.Title : en.Timeline.Forth.Title}
          </Timeline.Title>
          <Timeline.Body>
            {lang === "al" ? al.Timeline.Forth.Text : en.Timeline.Forth.Text}
          </Timeline.Body>
          <Button
            color="gray"
            onClick={() => {
              setContent(
                lang === "al"
                  ? al.Timeline.Forth.Content
                  : en.Timeline.Forth.Content
              ),
                setTitle(
                  lang === "al"
                    ? al.Timeline.Forth.Title
                    : en.Timeline.Forth.Title
                ),
                setOpenModal(true);
            }}
          >
            {lang === "al" ? "Lexo më shumë" : "Read more"}
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content className="text-left">
          <Timeline.Time>
            {lang === "al" ? al.Timeline.Five.Date : en.Timeline.Five.Date}
          </Timeline.Time>
          <Timeline.Title>
            {lang === "al" ? al.Timeline.Five.Title : en.Timeline.Five.Title}
          </Timeline.Title>
          <Timeline.Body>
            {lang === "al" ? al.Timeline.Five.Text : en.Timeline.Five.Text}
          </Timeline.Body>
          <Button
            color="gray"
            onClick={() => {
              setContent(
                lang === "al"
                  ? al.Timeline.Five.Content
                  : en.Timeline.Five.Content
              ),
                setTitle(
                  lang === "al"
                    ? al.Timeline.Five.Title
                    : en.Timeline.Five.Title
                ),
                setOpenModal(true);
            }}
          >
            {lang === "al" ? "Lexo më shumë" : "Read more"}
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>

      <MainModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        content={content}
        title={title}
      />
    </Timeline>
  );
}

export default MainTimeline;
