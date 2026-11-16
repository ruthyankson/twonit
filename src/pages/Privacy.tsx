import { Link } from "react-router-dom";
import LegalPage, { Bullets, Section } from "./LegalPage";
import { legal } from "../content/copy";

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated={legal.updated}
      summary={
        <p>
          We collect what Twonit needs to run your orders: your account
          details, the order details you and your dressmaker or customer
          enter, and the photos you add. We share them only with the other
          person on the order, the services that keep Twonit running, and
          anyone you send an order link to. We never sell your data or show
          you ads, and you can ask us to see, correct or delete it at any
          time.
        </p>
      }
    >
      <Section number={1} title="Who we are">
        <p>
          Twonit is run by {legal.operator}, the founder, in Ghana ("Twonit",
          "we", "us"). This policy covers the website at twonit.com and the
          Twonit app at app.twonit.com. It explains what personal data we
          collect, why, who can see it, and the choices you have, in line
          with Ghana's Data Protection Act, 2012 (Act 843).
        </p>
        <p>
          Twonit is in an early pilot. Features change often, and we'll
          update this policy when they change how we use your data (see
          section 10).
        </p>
      </Section>

      <Section number={2} title="What we collect">
        <p>
          <strong>Your account.</strong> Your email address, which you use
          to sign in with a one-time code.
        </p>
        <p>
          <strong>Your profile.</strong> For customers: your name, phone
          number, location and an optional photo. For dressmakers and
          tailors: your business name, phone, location, photo, social media
          and WhatsApp links, default currency, the services you offer, who
          you sew for, your specialties, a short description of your work,
          and the payment details you choose to add (for example a Mobile
          Money number and the name on the wallet, or a bank account name
          and number).
        </p>
        <p>
          <strong>Orders.</strong> The details recorded for each order: the
          customer's name, phone and email, the garment, fabric, style
          notes, measurements, reference photos, deadline, price, payments
          logged, production stages and their photos, requested changes and
          the history of edits, delivery confirmation, and ratings and
          comments.
        </p>
        <p>
          <strong>Measurements for other people.</strong> Customers can save
          measurements for themselves and for people they order for, such as
          family members, including children. Dressmakers can keep client
          records for people who don't have a Twonit account. Only add
          someone else's details if you are their parent or guardian, or
          they have agreed to it.
        </p>
        <p>
          <strong>Forms.</strong> If you signed up through the pilot form
          this website used to have, we keep the name, email, phone, country,
          city, role and anything you told us about why you were interested.
          If you send feedback in the app, we keep what you write.
        </p>
        <p>
          <strong>Technical data.</strong> Small cookies that keep you signed
          in, and a few settings stored on your own device (for example which
          side of Twonit you last used, or whether you dismissed the "install
          the app" prompt). Twonit does not use advertising or analytics
          trackers.
        </p>
      </Section>

      <Section number={3} title="How we use it">
        <Bullets>
          <li>To run Twonit: create your account, sign you in, and record, share and update your orders.</li>
          <li>To send you emails about your account and orders: sign-in codes, orders sent for your review, approvals, progress updates, payments and delivery.</li>
          <li>To show your business in the dressmaker directory, if you are a dressmaker and choose to be listed.</li>
          <li>To keep Twonit safe and working: preventing misuse, fixing problems and helping when you contact us.</li>
          <li>To learn from the pilot and improve Twonit, mostly from totals and trends rather than individual records, and to ask you for feedback.</li>
        </Bullets>
        <p>
          We use your data because you've asked us to provide Twonit to you,
          and with your consent where that's needed. We do not sell your
          data, and we won't send you marketing messages without your
          agreement.
        </p>
      </Section>

      <Section number={4} title="Who can see your data">
        <Bullets>
          <li>
            <strong>The other person on an order.</strong> A dressmaker and
            their customer both see the order they share, including its
            measurements, photos and payments.
          </li>
          <li>
            <strong>Anyone with an order link.</strong> Each order and visit
            has a private link that opens it without signing in. Treat it
            like a key: share it only with the people involved.
          </li>
          <li>
            <strong>Payment details.</strong> A dressmaker's payment details
            are shown to the customer on orders sent to them for review, and
            in the related emails. The public directory only shows which kinds
            of payment a dressmaker accepts, never the numbers.
          </li>
          <li>
            <strong>The public directory.</strong> Only dressmakers who switch
            it on are listed. A listing shows the business name, location,
            photo, contact links, what they make and their average rating.
          </li>
          <li>
            <strong>Photos.</strong> Photos you upload are stored at web
            addresses that are very hard to guess but not password-protected,
            so anyone who has the exact address of a photo can open it.
          </li>
          <li>
            <strong>Twonit's team.</strong> The founder, and anyone who helps
            run Twonit, can access data when needed to run, support and secure
            the service.
          </li>
          <li>
            <strong>Services that run Twonit.</strong> Supabase (database,
            sign-in and file storage, hosted in London, United Kingdom), Vercel
            (hosting the app), Brevo (sending emails) and GitHub Pages (hosting
            this website). They may store or process data outside Ghana,
            including in the United Kingdom, the European Union and the United
            States, and only use it to provide their service to us.
          </li>
          <li>
            <strong>When the law requires it.</strong> We may share data if
            we're legally required to, or to protect people's safety.
          </li>
        </Bullets>
      </Section>

      <Section number={5} title="How long we keep it">
        <p>
          We keep your account and orders for as long as you use Twonit, so
          you and the other person on each order keep your shared record.
          When you ask us to delete your account, we delete your profile and
          saved measurements and remove your link to your orders. An order
          the other person still relies on, such as a dressmaker's record of
          what was agreed and paid, may be kept, but you can ask us to remove
          or anonymise your details in it where the law allows.
        </p>
        <p>
          Pilot sign-up details are kept until the pilot ends or until you ask
          us to remove them. Deleted data can remain in backups for a short
          time before it's overwritten.
        </p>
      </Section>

      <Section number={6} title="Your rights">
        <p>Under Ghana's Data Protection Act, you can ask us to:</p>
        <Bullets>
          <li>tell you what personal data we hold about you and give you a copy;</li>
          <li>correct data that's wrong or incomplete (most of it you can also edit yourself in the app);</li>
          <li>delete your data or your account;</li>
          <li>stop using your data for a particular purpose, or withdraw a consent you gave.</li>
        </Bullets>
        <p>
          Email us at the address below. We may ask you to confirm it's you,
          for example by replying from the email address on your account,
          and we'll respond as soon as we can and within the time the law
          allows. If you're unhappy with how we handle your data, you can
          also complain to Ghana's Data Protection Commission.
        </p>
        <p>
          Twonit can be used from anywhere. If you live outside Ghana, you may
          also have rights under the data protection law where you live, and
          we'll respect those requests too.
        </p>
      </Section>

      <Section number={7} title="Keeping your data safe">
        <p>
          Twonit uses encrypted connections, sign-in by one-time codes, and
          database rules that only let each person see their own records and
          the orders they're part of. No system is perfectly secure, so
          please keep your email account safe and only share order links
          with the people involved. If a breach affects your data, we'll
          tell you and the Data Protection Commission as soon as reasonably
          practicable.
        </p>
      </Section>

      <Section number={8} title="Children">
        <p>
          You must be 18 or older to create a Twonit account. Parents and
          guardians can save a child's measurements and order for them on
          their own account. If you believe a child has created an account,
          please tell us and we'll remove it.
        </p>
      </Section>

      <Section number={9} title="Other websites">
        <p>
          Twonit links to other services, such as WhatsApp, Instagram or a
          dressmaker's own pages. Their own privacy policies apply when you
          use them.
        </p>
      </Section>

      <Section number={10} title="Changes to this policy">
        <p>
          When we change this policy, we'll update the date at the top. If a
          change affects how we use your data in a significant way, we'll
          tell you by email or in the app before it takes effect.
        </p>
      </Section>

      <Section number={11} title="Contact">
        <p>
          {legal.operator}, Twonit, Ghana. Email{" "}
          <a
            href={`mailto:${legal.email}`}
            className="font-medium text-plum-700 underline underline-offset-2"
          >
            {legal.email}
          </a>
          . See also our{" "}
          <Link to="/terms" className="font-medium text-plum-700 underline underline-offset-2">
            Terms of Use
          </Link>
          .
        </p>
      </Section>
    </LegalPage>
  );
}
