import React from 'react';

const BookDetails = ({name,authore}) => {
    return (
      <div className="fle-col ">
        <h1 className='font-bold text-xl md-2'>{name}</h1>
        <p>{authore} </p>
      </div>
    );
};

export default BookDetails;