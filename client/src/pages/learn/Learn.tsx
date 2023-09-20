import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Sidebar from "../../components/Sidebar";
import Term from "../../components/Term";
import Break from "../../components/Break";
import SEO from "../../components/Seo";

export default function () {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Preface to Personal Finances"
        description="Disclaimer on the knowledge that is shared."
        name="Build-a-Budget"
        type="disclaimer"
      />
      <section className="Learn Page">
        <section className="sidebar">
          <Sidebar />
        </section>
        <section className="body">
          <article>
            <h3>Personal Finance Basics Overview</h3>
            <section>
              <h4>Disclaimer</h4>
              <p>
                This is NOT professional advice! This is a more in-depth guide
                of this{" "}
                <a href="https://imgur.com/u0ocDRI" target="blank">
                  personal finance flowchart
                </a>
                . This guide will mainly focus on the "safest" method to invest
                in the stock market, but with any type of investment, success
                isn't 100% guaranteed. Take action at your own risk. With that
                out of the way, this guide will teach you the basics of personal
                finance. With more financial knowledge, you will be able to
                create a custom financial plan that will help you succeed!
              </p>
            </section>

            <Break />

            <section>
              <h4>Tips</h4>
              <ul>
                <li>You can Google any and everything</li>
                <li>Numbers and statistics vary depending on location</li>
                <li>
                  You can click/hover{" "}
                  <Term
                    term="gold terms"
                    definition="I will help explain a word or term in more detail"
                  />{" "}
                  to view the definition or{" "}
                  <Term
                    term="?"
                    definition="I will give helpful tips on certain topics"
                  />{" "}
                  to see more helpful tips
                </li>
                <li>
                  The time period used in this guide will almost always be
                  monthly
                </li>
                <li>
                  Prerequisites Checklist shows what you should have completed
                  before continuing
                </li>
                <li>
                  Use the sidebar to navigate through the chapters of this guide
                </li>
                <li>
                  Not everything can be done right away; take your time and move
                  at your own pace
                </li>
              </ul>
            </section>
          </article>

          <article className="buttons overview">
            <Button
              backgroundColor="#47586A"
              color="beige"
              fontSize=".9rem"
              height="3rem"
              width="8rem"
              onClick={() => navigate("/learn-budget")}
            >
              Start
            </Button>
          </article>
        </section>
      </section>
    </>
  );
}
