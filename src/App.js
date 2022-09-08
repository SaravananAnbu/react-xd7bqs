import React from 'react';
import './style.css';

const Avatar = React.lazy(() => import('./Avatar'));

export default function App() {
  return (
    <div>
      <Avatar
        data={[
          {
            id: 1,
            img: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
          },
          {
            id: 2,
            img: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
          },
          {
            id: 3,
            img: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
          },
          {
            id: 4,
            img: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
          },
          {
            id: 5,
            img: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
          },
        ]}
        width={25}
        size={3}
        height={25}
      />
    </div>
  );
}
