import { Accordion } from "flowbite-react";

function InfoSection() {
  return (
    <Accordion id="journey" className="">
      <Accordion.Panel>
        <Accordion.Title>What is my Goal?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            nostrum ipsam velit odit deleniti cumque quidem quaerat minus
            similique? Laudantium quod perferendis explicabo. Adipisci, aliquid
            odio asperiores qui sapiente dolorem.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>What am i doing next?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam soluta
            libero quasi voluptatibus, alias rem laboriosam repellendus
            necessitatibus natus sequi consequuntur pariatur, odit voluptatem
            inventore ex voluptate nisi quibusdam! Numquam?
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>How can you help me on this journey?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            modi nam nemo error cumque deserunt, ipsa minima maxime, blanditiis,
            quis eum. Beatae reprehenderit veritatis sed repudiandae, tempore a
            id atque!
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}

export default InfoSection;
