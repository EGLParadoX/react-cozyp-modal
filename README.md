# react-cozy-modal

> A beautifully crafted and user-friendly modal component for React applications.

[![NPM](https://img.shields.io/npm/v/react-cozyp-modal.svg)](https://www.npmjs.com/package/react-cozyp-modal) [![React](https://img.shields.io/badge/React-%E2%9C%94-blue)](https://reactjs.org/)

## Install

```bash
npm install --save react-cozyp-modal
```

## Usage

```tsx
import React, { useState } from 'react';
import { Modal } from 'react-cozyp-modal';
import 'react-cozyp-modal/dist/modal.css';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {/* Content inside the modal */}
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
};

export default Example;

```

## License

MIT © [EGLParadoX](https://github.com/EGLParadoX)
