"use client"

import { motion } from "framer-motion"
const ViewBasedAnimation = () => {
    return (
        <div >
            <div className="h-[150vh]"></div>
            <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className='h-screen bg-black text-white' >
                home
            </motion.div>

        </div >
    );
};

export default ViewBasedAnimation;