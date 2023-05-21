import styled from "styled-components";
import { motion } from "framer-motion";

export const variantLi = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const StyledCardSkills = styled(motion.li)`
  min-width: 170px;
  max-width: 200px;
  height: fit-content;

  border: 1px solid var(--color-gray-1);

  div:nth-child(1) {
    width: 100%;
    height: 35px;

    border-bottom: 1px solid var(--color-gray-1);
    padding: 8px;

    h3 {
      font-weight: 600;
      font-size: 16px;
      line-height: 21px;

      color: var(--color-gray-0);
    }
  }
  div:nth-child(2) {
    width: 100%;
    height: fit-content;

    padding: 8px;
    h4 {
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;

      color: var(--color-gray-1);
    }
  }
`;
