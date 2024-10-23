import { Card, CardProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { forwardRef } from "react";

export const MotionCard = motion(
    forwardRef<HTMLDivElement, CardProps>((props, ref) => (
        <Card ref={ref} {...props} />
    ))
);
