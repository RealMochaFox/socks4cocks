"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export function Disclaimer(props: { className?: string }) {
  const [openModal, setOpenModal] = useState(true);

  return (
    <>
      <a className={props.className} onClick={() => setOpenModal(true)}>
        Disclaimer
      </a>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Socks For Cocks Disclaimer</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              It should go without saying that this entire website is satire.
              Nothing on this website should be taken seriously. All people,
              places, animals, and events are fictional and any resemblance to
              real people, places, or events is purely coincidental. Any
              information you provide in the form is not stored or used in any
              way. Socks For Cocks does not accept donations or offer any
              products for sale. Socks For Cocks is not affiliated with any
              other websites, and is not a real charity.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Got It</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
