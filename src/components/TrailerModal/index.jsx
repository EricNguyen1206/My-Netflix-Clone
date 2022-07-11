import Modal, { ModalContent } from "../Modal";

function TrailerModal({ item }) {
    const onClose = () => {
        const modal = document.querySelector(`#modal__${item.id}`);
        modal.classList.remove("active");
        modal.querySelector("iframe").setAttribute("src", "");
    };

    return (
        <Modal active={false} id={`modal__${item.id}`}>
            <ModalContent item={item} onClose={onClose}>
                <iframe src="" title="videos"></iframe>
            </ModalContent>
        </Modal>
    );
}

export default TrailerModal;
