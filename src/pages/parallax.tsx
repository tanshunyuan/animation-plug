import styled from 'styled-components';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const Parallax = () => {
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [elementTop, elementTop + 1], [0, -1], {
    clamp: false,
  });
  const y2 = useTransform(scrollY, [elementTop, elementTop + 1], [0, 2], {
    clamp: false,
  });

  useLayoutEffect(() => {
    const element = ref.current;
    setElementTop(element.offsetTop);
  }, [ref]);
  return (
    <Container ref={ref}>
      <Ul>
        <Li style={{ y: y1 }}>par</Li>
        <Li>al</Li>
        <Li style={{ y: y2 }}>lax</Li>
      </Ul>
      <Section></Section>
    </Container>
  );
};
const Ul = styled.ul`
  font-size: 5em;
  list-style-type: none;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Li = styled(motion.li)``;
const Container = styled.div`
  height: 100vh;
`;
const Section = styled.section`
  height: 100%;
`;
export default Parallax;
