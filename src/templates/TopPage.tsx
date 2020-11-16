import React, { FC } from 'react'
import { Link } from 'react-router-dom';

const TopPage: FC = () => {
  return (
    <>
      <p>This is TopPage.</p>
      <div>
        <Link to="/winner" >Winner List</Link>
      </div>
      <div>
        <Link to="/winner/aaa" >Winner Detail</Link>
      </div>
      <div>
        <Link to="/winner/edit" >Create Winner</Link>
      </div>
      <div>
        <Link to="/winner/edit/aaa" >Edit Winner</Link>
      </div>
      <div>
        <Link to="/gift" >Gift List</Link>
      </div>
      <div>
        <Link to="/gift/aaa" >Gift Detail</Link>
      </div>
      <div>
        <Link to="/gift/edit" >CreateGift</Link>
      </div>
      <div>
        <Link to="/gift/edit/aa" >Edit Gift</Link>
      </div>
      <div>
        <Link to="/rotory-on" >Start Rotory</Link>
      </div>
      <div>
        <Link to="/rotory" >Rotory List</Link>
      </div>
      <div>
        <Link to="/rotory/aaa" >Rotory Detail</Link>
      </div>
    </>
  );
};

export default TopPage;