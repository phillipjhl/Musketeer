import React from "react"
import LazyLoad from "react-lazyload"

import HeroImg from "../../assets/images/listedkit/ListedKit-Cover.png"
import LKLogo from "../../assets/images/listedkit/ListedKit_Logo.png"
import Circle1 from "../../assets/images/listedkit/Coordinator-Circle.png"
import Circle2 from "../../assets/images/listedkit/Home-For-Sale.png"
import Circle3 from "../../assets/images/listedkit/Real-Estate-Contract.png"

import DiscoveryInterview from "../../assets/images/listedkit/Discovery-Interview.png"
import UsabilityTestingSession from "../../assets/images/listedkit/Usability-Testing-Session.png"
import UserStoryMapping from "../../assets/images/listedkit/User-Story-Mapping.png"
import InHouseTCPersona1 from "../../assets/images/listedkit/In-House TC Persona 1.png"
import IndTCPersona from "../../assets/images/listedkit/Independent TC Persona.png"
import ProgressIndicator from "../../assets/images/listedkit/Progress-Indicator.png"

import BeforeUserTesting from "../../assets/images/listedkit/AI-Contract-Reader-Before.png"
import AfterUserTesting from "../../assets/images/listedkit/AI-Contract-Reader-After.png"

import ResultsStat1 from "../../assets/images/listedkit/Results-Stat-1.png"
import ResultsStat2 from "../../assets/images/listedkit/Results-Stat-2.png"

import LessonsLearned from "../../assets/images/listedkit/Lessons-Learned.png"

import { Trail } from "../blocks/Trail"

import CaseStudyPageWrapper from "./CaseStudyPageWrapper"

const LoadWithTrail = (props) => (
    <LazyLoad {...props} offset={-100}>
        <Trail>{props.children}</Trail>
    </LazyLoad>
)

export default function ListedKit(props) {
    return (
        <CaseStudyPageWrapper
            jumboProps={{
                version: 2,
                className: "bg-listed-kit-blue",
                heroImage: null,
                logo: LKLogo,
                logoWidth: "250px",
                imageClassName: "LK__header",
                title: "Reimagining Real Estate Transactions with AI Document Intelligence",
                children: <p>Prepared by Katrina Langland</p>,
            }}
            bottomBannerMessage={
                <h2>
                    Check out the CoWello <br /> Activation Case Study
                </h2>
            }
            bottomBannerLink={"/cowello"}
        >
            <section className="container pt-5">
                <LoadWithTrail offset={-40} once>
                    <img src={HeroImg} alt="" className="w-100" />
                </LoadWithTrail>
            </section>

            <section className="container pt-5">
                <div className="row my-lg">
                    <div className="col-md-5 mx-auto">
                        <h2>BACKGROUND</h2>
                        <div>
                            <p>
                                ListedKit's AI Contract Reader was developed to
                                address a time-consuming pain point among real
                                estate Transaction Coordinators (TCs): manual
                                data entry.
                            </p>
                            <p className="text-bold">
                                By implementing a machine learning model that
                                reads contract documents and auto-populates key
                                fields,{" "}
                                <span className="text-bold">
                                    we reduced data entry time by approximately
                                    59%.
                                </span>
                            </p>
                            <p>
                                This case study showcases how we discovered the
                                need for this feature, designed a solution to
                                handle wait times, and manage user psych during
                                accuracy reviews.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-5 mx-auto">
                        <div
                            className="border-left border-listed-kit-blue pl-5 h-100 d-flex flex-column justify-content-center"
                            style={{ borderLeftWidth: "3px" }}
                        >
                            <h6 className="mb-0">ROLE</h6>
                            <p className="mb-3">
                                Lead Product Designer and Researcher
                            </p>
                            <h6 className="mb-0">PROJECT</h6>
                            <p className="mb-3">4 Month Intiative</p>
                            <h6 className="mb-0">TOOLS USED</h6>
                            <p className="mb-0">Dovetail</p>
                            <p className="mb-0">Figma</p>
                        </div>
                    </div>
                </div>

                <div className="row my-lg bg-lk-blue-grey py-5">
                    <div className="row col-md-6 mb-5 mb-md-0 p-0">
                        <div className="col-md-11 mx-auto mb-5 mb-md-0 d-flex text-left flex-column justify-content-center align-items-start">
                            <h2 className="">PROBLEM</h2>
                            <div>
                                Transaction Coordinators spend an average of 45
                                minutes reviewing and entering data from real
                                estate contracts to process new transactions.
                                They wanted a solution that could:
                                <ul>
                                    <li>
                                        Reduce time spent on data entry,
                                        allowing them to increase their
                                        transaction volume and more time to
                                        support their clients.
                                    </li>
                                    <li>
                                        Maintain accuracy, minimizing the risk
                                        of errors.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-11 mx-auto mb-5 mb-md-0 d-flex text-left flex-column justify-content-center align-items-start">
                            <h2 className="">SOLUTION</h2>
                            <div>
                                <p>
                                    We recognized a significant opportunity to
                                    use AI/ML capabilities to read and extract
                                    key details from contracts. This feature
                                    reduced time spent on data entry by
                                    approximately 59%.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-5 mb-md-0 d-none d-md-block">
                        <div className="cs-img__block">
                            <LoadWithTrail offset={-40} once>
                                <img
                                    src={Circle1}
                                    id="circle1"
                                    className="circle"
                                    alt=""
                                />
                                <img
                                    src={Circle2}
                                    id="circle2"
                                    className="circle"
                                    alt=""
                                />
                                <img
                                    src={Circle3}
                                    id="circle3"
                                    className="circle"
                                    alt=""
                                />
                            </LoadWithTrail>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container pt-5 d-flex justify-content-center">
                <LoadWithTrail offset={-40} once>
                    <img src={UserStoryMapping} alt="" className="w-100"/>
                </LoadWithTrail>
            </section>

            <section className="container pt-5 mb-lg">
                <div className="col-md-11 mx-auto">
                    <h2>RESEARCH & INSIGHTS</h2>
                    <div>
                        <p>
                            We conducted various methods of research to uncover
                            opportunities, validate solutions, and test designs
                            throughout this project.
                        </p>
                    </div>
                </div>
            </section>

            <section className="container pt-5">
                <div className="row">
                    <div className="col-md-11 mx-auto mb-5 row p-0">
                        <div className="col-12 col-md-6 mx-auto">
                            <h3>Discovery Interviews</h3>
                            <p>
                                A Transaction Coordinator in a discovery session
                                highlighted that data entry was a tedious and
                                time-consuming part of her team's workflow. We
                                conducted 6 more interviews with coordinators
                                and found this was a common challenge felt for
                                all, regardless of experience, team size, or
                                region.
                            </p>

                            <h3>Secondary Research</h3>
                            <p>
                                We explored several other tools, outside of the
                                industry, that were doing similar work to read
                                and parse documents. In addition, I joined
                                online communities for transaction coordinators
                                to learn more about how TCs work, the
                                terminology they use, and challenges they face.
                            </p>
                        </div>

                        <div className="col-12 col-md-6 mx-auto">
                            <LazyLoad offset={-100} once={true}>
                                <Trail>
                                    <img
                                        src={DiscoveryInterview}
                                        alt=""
                                        className="w-100"
                                    />
                                </Trail>
                            </LazyLoad>
                        </div>
                    </div>

                    <div className="col-md-11 mx-auto mb-5 row p-0">
                        <div className="col-12 col-md-6 mx-auto">
                            <h3>Usability Testing</h3>
                            <p>
                                After conducting multiple usability tests with
                                users, we found revised the designs to:
                            </p>

                            <h5>
                                <b>Add a Review Step</b>
                            </h5>
                            <p>
                                In the original designs, parsed data was
                                displayed on a single form with additional
                                fields to start a transaction. This design was
                                overwhelming for users and required a
                                significant amount of scrolling in order to
                                review the data. By having users review the
                                parsed data before viewing and adding additional
                                information reduced users' cognitive load and
                                improved the user experience.
                            </p>

                            <h5>
                                <b>Include Confidence Levels</b>
                            </h5>
                            <p>
                                Accuracy was a common concern for participants.
                                To streamline the review process we added
                                confidence levels to scores that had medium or
                                low confidence that the data was correct, based
                                on the probability from the model. This
                                improvement was well received and helped reduce
                                time spent on reviewing data for accuracy.
                            </p>
                        </div>

                        <div className="col-12 col-md-6 mx-auto">
                            <LazyLoad offset={-100} once={true}>
                                <Trail>
                                    <img
                                        src={UsabilityTestingSession}
                                        alt=""
                                        className="w-100"
                                    />
                                </Trail>
                            </LazyLoad>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container pt-5">
                <div className="col-md-11 mx-auto">
                    <h2>UNDERSTANDING OUR USERS</h2>
                    <p>
                        Real estate transaction coordination is not a
                        one-size-fits-all process. ListedKit's users fall into
                        two main personas, each with unique motivations,
                        challenges, and needs:
                    </p>
                </div>

                <div className="col-md-11 mx-auto mb-5">
                    <h3>In-House Transaction Coordinators</h3>
                    <p>
                        Our team referred to the person responsible for managing
                        transactions for a single team or brokerage as “In-house
                        Transaction Coordinators.” They typically follow a
                        standardized, brokerage-level “system” for each
                        transaction. Because of this, they rely on consistent
                        processes that they apply repeatedly across similar sets
                        of deals.
                    </p>
                    <p>
                        <b>Primary goal:</b> Need a collaborative, easy-to-use
                        system for a high-volume of transactions while offering
                        an excellent user experience.
                    </p>
                    <LoadWithTrail once offset={100} height={674}>
                        <img src={InHouseTCPersona1} alt="" className="w-100" />
                    </LoadWithTrail>
                </div>

                <div className="col-md-11 mx-auto mb-5">
                    <h3>Independent Transaction Coordinators</h3>
                    <p>
                        Independent Transaction Coordinators operate their own
                        small businesses and serve multiple realtors, who may
                        work at different brokerages. Because of this, their
                        systems can vary significantly from agent to agent,
                        requiring flexibility and adaptability in their
                        workflows.
                    </p>

                    <p>
                        <b>Primary goal:</b> Need a collaborative, easy-to-use
                        system for a high-volume of transactions while offering
                        an excellent user experience.Need reliable, customizable
                        systems to suite the unique needs of their clients.
                    </p>

                    <LoadWithTrail once offset={100} height={674}>
                        <img src={IndTCPersona} alt="" className="w-100" />
                    </LoadWithTrail>
                </div>
            </section>

            <section className="container">
                <div className="col-md-11 mx-auto mb-3">
                    <h2>DESIGN SOLUTIONS</h2>
                </div>

                <div className="row">
                    <div className="col-md-11 mx-auto mb-5">
                        <h3>
                            Challenge #1: Designing for a 2-Minute AI Processing
                            Time
                        </h3>
                        <p>
                            The AI model could take up two minutes or longer to
                            read and process a contract, risking user
                            frustration.
                        </p>
                        <p>
                            <b>Design Solutions:</b>
                        </p>
                        <ol>
                            <li>
                                <b>Progress Indicator in Left Navigation:</b>{" "}
                                Displays contract processing status in real
                                time.
                            </li>
                            <li>
                                <b>Parallel Processing:</b> Users can upload
                                multiple contracts simultaneously and continue
                                working in other areas of ListedKit.
                            </li>
                            <li>
                                <b>Notifications:</b>
                                <ul>
                                    <li>
                                        In-App: Alerts the user when the
                                        contract is ready for review.
                                    </li>
                                    <li>
                                        Email: Notifies users if they've ended
                                        their session, so they can return once
                                        the AI has finished processing.
                                    </li>
                                </ul>
                            </li>
                        </ol>

                        <p>
                            By handling the wait time gracefully, TCs feel more
                            productive and don't waste valuable minutes watching
                            a loading screen.
                        </p>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <LazyLoad offset={-100} once>
                            <img
                                src={ProgressIndicator}
                                alt=""
                                className="w-100"
                            />
                        </LazyLoad>
                    </div>
                    <div className="col-md-11 mx-auto mb-5">
                        <h3>
                            Challenge #2: Creating an Enjoyable and Reliable
                            Review Process
                        </h3>
                        <p>
                            TCs needed a simple way to verify the AI's extracted
                            data without losing context or risking errors.
                        </p>
                        <p>
                            <b>Design Solutions:</b>
                        </p>
                        <ol>
                            <li>
                                <b>Side-by-Side View:</b> Displays contract
                                processing status in real time.Display the
                                contract on the right side of the screen, and
                                the extracted data fields on the left. This
                                layout helps TCs cross-reference the original
                                contract easily.
                            </li>
                            <li>
                                <b>Sequential Data Display:</b> Organize
                                extracted fields in the same order they appear
                                in the contract, reducing confusion and speeding
                                up verification.
                            </li>
                            <li>
                                <b>
                                    Confidence Levels: Label Medium and Low
                                    Accuracy Confidence fields:
                                </b>
                                <ul>
                                    <li>Medium (70-80%)</li>
                                    <li>
                                        Low (below 69%) <br />
                                        This helps TCs know which fields might
                                        need a closer look or manual adjustment.
                                    </li>
                                </ul>
                            </li>
                        </ol>

                        <p>
                            By integrating robust verification tools, TCs can
                            swiftly edit any inaccuracies, ensuring data
                            integrity is maintained without adding unnecessary
                            complexity.
                        </p>
                    </div>

                    <div className="col-md-11 mx-auto mb-5 row">
                        <div className="col-12 col-md-6 mx-auto">
                            <LazyLoad offset={-100} once>
                                <img
                                    src={BeforeUserTesting}
                                    alt=""
                                    className="w-100"
                                />
                            </LazyLoad>
                        </div>

                        <div className="col-12 col-md-6 mx-auto">
                            <LazyLoad offset={-100} once>
                                <img
                                    src={AfterUserTesting}
                                    alt=""
                                    className="w-100"
                                />
                            </LazyLoad>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container py-5 bg-lk-blue-grey">
                <div className="row">
                    <div className="col-md-9 mx-auto">
                        <h2>RESULTS</h2>
                        <p>
                            <b>59% Reduction in Data Entry Time:</b> Early data
                            showed a significant decrease in the manual input
                            required to process a new transaction. We found that
                            our model typically found 20-27 fields with 88%
                            accuracy resulting in a 59% reduction of time spent
                            entering data.
                        </p>

                        <p>
                            <b>High User Adoption:</b> The combination of
                            real-time progress updates and side-by-side review
                            boosted user confidence, leading to enthusiastic
                            adoption among both In-House and Independent TCs.
                        </p>

                        <p>
                            <b>Increase in Trials:</b> Marketing highlighted the
                            AI Contract Reader as a key differentiator which led
                            to an increase in trials and paid conversions.
                        </p>
                    </div>

                    <div className="row col-md-2 mx-auto">
                        <div className="col-12">
                            <LazyLoad offset={-100} once>
                                <img
                                    src={ResultsStat1}
                                    alt=""
                                    className="w-100"
                                />
                            </LazyLoad>
                        </div>
                        <div className="col-12">
                            <LazyLoad offset={-100} once>
                                <img
                                    src={ResultsStat2}
                                    alt=""
                                    className="w-100"
                                />
                            </LazyLoad>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container py-5">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h2>LESSONS LEARNED</h2>
                        <p>
                            <b>Design for Downtime:</b> When the AI needs more
                            processing time, provide clear progress indicators
                            and allow users to remain productive.
                        </p>

                        <p>
                            <b>Accuracy Above All:</b> Even automated tools
                            require an intuitive review process—users must be
                            able to quickly verify and correct AI-generated
                            data.
                        </p>

                        <p>
                            <b>Continuous Improvement: </b> Gathering feedback
                            from multiple usability test rounds and real-world
                            usage enabled iterative refinements. Over time,
                            these refinements improved both the tool's accuracy
                            and user trust.
                        </p>

                        <p>
                            <b>Future Potential: </b> With further AI training
                            and feedback loops, the Contract Reader can become
                            increasingly precise, ultimately saving even more
                            time for TCs.
                        </p>
                    </div>

                    <div className="row col-md-6 mx-auto d-flex justify-content-center">
                        <LazyLoad offset={-100} once>
                            <img
                                src={LessonsLearned}
                                alt=""
                                className="w-100"
                            />
                        </LazyLoad>
                    </div>
                </div>
            </section>
        </CaseStudyPageWrapper>
    )
}
