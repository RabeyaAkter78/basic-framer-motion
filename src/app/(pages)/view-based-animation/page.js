"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react";
const ViewBasedAnimation = () => {
    const ref = useRef();
    const isInView = useInView(ref);

    useEffect(() => {
        console.log("Is in view", isInView)
    }, [isInView])


    return (
        <div >
            <div className="h-[150vh]"></div>
            <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className='h-screen bg-black text-white' >
                home
            </motion.div>
            <div ref={ref} className={`h-[100vh] bg-teal-950 transition ${isInView ? "bg-teal-400" : ""}`}></div>

        </div >
    );
};

export default ViewBasedAnimation;