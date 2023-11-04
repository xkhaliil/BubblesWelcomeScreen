import { useRef, useState } from "react"
interface FaqsCardProps {
    faqsList: any; // Replace 'any' with the actual type of `faqsList`
    idx: number;
  }
  
  const FaqsCard = (props: FaqsCardProps) => {
    const answerElRef = useRef<HTMLDivElement | null>(null);
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props
  
    const handleOpenAnswer = () => {
        if (answerElRef.current) {
          const answerElH = (answerElRef.current.childNodes[0] as HTMLElement).offsetHeight;
          setState(!state);
          setAnswerH(`${answerElH + 20}px`);
        }
      };

    return (
        <div 
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-gray-500">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

const AboutSection = () => {

    const faqsList = [
        {
            q: "What is a dating app?",
            a: "A dating app is a mobile application designed to help people meet and connect with potential romantic partners. It provides a platform for users to create profiles, view profiles of others, and interact with them."
        },
        {
            q: "Are dating apps safe to use?",
            a: "Dating apps can be safe, but it's essential to take precautions. Use reputable apps, be cautious about sharing personal information, and meet new people in public places for the first time. Reporting any suspicious activity is also encouraged."
        },
        {
            q: "How can I stay safe while meeting someone from a dating app in person?",
            a: " Always meet in public places, inform a friend or family member about your plans, and trust your instincts. Stay in control of your transportation, and don't share personal or financial information too soon."
        },
        {
            q: "Can I use dating apps for making friends or networking, not just for dating?",
            a: "Some dating apps offer features for making friends or professional networking. Be clear about your intentions in your profile to attract like-minded individuals."
        },
        {
            q: "How long does it typically take to receive a response from technical support?",
            a: "Response times can vary depending on the complexity of the issue and the support service's workload."
        }
    ]
  
    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}
export default AboutSection;