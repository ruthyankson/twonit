import { Link } from "react-router-dom";
import LegalPage, { Bullets, Section } from "./LegalPage";
import { legal } from "../content/copy";

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Use"
      updated={legal.updated}
      summary={
        <p>
          Twonit is a free, early-stage tool that helps dressmakers and
          customers record and agree on custom orders. You must be 18 or
          older to use it. The agreement about a garment, its price and its
          payment is between the dressmaker and the customer; Twonit keeps the
          shared record but doesn't make garments or handle payments. Be
          honest, respect other people's information, and only share order
          links with the people involved.
        </p>
      }
    >
      <Section number={1} title="About these terms">
        <p>
          These terms are an agreement between you and {legal.operator},
          who runs Twonit in Ghana ("Twonit", "we", "us"). They apply to the
          website at twonit.com and the Twonit app at app.twonit.com. By
          creating an account or using Twonit, you agree to them. Our{" "}
          <Link to="/privacy" className="font-medium text-plum-700 underline underline-offset-2">
            Privacy Policy
          </Link>{" "}
          explains how we handle your personal data.
        </p>
      </Section>

      <Section number={2} title="An early pilot">
        <p>
          Twonit is in an early pilot. Features will change, some may be
          removed, and there may be interruptions while we improve it.
          Twonit is free to use during the pilot. If we introduce paid plans
          or fees, we'll tell you in advance, and you can decide whether to
          continue.
        </p>
      </Section>

      <Section number={3} title="Who can use Twonit">
        <p>
          You must be 18 or older to create an account. Parents and guardians
          can save a child's measurements and order for them on their own
          account.
        </p>
      </Section>

      <Section number={4} title="Your account">
        <Bullets>
          <li>Give accurate details, and keep them up to date.</li>
          <li>
            You sign in with a code sent to your email, so keep your email
            account secure. You're responsible for what happens in your Twonit
            account.
          </li>
          <li>One account is for one person or one business. Don't use someone else's account.</li>
          <li>Tell us straight away at {legal.email} if you think someone else has used your account.</li>
        </Bullets>
      </Section>

      <Section number={5} title="What Twonit does, and what it doesn't">
        <p>
          Twonit is a tool for recording custom orders and sharing them
          between a dressmaker or tailor and their customer: measurements,
          specifications, approvals, changes, progress, payments logged and
          delivery.
        </p>
        <Bullets>
          <li>
            <strong>The agreement is between you.</strong> Any agreement about
            a garment, its price, deadline, payment or delivery is between the
            dressmaker and the customer. Twonit is not a party to it.
          </li>
          <li>
            <strong>Twonit doesn't handle money.</strong> Payments are made
            directly between customers and dressmakers. Payments logged in
            Twonit are a record kept by the people on the order; Twonit doesn't
            verify them.
          </li>
          <li>
            <strong>The directory isn't an endorsement.</strong> Dressmakers
            listed in the directory describe their own services. We don't
            check their work, qualifications or identity, so use your own
            judgment.
          </li>
          <li>
            <strong>Disputes.</strong> If something goes wrong with an order,
            the shared record is there to help you sort it out. We're happy to
            help where we can, but we can't guarantee an outcome.
          </li>
        </Bullets>
      </Section>

      <Section number={6} title="Your content">
        <p>
          You own what you add to Twonit: orders, measurements, notes, photos
          and ratings. You allow us to store it and show it to the people it's
          meant for (the other person on an order, anyone you share an order
          link with, and the public directory if you choose to be listed), as
          needed to run Twonit.
        </p>
        <p>
          Only add what you have the right to share. Don't upload photos of
          other people, or record someone's measurements or contact details,
          without their permission (or as their parent or guardian).
        </p>
      </Section>

      <Section number={7} title="Fair use">
        <p>Please don't:</p>
        <Bullets>
          <li>enter false orders, payments, ratings or reviews;</li>
          <li>harass, threaten or mislead other users;</li>
          <li>upload anything illegal, offensive, or that infringes someone else's rights;</li>
          <li>send spam, or use Twonit to contact people who haven't dealt with you;</li>
          <li>try to access accounts or data that aren't yours, copy data from Twonit in bulk, or interfere with how it works.</li>
        </Bullets>
      </Section>

      <Section number={8} title="Order links">
        <p>
          Each order and visit has a private link that opens it without
          signing in. Anyone with the link can see that order, so share it
          only with the people involved.
        </p>
      </Section>

      <Section number={9} title="Suspending or closing accounts">
        <p>
          You can stop using Twonit at any time, and ask us to delete your
          account (see our Privacy Policy). We may suspend or close an account
          that breaks these terms or puts other users at risk; where it's
          reasonable, we'll tell you why first.
        </p>
      </Section>

      <Section number={10} title="No guarantees">
        <p>
          Twonit is provided as it is, during an early pilot. We work hard to
          keep it reliable and your records safe, but we can't promise it will
          always be available or free of errors. Keep your own copy of anything
          you can't afford to lose.
        </p>
      </Section>

      <Section number={11} title="Limits on our responsibility">
        <p>
          As far as the law allows, Twonit is not responsible for the garments,
          prices, payments, deliveries or conduct of the people who use it, or
          for indirect losses such as lost profits or business. Nothing in these
          terms limits any rights you have under Ghanaian law that can't be
          limited.
        </p>
      </Section>

      <Section number={12} title="Changes to these terms">
        <p>
          When we change these terms, we'll update the date at the top. If a
          change is significant, we'll tell you by email or in the app before
          it takes effect. If you keep using Twonit after that, the new terms
          apply.
        </p>
      </Section>

      <Section number={13} title="Law and contact">
        <p>
          These terms are governed by the laws of Ghana, and the courts of
          Ghana can decide any dispute about them. Questions? Email{" "}
          <a
            href={`mailto:${legal.email}`}
            className="font-medium text-plum-700 underline underline-offset-2"
          >
            {legal.email}
          </a>
          .
        </p>
      </Section>
    </LegalPage>
  );
}
