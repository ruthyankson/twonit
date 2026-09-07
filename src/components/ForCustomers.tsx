import AudienceSection from "./AudienceSection";
import { forCustomers } from "../content/copy";

export default function ForCustomers() {
  return (
    <AudienceSection
      id="for-customers"
      eyebrow={forCustomers.eyebrow}
      headline={forCustomers.headline}
      body={forCustomers.body}
      benefits={forCustomers.benefits}
      cta={forCustomers.cta}
      imageLabel="A customer reviewing and approving her order details on her phone"
      imageSide="right"
      tint="peach"
    />
  );
}
