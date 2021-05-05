import { Modal, ModalOverlay, ModalContent,  ModalHeader, ModalCloseButton, ModalBody, Stack, FormControl, FormLabel, Input } from "@chakra-ui/react";




export const DetailsModal = (props) => {

  const { isOpen, onClose } = props;

  return(
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack>
            <FormControl>
              <FormLabel>店名</FormLabel>
              <Input value="店名" isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>電話番号</FormLabel>
              <Input value="電話番号" isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>住所</FormLabel>
              <Input value="住所" isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>メモ</FormLabel>
              <Input value="メモ" isReadOnly />
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}