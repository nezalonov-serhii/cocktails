import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const InfiniteScroll = ({ data, renderItem }) => {
  const [list, setList] = useState(data.slice(0, 9));
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 <
        document.documentElement.offsetHeight
      )
        return;
      setLoading(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!loading) return;
    if (page * 10 >= data.length) return setLoading(false);

    setList(list.concat(data.slice(page * 9, page * 9 + 9)));
    setPage(page + 1);
    setLoading(false);

    scroll.scrollMore(500);
  }, [data, list, loading, page]);

  return (
    <>
      {list.map(renderItem)}
      {loading && <p>Loading...</p>}
    </>
  );
};

export default InfiniteScroll;
