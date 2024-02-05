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

  const customTheme = {
    root: {
      direction: {
        horizontal: "items-base sm:flex",
        vertical: "relative border-l border-gray-200 dark:border-gray-700",
      },
    },
    item: {
      root: {
        horizontal: "relative mb-6 sm:mb-0",
        vertical: "mb-10 ml-6",
      },
      content: {
        root: {
          base: "mt-3 sm:pr-8",
        },
        body: {
          base: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400",
        },
        time: {
          base: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
        },
        title: {
          base: "text-lg font-semibold text-gray-900 dark:text-white",
        },
      },
      point: {
        horizontal: "flex items-center",
        line: "hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex",
        marker: {
          base: {
            horizontal:
              "absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
            vertical:
              "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
          },
          icon: {
            base: "h-3 w-3 text-red-600 dark:text-cyan-300",
            wrapper:
              "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-200 ring-8 ring-white dark:bg-cyan-900 dark:ring-gray-900",
          },
        },
        vertical: "",
      },
    },
  };

  return (
    <Timeline theme={customTheme} horizontal id="journey2">
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
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content className="text-left">
          <Timeline.Time>
            {lang === "al" ? al.Timeline.Six.Date : en.Timeline.Six.Date}
          </Timeline.Time>
          <Timeline.Title>
            {lang === "al" ? al.Timeline.Six.Title : en.Timeline.Six.Title}
          </Timeline.Title>
          <Timeline.Body>
            {lang === "al" ? al.Timeline.Six.Text : en.Timeline.Six.Text}
          </Timeline.Body>
          <Button
            color="gray"
            onClick={() => {
              setContent(
                lang === "al"
                  ? al.Timeline.Six.Content
                  : en.Timeline.Six.Content
              ),
                setTitle(
                  lang === "al" ? al.Timeline.Six.Title : en.Timeline.Six.Title
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
            {lang === "al" ? al.Timeline.Seven.Date : en.Timeline.Seven.Date}
          </Timeline.Time>
          <Timeline.Title>
            {lang === "al" ? al.Timeline.Seven.Title : en.Timeline.Seven.Title}
          </Timeline.Title>
          <Timeline.Body>
            {lang === "al" ? al.Timeline.Seven.Text : en.Timeline.Seven.Text}
          </Timeline.Body>
          <Button
            color="gray"
            onClick={() => {
              setContent(
                lang === "al"
                  ? al.Timeline.Seven.Content
                  : en.Timeline.Seven.Content
              ),
                setTitle(
                  lang === "al"
                    ? al.Timeline.Seven.Title
                    : en.Timeline.Seven.Title
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
