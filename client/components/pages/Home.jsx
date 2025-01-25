import React from "react"
import Jumbotron from "./sub-comps/Jumbotron"
// import JumboTitle from "../blocks/JumboTitle";
import JumboTitleNew from "./sub-comps/JumboTitleNew"
// import Dash from "../Dash";
// import Banner from "../Banner";
// import Section from "../blocks/Section";
import Container from "./sub-comps/Container"

// Images
// import DSM from "../../assets/images/Homepage/Design-System-Mockup.png"
import GROM from "../../assets/images/Homepage/GRO-Mockup-2.png"
// import RUNRM from "../../assets/images/Homepage/RUNR-Mockup.png"
import GRCM from "../../assets/images/Homepage/Grocery-Mockup.png"
import LKM from "../../assets/images/listedkit/ListedKit-Cover.png"
import COM from "../../assets/images/cowello/CoWello-Cover.png"

export default function Home(props) {
    const sectionConfigs = [
        {
            subtitle: "LEAD PRODUCT DESIGNER",
            title: "Reimagining Real Estate Transactions with AI Document Intelligence",
            description:
                "Lead the design of an AI-Powered Real Estate Document Reader that reduced data entry for real estate professionals by up to 59%.",
            ctaText: "See Solution",
            ctaLink: "/listedkit",
            imageUrl: `${LKM}`,
            className: "bg-dark text-white justify-content-center",
            // imgClassName: "pr-0 mr-0",
            animate: true,
            disabled: false,
            style: {
                // backgroundImage: `url("${GRO_APP_PNG}") no-repeat`
            },
        },
        {
            subtitle: "LEAD PRODUCT DESIGNER",
            title: "Revamping Onboarding to Increase New User Activation",
            description:
                "Redesigned the onboarding for CoWello, a Space Management Platform for Coworking Space Owners.",
            ctaText: "See Solution",
            ctaLink: "/cowello",
            className: "justify-content-center",
            imageUrl: `${COM}`,
            animate: true,
            disabled: false,
            style: {
                // backgroundImage: `url("${GRO_APP_PNG}") no-repeat`
            },
        },
        {
            subtitle: "UX/UI DESIGN",
            title: "Grocery App",
            description:
                "Researched and designed a shopping list feature to improve user experience for ordering grocery delivery.",
            ctaText: "See Solution",
            ctaLink: "/groceryapp",
            imageUrl: `${GRCM}`,
            className: "bg-dark text-white",
            animate: true,
            disabled: false,
            style: {
                // backgroundImage: `url("${GRO_APP_PNG}") no-repeat`
            },
        },
        {
            subtitle: "UX/UI DESIGN",
            title: "GRO App",
            description:
                "Led the research and design for an innovative gardening app.",
            ctaText: "See solution",
            ctaLink: "/gro",
            imageUrl: `${GROM}`,
            className: "",
            animate: true,
            disabled: false,
            style: {
                // backgroundImage: `url("${GRO_APP_PNG}") no-repeat`
            },
        },
        // {
        //     subtitle: "UX/UI DESIGN",
        //     title: "RUNR App",
        //     description:
        //         "UX Research and Design to increase RUNR fitness app user engagement.",
        //     ctaText: "See solution",
        //     ctaLink: "/runr",
        //     imageUrl: `${RUNRM}`,
        //     className: "bg-dark text-white",
        //     animate: true,
        //     disabled: false,
        //     style: {
        //         // backgroundImage: `url("${GRO_APP_PNG}") no-repeat`
        //     },
        // },
        // {
        //     subtitle: "CASE STUDY",
        //     title: "Design System",
        //     description: "Established a design system for a mobile app.",
        //     ctaText: "See solution",
        //     ctaLink: "/designstudy",
        //     imageUrl: `${DSM}`,
        //     className: "--ds",
        //     animate: true,
        //     disabled: false,
        //     style: {
        //         // backgroundImage: `url("${SAYV_APP_GIF}") no-repeat`
        //     },
        // },
    ]

    let sections = sectionConfigs.map((config, index) => {
        let textOrder = (index + 1) % 2 === 0 ? 1 : 0
        return (
            <Container
                key={`${config.title}-${index}`}
                textOrder={textOrder}
                {...config}
            />
        )
    })

    return (
        <main>
            <Jumbotron
                titleComp={JumboTitleNew}
                titleCompProps={{
                    subtitleTop: "Hello, I'm Katrina",
                    ctaText: "See My Work",
                    ctaLink: `#${sectionConfigs[0].title}`,
                }}
                class="jumbotron-full"
            />
            <div className="container-fluid p-0">
                <a name={`${sectionConfigs[0].title}`} />
                {sections}
            </div>
        </main>
    )
}
