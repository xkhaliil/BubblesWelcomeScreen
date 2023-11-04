const BillingCard = () => {

    const plan = {
        name: "Basic plan",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 32,
        isMostPop: true,
        features: [
            "Curabitur faucibus",
            "Curabitur faucibus",
            "Curabitur faucibus",
            "Curabitur faucibus",
            "Curabitur faucibus",
            "Curabitur faucibus",
            "Curabitur faucibus",
            "Curabitur faucibus",
        ],
    }

    const features = [
        {
          name: "Profile Matching",
          desc: "Our advanced algorithms match you with potential partners based on your interests, preferences, and compatibility.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              
            </svg>
          ),
        },
        {
          name: "Chat & Messaging",
          desc: "Easily connect and communicate with other users through our secure and user-friendly chat and messaging system.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              
            </svg>
          ),
        },
        {
          name: "Privacy Control",
          desc: "You have full control over your privacy. Choose what information you want to share and who can see your profile.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              
            </svg>
          ),
        },
        {
          name: "Security Features",
          desc: "We take your security seriously. Our platform is equipped with the latest security measures to keep your data safe.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              
            </svg>
          ),
        },
      ];
      
      // Rest of the code remains the same
      

    return (
        <section className='relative py-14'>
            <div className="max-w-screen-xl mx-auto text-gray-600 md:px-8">
                <div className='relative max-w-xl space-y-3 px-4 md:px-0'>
                    <h3 className="text-indigo-600 font-semibold">
                        Pricing
                    </h3>
                    <p className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                        Pay as you grow
                    </p>
                    <div className='max-w-xl'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur consequat nunc.
                        </p>
                    </div>
                </div>
                <div className='mt-16 justify-between gap-8 md:flex'>
                    <ul className="flex-1 max-w-md space-y-10 px-4 md:px-0">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-3">
                                    <div className="flex-none w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-gray-800 font-medium">
                                            {item.name}
                                        </h4>
                                        <p className="text-gray-600 mt-2 md:text-sm">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="flex-1 flex flex-col border-y mt-6 md:max-w-xl md:rounded-xl md:border md:border-x-none md:shadow-lg md:mt-0">
                        <div className="p-4 py-8 border-b md:p-8">
                            <div className="justify-between flex">
                                <div className="max-w-xs">
                                    <span className='text-2xl text-gray-800 font-semibold sm:text-3xl'>
                                        {plan.name}
                                    </span>
                                    <p className="mt-3 sm:text-sm">
                                        {plan.desc}
                                    </p>
                                </div>
                                <div className='flex-none text-gray-800 text-2xl font-semibold sm:text-3xl'>
                                    ${plan.price} <span className="text-xl text-gray-600 font-normal">/mo</span>
                                </div>
                            </div>
                            <button className='mt-4 px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700'>
                                Get Started
                            </button>
                        </div>
                        <ul className='p-4 space-y-3 sm:grid sm:grid-cols-2 md:block md:p-8 lg:grid'>
                            <div className="pb-2 col-span-2 text-gray-800 font-medium">
                                <p>Features</p>
                            </div>
                            {
                                plan.features.map((featureItem, idx) => (
                                    <li key={idx} className='flex items-center gap-5'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='h-5 w-5 text-indigo-600'
                                            viewBox='0 0 20 20'
                                            fill='currentColor'>
                                            <path
                                                fill-rule='evenodd'
                                                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                clip-rule='evenodd'></path>
                                        </svg>
                                        {featureItem}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default BillingCard;