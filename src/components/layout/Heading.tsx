import GitHub from "../GitHub";

export default function Heading() {
      return (
            <>
                  <h1 className="text-4xl font-bold text-center text-slate-200 mb-8">
                        Nyumat's Typing Test
                  </h1>
                  <div className="flex justify-center">
                        <GitHub />
                  </div>
                  <h2 className="text-xl font-bold text-center text-slate-400 py-8 italic">
                        Type the words below as fast as you can!
                  </h2>
            </>
      )
}