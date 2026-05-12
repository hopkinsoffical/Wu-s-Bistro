import { XieBaoStorySection } from "@/components/XieBaoStorySection";
import { RestaurantLocations } from "@/components/RestaurantLocations";

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sea">
          About Us
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink">
          Built in the kitchen. Proven in the warehouse of data.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink/75">
          Wu&apos;s Bistro pairs high-touch hospitality with an internal center of
          excellence for analytics, business intelligence, and AI engineering. Our
          operating brands—<strong className="text-ink">Xie Bao (蟹宝)</strong> and{" "}
          <strong className="text-ink">Wu&apos;s Fish House</strong>—celebrate coastal
          Chinese flavors with a Manhattan presence noted in local press, alongside
          locations serving Flushing, Queens and Edison, New Jersey.
        </p>
      </div>

      <XieBaoStorySection variant="about" />

      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 sm:pb-20">
        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Founding & timeline
          </h2>
          <p className="mt-4 leading-relaxed text-ink/75">
            The group&apos;s modern corporate chapter formalized in{" "}
            <strong className="text-ink">2024</strong> as we consolidated
            multi-borough restaurant operations and stood up a dedicated data &
            software function to support unit economics at scale. Public-facing
            openings—including the{" "}
            <a
              href="https://w42st.com/post/claw-some-delights-xie-bao-unveils-unique-chinese-cuisine-in-hells-kitchen/"
              className="font-medium text-coral underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hell&apos;s Kitchen flagship
            </a>
            —rolled into market through early{" "}
            <strong className="text-ink">2025</strong>.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Team & founder
          </h2>
          <p className="mt-4 leading-relaxed text-ink/75">
            <strong className="text-ink">Homer Wu</strong> leads Wu&apos;s Bistro
            as owner and steward of the Xie Bao concept—drawing on childhood
            memories of Jiangsu&apos;s crab-rich coast while building a
            contemporary, data-informed restaurant company in the United States.
            Chef <strong className="text-ink">Lin</strong> anchors culinary
            execution with deep experience across Fujian and broader Chinese
            traditions, as profiled in community coverage of the Manhattan
            opening.
          </p>
          <p className="mt-4 leading-relaxed text-ink/75">
            The analytics & AI bench reports into finance and operations leadership
            and includes specialists aligned to{" "}
            <strong className="text-ink">Data Analyst (BI)</strong>,{" "}
            <strong className="text-ink">Business Intelligence Analyst</strong>,
            and <strong className="text-ink">AI Engineer</strong> role families—
            delivering models, pipelines, dashboards, and production agents rather
            than one-off spreadsheets.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Mission
          </h2>
          <blockquote className="mt-4 border-l-4 border-gold pl-6 text-lg italic leading-relaxed text-ink/80">
            Deliver uncompromising guest experiences through culinary craft—while
            treating every service minute, every cover, and every SKU as a signal
            we can learn from, forecast, and improve.
          </blockquote>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Restaurant addresses
          </h2>
          <p className="mt-4 leading-relaxed text-ink/75">
            Four operating units—three under the{" "}
            <strong className="text-ink">Xie Bao (蟹宝)</strong> brand in
            Manhattan, Flushing, and Edison, plus{" "}
            <strong className="text-ink">Wu&apos;s Fish House (吴氏鱼汤)</strong> in
            Edison. Markets and reservations are also summarized on the{" "}
            <a
              href="https://xiebaousa.com/"
              className="font-medium text-coral underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Xie Bao USA
            </a>{" "}
            guest site.
          </p>
          <RestaurantLocations className="mt-8" />
          <p className="mt-6 rounded-xl border border-sea/15 bg-shell/80 p-5 text-sm leading-relaxed text-ink/75">
            <strong className="text-ink">Registered / filing address:</strong>{" "}
            For the exact legal entity name, jurisdiction, and address as filed
            with the Secretary of State (or equivalent), email{" "}
            <a
              href="mailto:info@WuBistro.com?subject=Corporate%20filing%20address"
              className="font-medium text-coral hover:underline"
            >
              info@WuBistro.com
            </a>{" "}
            with subject line{" "}
            <span className="whitespace-nowrap font-mono text-xs">
              Corporate filing address
            </span>
            . We provide verification on letterhead for qualified counterparties.
          </p>
        </section>
      </div>
    </>
  );
}
