{/* Powered by Section - Code Theme */}
import { motion } from 'framer-motion';
import { Code2, Terminal, Braces } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';


const CodeBlock = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2"
  >
    <Code2 className="w-8 h-8 text-blue-400/30" />
  </motion.div>
);

const PoweredBySection = () => {
  const codeLines = [
    { id: 1, content: 'class TechnicalPartner {', delay: 0 },
    { id: 2, content: '  name: "AnyCode"', delay: 0.1 },
    { id: 3, content: '  expertise: ["Web", "Mobile", "AI"]', delay: 0.2 },
    { id: 4, content: '}', delay: 0.3 }
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-12 border-t border-slate-800"
    >
      <div className="flex flex-col items-center justify-center">
        {/* Main Container */}
        <div className="relative w-full max-w-2xl">
          {/* Terminal-like Window */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="relative rounded-xl overflow-hidden backdrop-blur-sm"
          >
            {/* Terminal Header */}
            <div className="bg-slate-800 p-3 flex items-center space-x-2">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-sm text-slate-400 font-mono">powered-by.tsx</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="bg-slate-900 p-6 relative">
              {/* Animated Code Lines */}
              <div className="space-y-2 mb-6">
                {codeLines.map((line) => (
                  <motion.div
                    key={line.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: line.delay }}
                    className="flex items-center space-x-4"
                  >
                    <span className="text-slate-600 font-mono text-sm">{line.id}</span>
                    <span className="font-mono text-sm">
                      <span className="text-blue-400">{line.content.split(":")[0]}</span>
                      {line.content.includes(":") && (
                        <span className="text-slate-400">:{line.content.split(":")[1]}</span>
                      )}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Logo and Brand Section */}
              <div className="flex items-center justify-center space-x-4 py-4 px-6 bg-slate-800/50 rounded-lg border border-slate-700">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <Image 
                    src="/logo-anycode.png" 
                    alt="AnyCode Logo" 
                    width={100}
                    height={35}
                    className="h-8 w-auto relative"
                  />
                </motion.div>

                <div className="h-8 w-px bg-slate-700" />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="font-mono text-lg font-medium"
                >
                  <span className="text-emerald-400">&lt;</span>
                  <span className="text-blue-400">Any</span>
                  <span className="text-emerald-400">Code</span>
                  <span className="text-blue-400">/&gt;</span>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <Terminal className="absolute left-4 bottom-4 w-5 h-5 text-slate-600" />
              <Braces className="absolute right-4 bottom-4 w-5 h-5 text-slate-600" />
            </div>
          </motion.div>

          {/* Floating Code Icons */}
          <div className="absolute -left-4 -top-4 w-8 h-8 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center">
            <Code2 className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="absolute -right-4 -bottom-4 w-8 h-8 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center">
            <Terminal className="w-5 h-5 text-blue-400" />
          </div>
        </div>

        {/* Additional Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6"
        >
          <Link
            href="/tech-partner"
            className="inline-flex items-center space-x-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-300"
          >
            <span>View our technical capabilities</span>
            <Code2 className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PoweredBySection;