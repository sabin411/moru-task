import React, { Children, useCallback, useState } from 'react';

// packages
import { Button, Modal as AntDModal } from 'antd';

export default function editModal() {
  const [modalOpen, setModalOpen] = useState(false);

  const Modal = useCallback(
    ({ children }: { children: JSX.Element }) => {
      return (
        <>
          <AntDModal
            title='Edit User'
            open={modalOpen}
            onOk={() => {
              setModalOpen(false);
            }}
            onCancel={() => setModalOpen(false)}
            footer={[]}
          >
            {children}
          </AntDModal>
        </>
      );
    },
    [modalOpen],
  );

  return {
    Modal,
    setModalOpen,
  };
}
