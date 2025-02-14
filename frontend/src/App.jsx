import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1A40] to-[#4C2A85] flex flex-col items-center justify-center text-white text-center p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-4"
      >
        Happy Valentine's Day, Samiiii ❤️
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl max-w-lg"
      >
        Aba yk what I feel about you, tara I'm just waiting for your study to be
        better first, but I couldn't hold back doing something special today.
        Bhandaina bhanera socheko thiye as timle Valentines haru chapri le
        banauxan bhanera, tara aba I hope you find this good and not chapri wala
        🙂😉. Happy Valentine's Sweetheart💞.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link
          to="/letter"
          className="mt-6 inline-block px-6 py-3 bg-purple-500 text-white font-bold rounded-lg shadow-lg hover:bg-purple-600 transition"
        >
          Next thing
        </Link>
      </motion.div>
    </div>
  );
};

const Letter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#1A1A40] to-[#4C2A85] flex flex-col items-center justify-center text-white p-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-4"
      >
        Mero kura haru 😁😘
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg max-w-xl text-center"
      >
        Mero harek din goes veryyyyyyy happily after talking to you. Timlai
        dekhera mero man bharinxa 🫠. I just can't go a day without talking to
        you mayaluuuuuuu. You're the only one person whom I have shared my
        problems with, mero didi sanga ni share gardaina maile, teti special xau
        mero lagi. Aba ik maile dherai risauna halxu kina ki I'm very stupid
        yesto kurama, tara I'll try not to do these (tara ka bata garxu jo,
        yestai xuu ma k garuuu 😭). I'm always missing you when hami boleko
        hudainam. Your absence hurt me a lot bhanna parda 🥲 (emotionally weak
        xu halka tara I do respect your space). Aba timi risauda kasto feel
        garxu tyo ta express gardaina kina ki bhai sakeko kura ma feri timlai
        guilty or regret feel garauna man lagdaina, j xa present ko kura rakhna
        man lagxa, as timro past ko kura haru le timlai traumatize gareko xa. I
        just have unfathomable words for you, aile lai yetti jo lekhe. I just
        trulyyy care about you, baby (😆). Thank youuuuu soooo muchhhh for being
        with me 💞💞
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition"
        >
          Back Home
        </Link>
      </motion.div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/letter" element={<Letter />} />
      </Routes>
    </Router>
  );
};

export default App;
