import React from "react";
import FaqBackground from "../assets/backgrounds/bg-faq.png"
const Faq = () => {
  const faqContent = [
    {
      question: "Can Tiktok Follower Be Bought?",
      answer:
        "Of course, we are for it! We are a reliable platform that sells genuine TikTok followers. We have verification from reputable organizations, which ensures the credibility of our services. When you purchase from us, you can be confident that you&apos;ll receive high-quality followers who will help you grow your TikTok presence and boost your engagement.",
    },
    {
      question: " Can I buy followers for my TikTok account?",
      answer:
        "Yes, we offer genuine TikTok followers from real accounts. Buying followers helps enhance your online presence and grow your engagement on the platform.",
    },
    {
      question: "Is it safe to buy TikTok followers?",
      answer:
        "Absolutely! Our services are verified by reputable organizations, ensuring that the followers you receive are authentic and won't violate TikTok’s policies.",
    },
    {
      question:
        " How long does it take to see results after purchasing followers?",
      answer:
        "Typically, you will start seeing an increase in followers within 24-48 hours after your purchase.",
    },
    {
      question: "Will buying followers affect my account’s engagement?",
      answer:
        "Yes, buying followers can increase your engagement as more followers are likely to interact with your content.",
    },
    {
      question: "Are the followers I purchase permanent?",
      answer:
        "Yes, the followers we provide are real and permanent. However, follower counts can fluctuate due to TikTok’s regular maintenance or user activity.",
    },
    {
      question: "Do you offer services for other social media platforms?",
      answer:
        "Yes, we provide services for Instagram, YouTube, Facebook, and more. You can buy followers, likes, and views for all major social media platforms.",
    },
    {
      question: "Is it legal to buy TikTok followers?",
      answer:
        "Yes, purchasing followers is legal. However, it's important to work with a trusted provider like us to ensure compliance with TikTok's guidelines.",
    },
    {
      question: " How do I purchase followers for my TikTok account?",
      answer:
        "Simply choose your preferred package, enter your TikTok username, and complete the payment process. You’ll see the results in no time!",
    },
    {
      question: " What payment methods do you accept?",
      answer:
        "We accept major credit cards, PayPal,easypaisa,jazzcash and other secure payment methods for your convenience.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes, our dedicated support team is available 24/7 to assist with any queries regarding your purchase.",
    },
  ];
  return (
    <div className="min-w-screen min-h-screen my-2 " >
      <div className="lg:grid-cols-2 lg:gap-20 sm:grid-cols-1 sm:container sm:mx-auto  grid ">
        {/* FAQ HEADING */}
        <div className=" col-span-1 relative items-center text-center  flex flex-col lg:ps-22">
            <img src={FaqBackground} alt="" className="absolute inset-0 " />
          <h1 className="font-bold text-4xl tracking-wider leading-normal mb-3 ">
            Frequently Asked <br /> Questions
          </h1>
          <p className="font-light text-lg max-w-[30rem]">
            Got questions about Frequently Asked Questions? We&apos;re ready to
            help you understand everything you need to know. Sit back, relax,
            and let&apos;s dive into the details together!
          </p>
        </div>
        {/* Accordians */}
        <div className=" col-span-1">
          {faqContent &&
            faqContent?.map((item, index) => (
              <div className="shadow-xl py-5 px-4 rounded-lg hover:bg-red-tiktok transition delay-100 hover:text-white my-2" key={index}>
                <h4 className=" font-bold text-3xl my-4">
                  {item.question}
                </h4>
                <p className="font-light">
                  {item.answer}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
