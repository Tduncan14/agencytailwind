import React from 'react';




  function Marketing (){

    const strategies = [
        {
          title: "CONTENT MARKETING",
          description:
            "Content marketing is a form of marketing focused on creating, publishing, and distributing content for a targeted audience online. ",
          image: "images/content-marketing.png",
        },
        {
          title: "INBOUND MARKETING",
          description:
            "Inbound is far and away the most effective B2B marketing strategy because it leverages the strengths of the majority of the other nine strategies to attract, engage, and delight customers. ",
          image: "images/inbound-marketing.png",
        },
        {
          title: "SOCIAL MEDIA",
          description:
            "Social media marketing focuses on providing users with content they find valuable and want to share across their social networks, resulting in increased visibility and website traffic.   ",
          image: "images/social-media.png",
        },
        {
          title: "SEARCH ENGINE OPTIMIZATION",
          description:
            "Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.",
          image: "images/seo.png",
        },
      ];




    return( 
        <>
        <h1 className="text-5xl font-semibold text-primary">Want to boost your business growth ?</h1>
        <h1 className="text-7xl font-semibold text-primary mt-10"> The <b className="text-secondary">Solution</b> is here ...</h1>


        <p className=" text-gray-600 text-xl mt-10">
            Curious about what business professionals think of different marketing strategies. We took a look at recent
            survey results and reports that compiled data on the topic, and created a list of 10 B2B marketing strategies commonly
            recognized as successful regardless of industry. Here's what we found, in no particular order

        </p>
        </>
    )
  }


  export default Marketing