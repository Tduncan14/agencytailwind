import React,{useState} from 'react';



function ClientList(){


    const clients = [
        {
          name: "Slack",
          logo: "images/slack.png",
          url: "https://www.tcs.com/",
          description:
            "Slack is a cloud-based set of tools and services that makes it easy to get work done. It’s built for teams of all sizes, and has a simple, beautiful design that’s easy to use and works great on any device.",
        },
        {
          name: "Twitter",
          logo: "images/twitter.png",
          url: "https://www.infosys.com/",
          description:
            "Twitter is a social networking service that enables users to send and read short 140-character messages called “tweets”.",
        },
        {
          name: "Instagram",
          logo: "images/instagram.png",
          url: "https://www.wipro.com/",
          description:
            "Instagram is a photo-sharing, video-sharing and communication service that is owned and operated by Facebook, Inc. It was created by Kevin Systrom and Mike Krieger, and launched in October 2010.",
        },
        {
          name: "Spotify",
          logo: "images/spotify.png",
          url: "https://www.hcl.com/",
          description:
            "Spotify is a music streaming service that offers a wide range of music genres, including rock, pop, country, electronic, and more. It was created by Swedish computer programmer and programmer Johan Liljegren in 2007.",
        },
        {
          name: "Messenger",
          logo: "images/messenger.png",
          url: "https://www.accenture.com/",
          description:
            "Messenger is a messaging app that enables users to communicate with their friends and family. It was created by Facebook in 2011.",
        },
        {
          name: "Cognizant",
          logo: "images/cognizant.png",
          url: "https://www.capgemini.com/",
          description:
            "Cognizant is a multinational technology company headquartered in Bengaluru, India. It is the largest Indian IT company by market capitalization.",
        },
        {
          name: "Github",
          logo: "images/github.png",
          url: "https://www.cognizant.com/",
          description:
            "GitHub is a web-based hosting service for version control of code using the distributed version control (DVCS) model. It was created by Linus Torvalds in 2005.",
        },
      ];




    return(
        <div className="bg-primary h-44 rounded-b-full">
            <div className="flex justify-center">
                  <div>
                      <div className="flex space-x-10">
                          <h1>{clients[0].name}</h1>
                          <img src={clients[0].logo} className="h-[100px]" alt="" />
                      </div>
                  </div>
            </div>
            
        </div>
    )


}





export default ClientList