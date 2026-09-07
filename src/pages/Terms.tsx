import LegalPage from "./LegalPage";

export default function Terms() {
  return (
    <LegalPage title="Terms of Use" updated="Draft — not yet finalized">
      <p>
        These terms are a placeholder for this early marketing site. They
        are not a finished or legally reviewed agreement, and should be
        replaced before Twonit is publicly launched — see TODO.md.
      </p>
      <p>
        This website (twonit.com) is provided to share information about
        Twonit and to collect interest from potential pilot users. It
        does not currently host the Twonit product itself.
      </p>
      <p>
        By submitting the pilot interest form, you're letting us know you
        want to hear more about Twonit. As the form itself notes, no
        backend is connected yet, so submissions are not currently
        stored. Real terms covering the Twonit application — accounts,
        acceptable use, and related terms — will be published separately
        once that product is ready for public use.
      </p>
    </LegalPage>
  );
}
