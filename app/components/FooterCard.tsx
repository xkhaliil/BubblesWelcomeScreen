import React from "react";
import { IconType } from "react-icons";
import {
  FiCheck,
  FiCreditCard,
  FiEyeOff,
  FiMail,
  FiUser,
  FiUsers,
} from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import Team from "./Team";
import { BsInfoCircle } from 'react-icons/bs';
import ContactMethods from "./Contact";
import { RiTeamLine } from 'react-icons/ri';
import AboutSection from "./About";
import ThreeTierPricingHorizontal from "./Billing";
import BillingCard from "./Billing";
// const ExampleWrapper = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     return (
//       <div className="px-4 py-64 bg-slate-900 grid place-content-center">
//         <button
//           onClick={() => setIsOpen(true)}
//           className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium px-4 py-2 rounded hover:opacity-90 transition-opacity"
//         >
//           Open Modal
//         </button>
//         <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
//       </div>
//     );
//   };

const SpringModalSupport = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-red-100 to-white text-black p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
              <ContactMethods/>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-red-400/10 transition-colors text-black font-semibold w-full py-2 rounded"
                >
                 Understood!
                </button>
                
              </div>
           
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
const SpringModalAbout = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-red-200 to-white text-black p-6 rounded-lg w-full max-w-xl shadow-xl cursor-default relative overflow-hidden"
          >
          <AboutSection/>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-red-500/10 transition-colors text-black font-semibold w-full py-2 rounded"
                >
                  Go back
                </button>
                
              </div>
           
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
const SpringModalTeam = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white text-white p-6 rounded-lg w-full max-w-6xl shadow-xl cursor-default relative overflow-hidden"
          >
           
              <div>
                <Team/>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-red-100 transition-colors text-red-600 font-semibold w-full py-2 rounded"
                >
                  Amazing
                </button>
                
              </div>
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const SpringModalBilling = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-red-100  to-white text-black p-6 rounded-lg w-full max-w-5xl shadow-xl cursor-default relative overflow-hidden"
          >
            <BillingCard />
              <div className="flex gap-2">
                
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  Coming soon!
                </button>
              </div>
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
const HoverDevCards = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-4">
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <Card1 title="Support" subtitle="Manage Support" Icon={BiSupport} />
        <Card2 title="About" subtitle="Manage email" Icon={BsInfoCircle}onClick={() => setIsOpen(true)} />
        <Card3 title="Our Team" subtitle="Manage team" Icon={RiTeamLine}onClick={() => setIsOpen(true)} />
        <Card4 title="Billing" subtitle="Manage billing" Icon={FiCreditCard}onClick={() => setIsOpen(true)} />
      </div>
    </div>
  );
};

interface CardType {
  title: string;
  subtitle: string;
  Icon: IconType;
  onClick?: () => void;
}

const Card1 = ({ title, subtitle, Icon, onClick }: CardType) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <a className="w-full p-4 rounded border-[1px] border-red-300 relative overflow-hidden group bg-white"
       onClick={() => setIsOpen(true)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-red-100 group-hover:text-red-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-red-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-red-900 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-red-400 group-hover:text-red-200 relative z-10 duration-300">
        {subtitle}
      </p>
      <SpringModalSupport isOpen={isOpen} setIsOpen={setIsOpen} />
    </a>
  );
};

const Card2 = ({ title, subtitle, Icon, onClick }: CardType) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <a className="w-full p-4 rounded border-[1px] border-red-300 relative overflow-hidden group bg-white"
       onClick={() => setIsOpen(true)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-red-100 group-hover:text-red-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-red-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-red-900 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-red-400 group-hover:text-red-200 relative z-10 duration-300">
        {subtitle}
      </p>
      <SpringModalAbout isOpen={isOpen} setIsOpen={setIsOpen} />
    </a>
  );
};

const Card3 = ({ title, subtitle, Icon, onClick }: CardType) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <a className="w-full p-4 rounded border-[1px] border-red-300 relative overflow-hidden group bg-white"
       onClick={() => setIsOpen(true)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-red-100 group-hover:text-red-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-red-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-red-900 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-red-400 group-hover:text-red-200 relative z-10 duration-300">
        {subtitle}
      </p>
      <SpringModalTeam isOpen={isOpen} setIsOpen={setIsOpen} />
    </a>
  );
};

const Card4 = ({ title, subtitle, Icon, onClick }: CardType) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <a className="w-full p-4 rounded border-[1px] border-red-300 relative overflow-hidden group bg-white"
       onClick={() => setIsOpen(true)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-red-100 group-hover:text-red-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-red-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-red-900 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-red-400 group-hover:text-red-200 relative z-10 duration-300">
        {subtitle}
      </p>
      <SpringModalBilling isOpen={isOpen} setIsOpen={setIsOpen} />
    </a>
  );
};

export default HoverDevCards;
