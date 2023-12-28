import { Button, Modal } from "flowbite-react";

function MainNavbar({ openModal, setOpenModal }) {
  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Info Pop Up</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              atque laudantium ad ratione ipsa a distinctio illo voluptas nobis,
              asperiores adipisci iure fuga non repellat amet. Animi
              necessitatibus quae quidem.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis porro, optio quam debitis voluptas obcaecati aliquam.
              Ipsum ullam optio rerum, perferendis minima dolores sed aperiam
              perspiciatis! Repellat ipsa dignissimos animi.
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MainNavbar;
