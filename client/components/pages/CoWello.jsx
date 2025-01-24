import React from "react"
import LazyLoad from "react-lazyload"

import HeroImg from "../../assets/images/cowello/CoWello-Cover.png"
import CoWelloLogo from "../../assets/images/cowello/CoWello_logo.png"
import Circle1 from "../../assets/images/cowello/Computer.png"
import Circle2 from "../../assets/images/cowello/Coworking.png"
import Circle3 from "../../assets/images/cowello/Space-Owner.png"

import UserSnapshots from "../../assets/images/cowello/User-Snapshots.png"

import Persona1 from "../../assets/images/cowello/CoWello-User-Persona.png"

import SignUpBefore from "../../assets/images/cowello/Sign-Up-Before.png"
import SignUpAfter from "../../assets/images/cowello/Sign-Up-After.png"

import ArchitectureDiagram from "../../assets/images/cowello/Architecture-Diagram.png"
import CoWelloOfferings from "../../assets/images/cowello/CoWello-Offerings.png"

import LessonsLearned from "../../assets/images/cowello/Lessons-Learned.png"

import { Trail } from "../blocks/Trail"

import CaseStudyPageWrapper from "./CaseStudyPageWrapper"

const LoadWithTrail = (props) => (
    <LazyLoad {...props} offset={-100}>
        <Trail>{props.children}</Trail>
    </LazyLoad>
)

export default function CoWello(props) {
    return (
        <CaseStudyPageWrapper
            jumboProps={{
                version: 2,
                className: "bg-cowello-green",
                heroImage: null,
                logo: CoWelloLogo,
                logoWidth: "315px",
                imageClassName: "LK__header",
                title: "Revamping Onboarding to Increase User Activation",
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
                    <img src={HeroImg} alt="" class="w-100" />
                </LoadWithTrail>
            </section>

            <section className="container pt-5">
                <div className="row my-lg">
                    <div className="col-md-5 mx-auto">
                        <h2>BACKGROUND</h2>
                        <div>
                            <p>
                                Coworking spaces thrive on efficiency and
                                seamless operations. Yet for new owners signing
                                up for CoWello, the experience was anything but
                                smooth. Complex payment setups, confusing
                                navigation, and overwhelming configuration
                                options created barriers that prevented them
                                from achieving their goals. As a result, only 2%
                                of users were able to complete onboarding and
                                activate the platform.
                            </p>
                            <p>
                                My goal as a Product Designer was to simplify
                                the onboarding experience to empower coworking
                                space owners to get started quickly and
                                effectively, driving user activation and
                                satisfaction for CoWello.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-5 mx-auto">
                        <div
                            className="border-left border-cowello-green pl-5 h-100 d-flex flex-column justify-content-center"
                            style={{ borderLeftWidth: "3px" }}
                        >
                            <h6 className="mb-0">ROLE</h6>
                            <p className="mb-3">Product Designer</p>
                            <h6 className="mb-0">PROJECT</h6>
                            <p className="mb-3">12 Week Intiative</p>
                            <h6 className="mb-0">TOOLS USED</h6>
                            <p className="mb-0">Figma</p>
                        </div>
                    </div>
                </div>

                <div className="row my-lg bg-lk-blue-grey py-5">
                    <div className="row col-md-6 mb-5 mb-md-0 p-0">
                        <div className="col-md-11 mx-auto mb-5 mb-md-0 d-flex text-left flex-column justify-content-center align-items-start">
                            <h2 className="">PROBLEM</h2>
                            <div>
                                The onboarding process for CoWello was riddled
                                with friction points. Users faced:
                                <ul>
                                    <li>
                                        Complex Payment Setups: Multi-step
                                        authentication processes and unclear
                                        requirements stalled progress.
                                    </li>
                                    <li>
                                        Confusing Navigation: Key actions, such
                                        as setting up plans or spaces, were
                                        buried in an unintuitive interface.
                                    </li>
                                    <li>
                                        Ambiguous Messaging: Lack of clear
                                        guidance left users unsure about what to
                                        do next.
                                    </li>
                                </ul>
                                <p>
                                    These issues resulted in a mere 2%
                                    activation rate, significantly below
                                    expectations. To address this, we aimed to
                                    simplify the onboarding flow and achieve a
                                    user activation rate of 30%.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-11 mx-auto mb-5 mb-md-0 d-flex text-left flex-column justify-content-center align-items-start">
                            <h2 className="">SOLUTION</h2>
                            <div>
                                <p>
                                    By simplifying CoWello's onboarding flow,
                                    reworking payment setup, and streamlining
                                    how users add spaces and plans, we{" "}
                                    <b>
                                        increased new user activation to approx.
                                        33%
                                    </b>
                                    , exceeding our original goal of 30%.
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

            <section className="container pt-5 mb-lg">
                <div className="col-md-11 mx-auto">
                    <h2>RESEARCH & INSIGHTS</h2>
                    <div>
                        <p>
                            Through a mix of qualitative and quantitative
                            research, we identified the root causes of user
                            friction and gathered inspiration for solutions.
                            These insights shaped our design decisions, focusing
                            on reducing cognitive load and providing users with
                            clear, actionable paths.
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
                                Interviews with coworking space owners revealed
                                that flexibility and ease of use were critical
                                during onboarding. Users wanted to configure key
                                elements (spaces, memberships) quickly while
                                having the option to refine details later.
                            </p>

                            <h3>Secondary Research</h3>
                            <p>
                                Analysis of tools like Airbnb's Host Platform,
                                Atlassian, and competitors to CoWello
                                highlighted the value of step-by-step guidance
                                and pre-configured templates to simplify complex
                                setups.
                            </p>

                            <h3>User Session Analysis</h3>
                            <p>
                                Session recordings revealed two major drop-off
                                points in the onboarding process:
                            </p>
                            <ol>
                                <li>
                                    <b>
                                        Complete Space and Plan Set Up- Approx.
                                    </b>{" "}
                                    80% of new users did not complete this step.
                                    We attributed this to users getting
                                    overwhelming with the amount of steps needed
                                    to add these.
                                </li>
                                <li>
                                    <b>Payment Authentication and Set Up</b>-
                                    While more than 60% completed this step, few
                                    processed a single payment.{" "}
                                </li>
                            </ol>
                        </div>

                        <div className="col-12 col-md-6 mx-auto">
                            <LazyLoad offset={-100} once={true}>
                                <Trail>
                                    <img
                                        src={UserSnapshots}
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
                        one-size-fits-all process. ListedKit’s users fall into
                        two main personas, each with different workflows and
                        customization needs:
                    </p>
                </div>

                <div className="col-md-11 mx-auto mb-5">
                    <h3>Single Location Space Owners</h3>
                    <p>
                        Space Owners of a small, single coworking location
                        typically handle everything from scheduling and member
                        on-boarding to payment processing. Because of this, they
                        need straightforward, repeatable tools that help them
                        streamline administrative tasks while still offering
                        flexibility in their offerings and building a strong
                        sense of community among their members.
                    </p>
                    <p>
                        <b>Primary goal:</b> Need a flexible, user-friendly
                        system to manage bookings and payments at scale while
                        providing a positive, engaged member experience.
                    </p>
                    <LoadWithTrail once offset={100} height={674}>
                        <img src={Persona1} alt="" className="w-100" />
                    </LoadWithTrail>
                </div>
            </section>

            <section className="container">
                <div className="col-md-11 mx-auto mb-3">
                    <h2>DESIGN SOLUTIONS</h2>
                </div>

                <div className="row">
                    <div className="col-md-11 mx-auto mb-5">
                        <h3>Optimized Onboarding for Activation Metric</h3>
                        <p>
                            In the original sign up flow, very little
                            information was gathered. Initially the goal was to
                            reduce friction and time to create an account.
                            However, this lead to users being dropped into an
                            underwhelming dashboard without much direction for
                            what to do next.
                        </p>
                        <p>
                            Since we identified the activation metric to be
                            adding a member to a location, we added fields
                            required to effectively begin onboarding members and
                            reduced unnecessary steps that didn't align with
                            this job to be done.
                        </p>
                        <p>
                            <b>ADDED:</b>
                        </p>
                        <ol>
                            <li>
                                <b>Sniper Link:</b> Added a Sniper Link to the
                                Email Verification step to reduce friction.
                            </li>
                            <li>
                                <b>Location Address:</b> This is needed for
                                members to navigate to the coworking space.
                            </li>
                            <li>
                                <b>Photo:</b> This helps members identify the
                                location.
                            </li>
                            <li>
                                <b>Hours:</b> Members need to know when the
                                space is open and available.
                            </li>
                            <li>
                                <b>Plans/Rooms:</b> Members needed to be able to
                                book or be assigned a membership.
                            </li>
                        </ol>

                        <p>
                            <b>REMOVED:</b>
                        </p>
                        <ol>
                            <li>
                                <b>Credit Card Information:</b> We removed the
                                payment information step and opted to offer a
                                free plan.
                            </li>
                            <li>
                                <b>Stripe Verification:</b> Stripe Verification
                                was a hurdle for many users as it required
                                several steps to authenticate their business.
                            </li>
                        </ol>
                    </div>

                    <div className="col-md-11 mx-auto mb-5 row">
                        <p>
                            <b>Before Sign Up Flow</b>
                        </p>
                        <LazyLoad offset={-100} once>
                            <img src={SignUpBefore} alt="" className="w-100" />
                        </LazyLoad>

                        <p>
                            <b>After Sign Up Flow</b>
                        </p>
                        <LazyLoad offset={-100} once>
                            <img src={SignUpAfter} alt="" className="w-100" />
                        </LazyLoad>
                    </div>

                    <div className="col-md-11 mx-auto mb-5 row">
                        <div className="col-12 col-md-6">
                            <p>
                                <b>{"Room <> Plans Architecture Mapping"}</b>
                            </p>
                            <LazyLoad offset={-100} once>
                                <img
                                    src={ArchitectureDiagram}
                                    alt=""
                                    className="w-100"
                                />
                            </LazyLoad>
                        </div>

                        <div className="col-12 col-md-6">
                            <p>
                                <b>Easy Plan/Room Configuration</b>
                            </p>
                            <LazyLoad offset={-100} once>
                                <img
                                    src={CoWelloOfferings}
                                    alt=""
                                    className="w-100"
                                />
                            </LazyLoad>
                        </div>
                    </div>

                    <div className="col-md-11 mx-auto">
                        <h3>Streamlined Plan & Room Configuration</h3>
                        <p>
                            Before, configuring the spaces, memberships, and
                            other offerings was tedious and confusing. The
                            original designs did not guide users during this
                            process and introduced significant cognitive load
                            for users to ensure all spaces and membership plans
                            were connected to ensure a smooth booking process
                            for their members. This difficult to understand
                            space-plan structure made it difficult for users to
                            easily tailor CoWello to their space needs for
                            several use cases.
                        </p>
                        <p>
                            After interviews with coworking space owners,
                            analyzing customer support conversations, and
                            performing secondary research- I identified most
                            common pricing and memberships coworking spaces
                            offered. With help from the team, we ideated an
                            intuitive solution. This new user flow and design
                            would enable users to select from a list of
                            pre-created offerings- based on their selections,
                            our application would configure these appropriately-
                            requiring little action from the user.
                        </p>
                    </div>
                </div>
            </section>

            <section className="container py-5 bg-lk-blue-grey">
                <div className="row">
                    <div className="col-md-9 mx-auto">
                        <h2>RESULTS</h2>
                        <p>
                            <b>Increased User Activation Rate:</b> The user
                            activation rate jumped from 2% to approximately 33%,
                            exceeding the initial goal of 30%. This marked a
                            significant improvement in the number of users able
                            to successfully complete the onboarding process,
                            demonstrating that the simplified flow and intuitive
                            design changes effectively reduced friction for
                            first-time users.
                        </p>

                        <p>
                            <b>Reduced Customer Support Requests:</b> By
                            eliminating complex steps and introducing intuitive
                            defaults for membership plans and space
                            configurations, customer support requests related to
                            onboarding and migration dropped noticeably. This
                            allowed the support team to redirect their efforts
                            toward more value-driven tasks, such as building
                            relationships with customers and handling edge
                            cases.
                        </p>

                        <p>
                            <b>Streamlined Setup for Diverse Use Cases:</b> The
                            inclusion of pre-configured options for membership
                            plans and spaces made it easier for a broader range
                            of coworking spaces to adapt CoWello to their needs.
                            This flexibility enabled the platform to support
                            both small, single-location spaces and larger,
                            multi-location businesses with complex setups.
                        </p>
                    </div>
                </div>
            </section>

            <section className="container py-5">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h2>LESSONS LEARNED</h2>
                        <p>
                            <b>Collaboration Drives Results:</b> Working closely
                            with the engineering team ensured that our designs
                            aligned with existing technical constraints,
                            enabling faster implementation without compromising
                            user value.
                        </p>

                        <p>
                            <b>Simplicity Wins:</b> By reducing unnecessary
                            complexity, we provided users with a clear path to
                            success. However, offering flexible options
                            post-onboarding maintained the platform's
                            adaptability for diverse user needs.
                        </p>

                        <p>
                            <b>Intentional Friction Enhances Activation:</b>{" "}
                            Counterintuitively, introducing deliberate friction
                            in the onboarding flow (e.g., requiring users to
                            input basic location and hours) helped guide users
                            toward meaningful milestones, increasing their
                            confidence and likelihood of success.
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
