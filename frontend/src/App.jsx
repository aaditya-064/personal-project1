import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Card from "./components/Card"; // Importing the custom Card component
import { Input } from "./components/Input"; // Custom Input component
import { Button } from "./components/Button"; // Custom Button component
import { MailOpen } from "lucide-react"; // MailOpen icon from lucide-react
import emailjs from "emailjs-com"; // Import EmailJS
import "./App.css"; // Import the CSS file for flower animation

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [reply, setReply] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const sendReply = () => {
    const templateParams = {
      to_name: "Aaditya Shrestha", // Replace with the recipient's name
      from_name: "Samikshya Shrestha", // Replace with your name
      message: reply, // Send the reply message here
    };

    emailjs
      .send(
        "service_kwa81gb",
        "template_0695dse",
        templateParams,
        "Vcrbl3WnBEDoUFf8T"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmitted(true);
          setReply(""); // Clear the input field after submission
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.muted = false; // Unmute
        audioRef.current.play().catch((err) => {
          console.log("Autoplay blocked, waiting for interaction:", err);
        });
      }
    };

    // Play music on mount
    playAudio();

    // If autoplay is blocked, wait for a click
    document.addEventListener("click", playAudio, { once: true });

    return () => document.removeEventListener("click", playAudio);
  }, []); // Runs every time the component mounts

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white p-6 bg-gradient-to-b from-purple-600 to-indigo-800 overflow-hidden">
      {/* Animated Flower Background */}
      <div className="flower-background" />
      <audio ref={audioRef} autoPlay loop muted>
        <source src="/blue.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <motion.div
        className="relative flex flex-col items-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="cursor-pointer mb-4"
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsOpen(true)}
        >
          <MailOpen size={80} />
        </motion.div>
        {!isOpen ? (
          <div>
            <p className="text-xl text-center">
              Click the mailbox to open your letter 💌
            </p>
            <p>
              NOTE: I spoiled it today even though I was supposed to do it
              hand-written. Jasto socheko testo garna payena, yeti matra garna
              sakey thorai time ma 🙃
            </p>
          </div>
        ) : (
          ""
        )}
      </motion.div>

      {isOpen && (
        <motion.div
          className="mt-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <p className="text-lg font-semibold">Dear Samikshya Shrestha,</p>
            <p className="mt-2 text-md z-10">
              Timro birthday samma wait garxu bhanera socheko thiye kina ki I
              wanted to make you happy on this birthday with a little suriprise,
              tara I thought tyo dherai late hunxa, ani yo friday hand-written
              note lekhera bhanxu bhaneko timi friday absent huni raixau. So I'm
              confessing here today although I said to focus on study first (tyo
              bahana banako thiye).
              <br />
              I’ve never bowed before anyone, but for you, I would—because
              you’re the one person I never want to lose. I’ve done things in
              the past without regret, but when it comes to you, I’d apologize a
              thousand times, even when I’m not wrong. I never thought I’d be so
              happy watching a girl who once blocked me turn into someone I
              cherish this much. <br />I don’t easily share my problems with
              anyone, but with you, I feel safe. You listen, you support, and
              that’s what I love about you. You’re caring, amazing, funny, and
              everything I’ve ever wanted in my life. I’ve grown deeply attached
              to you, and no matter what happens, I want to stay. <br /> I want
              to grow with you—not just in love, but in life. I trust you
              completely, and I believe in you. You have so much potential, and
              I know you’ll make your family proud. And I want you to know—I’m
              proud of you too. <br />I know I can be immature and stupid at
              times, but if you accept me for who I am, and for that, I’m truly
              grateful. This bond isn’t something I take lightly, and I never
              want it to break over fake promises. I want us to last. <br />I
              wasn’t always the best, but for you, I’ve changed and want to
              change the bad things you don't like about me. Because you’re
              important to me. Because you matter. <br />I love the way you
              talk, the way you explain things, the way you use your hands while
              speaking—it’s adorable, and I cherish every little detail about
              you. <br />I hope to spend my whole life with you. I love you
              Sami❤️
              <br />
              No Pressure, take the time and reply with a cool mind 🙂💞
            </p>
          </Card>
        </motion.div>
      )}

      {isOpen && (
        <motion.div
          className="mt-6 text-center z-10" // Add z-10 class for higher stacking context
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg">
            Write your reply below or in insta, where ever you want 💌
          </p>
          <Input
            className="mt-2 p-2 border border-gray-300 rounded-md w-80 text-black"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="Your reply..."
          />
          <Button
            className="mt-4 bg-red-600 hover:bg-red-700 text-white p-2 hover:cursor-crosshair rounded-lg transition-colors duration-200"
            onClick={sendReply}
          >
            Send Reply
          </Button>
          {submitted && (
            <p className="mt-2 text-green-400">Reply sent successfully! 💕</p>
          )}
        </motion.div>
      )}
    </div>
  );
}

export default App;
