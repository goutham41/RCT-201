import React from 'react'

type CardProps = {
  title: string;
  desc: string;
  index: number;
  isVisible: boolean;
  handleOpen: (i: number) => void;
};
const TabsChild = ({
  title,
  desc,
  isVisible,
  handleOpen,
  index,
}: CardProps) => {
  return (
    <>
      <div>
        <h4 className="coin" onClick={() => handleOpen(index)}>
          {title}
        </h4>
        {isVisible && <p>{desc}</p>}
      </div>
    </>
  );
};

export default TabsChild