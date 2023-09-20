import SEO from "../components/Seo";

export default function () {
  return (
    <>
      <SEO
        title="About"
        description="I am an American citizen that started their personal finance journey in the middle of my 20s. I hope that with the information provided, I can help people plan out their life a little sooner and get a head start."
        name="Build-a-Budget"
        type="about me page"
      />
      <section>
        <article>
          <h2>About Me</h2>
        </article>
        <article>
          <ul>
            <li>introduce yourself</li>
            <li>why did you create this site?</li>
            <li>what is it used for</li>
            <li>parting words</li>
          </ul>
        </article>
      </section>
    </>
  );
}
