import React from 'react';
import './ComicBook.css'; // Import CSS for styling

const ComicBook = () => {
  // Example data for comic panels (you can replace this with your data)
  const comicPanels = [
    { id: 1, content: 'Panel 1' },
    { id: 2, content: 'Panel 2' },
    { id: 3, content: 'Panel 3' },
    // ... Add more panels as needed
  ];

  return (
    <div className="comic-book">
      {comicPanels.map((panel) => (
        <div key={panel.id} className={`panel panel-${panel.id}`}>
          {panel.content}
        </div>
      ))}
    </div>
  );
};

export default ComicBook;
