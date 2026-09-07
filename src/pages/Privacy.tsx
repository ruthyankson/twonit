import LegalPage from "./LegalPage";

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="Draft — not yet finalized">
      <p>
        Twonit ("we", "us") is an early-stage product. This draft exists so
        the site has a working link while the real policy is written and
        reviewed — it is a placeholder, not a binding statement of how
        Twonit handles data.
      </p>
      <p>
        In general, information submitted through this site (such as the
        pilot signup form) is currently used only to understand interest
        in Twonit and to follow up with people who ask to be part of the
        pilot. As noted on the pilot form itself, that form is not yet
        connected to a backend, so nothing submitted through it is
        currently stored by this website.
      </p>
      <p>
        Once Twonit's product (the order-tracking application, separate
        from this marketing site) is live, its own privacy policy will
        describe what account and order data is collected, how it's
        stored, and how it's used — that policy does not exist yet and
        will replace this page.
      </p>
    </LegalPage>
  );
}
