# react-cozy-modal

> A beautifully crafted and user-friendly modal component for React applications, with easy customization options.

[![NPM](https://img.shields.io/npm/v/react-cozyp-modal.svg)](https://www.npmjs.com/package/react-cozyp-modal) [![React](https://img.shields.io/badge/React-%E2%9C%94-blue)](https://reactjs.org/)

## Install

```bash
npm install --save react-cozyp-modal
```

## Basic Usage

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
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
};

export default Example;
```

## Advanced usage with custom styles:

```tsx
import React, { useState } from 'react';
import { Modal } from 'react-cozyp-modal';
import 'react-cozyp-modal/dist/modal.css';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  const customStyles = {
    blocker: { backgroundColor: 'rgba(0, 0, 255, 0.75)' },
    modal: { 
      backgroundColor: '#f0f0f0',
      borderRadius: '10px',
      boxShadow: '0 0 20px #000'
    },
    closeButton: { 
      backgroundColor: '#ff0000',
      color: '#ffffff'
    }
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        customStyles={customStyles}
      >
        <p>This is a modal with custom styles.</p>
      </Modal>
    </div>
  );
};

export default Example;
```

## License

MIT © [EGLParadoX](https://github.com/EGLParadoX)
