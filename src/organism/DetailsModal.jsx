import { Modal, ModalOverlay, ModalContent,  ModalHeader, ModalCloseButton, ModalBody, Stack, FormControl, FormLabel, Input } from "@chakra-ui/react";

export const DetailsModal = (props) => {
  const { isOpen, onClose } = props;
  return(
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent className="modal">
        <ModalCloseButton className="modal__btn"/>
        <ModalHeader className="modal__details">詳細</ModalHeader>
        <ModalBody>
          <Stack>
            <FormControl>
              <FormLabel className="modal__label">店名</FormLabel>
              <Input className="modal__input" value="test" isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel className="modal__label">電話番号</FormLabel>
              <Input className="modal__input" value="test" isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel className="modal__label">住所</FormLabel>
              <Input className="modal__input" value="test" isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel className="modal__label">メモ</FormLabel>
              <Input className="modal__input" value="test" isReadOnly />
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

