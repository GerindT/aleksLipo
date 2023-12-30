import { Button, Modal } from "flowbite-react";

function MainNavbar({ openModal, setOpenModal, content, title }) {
  return (
    <>
      <Modal show={openModal} size={"5xl"} onClose={() => setOpenModal(false)}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {content}
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MainNavbar;
