import AudienceSection from "./AudienceSection";
import { forArtisans } from "../content/copy";

export default function ForArtisans() {
  return (
    <AudienceSection
      id="for-artisans"
      eyebrow={forArtisans.eyebrow}
      headline={forArtisans.headline}
      body={forArtisans.body}
      benefits={forArtisans.benefits}
      cta={forArtisans.cta}
      imageLabel="A dressmaker reviewing an order record on a tablet at her workbench"
      imageSide="left"
      tint="plum"
    />
  );
}
