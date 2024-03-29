// Import react
import { useNavigate } from "react-router-dom";

// IMPORT COMPONENTS
import Button from "../components/Button";
import Break from "../components/Break";
import SEO from "../components/Seo";

// IMPORTING SVGs
import home from "../assets/home.svg";
import freedom from "../assets/freedom.svg";
import travel from "../assets/travel.svg";
import emergency from "../assets/emergency.svg";
import education from "../assets/education.svg";
import creditCard from "../assets/creditCard.svg";
import mortgage from "../assets/mortgage.svg";
import trajectoryEducation from "../assets/trajectory-education.svg";

export default function () {
  const navigate = useNavigate();
  return (
    <>
      <SEO
        title="Build-a-Budget"
        description="Reasons that you should build a budget today and create a financial plan for the future! Do you ever dream of financial freedom, having a dream home, or traveling the world? Worried about emergencies devastating you financially? Have too much debt? Learn how to manage your personal finance with BaBudget!"
        name="Build-a-Budget"
        type="website"
      />
      {/* HERO SECTION */}
      <section className="Home">
        <main>
          <div>
            <h1>Plan your financial future.</h1>
            <Button
              backgroundColor="#47586A"
              children="Start Here"
              color="white"
              fontSize="1.6rem"
              height="80px"
              width="200px"
              onClick={() => {
                navigate(`/budget-calculator`);
                window.scrollTo(0, 0);
              }}
            />
          </div>
        </main>

        {/* STATISTICS PANEL SECTION */}
        <section className="homePanel">
          <h3>Why do I need a budget?</h3>

          {/* GOALS */}
          <section className="goals">
            <section>
              <article>
                <img src={freedom} alt="financial freedom" />
                <h4>Financial Freedom</h4>
              </article>
              <article>
                <img src={home} alt="dream home" />
                <h4>Dream Home</h4>
              </article>
              <article>
                <img src={travel} alt="traveling" />
                <h4>Traveling</h4>
              </article>
            </section>
          </section>

          <Break />

          {/* EMERGENCY */}
          <section className="emergency">
            <img src={emergency} alt="medical emergency" />
            <h4>EMERGENCIES</h4>
            <p>
              Emergencies happen when we least expect it. Automotive, medical,
              natural; no matter how small or large the expense, will you be
              ready? A reported 22% of U.S. adults claim to have no emergency
              savings.{" "}
              <a
                href="https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/"
                target="_blank"
              >
                ?
              </a>
            </p>
          </section>

          <Break />

          {/* DEBT INFOGRAPHICS */}
          <section className="debt">
            <h3>DEBT</h3>
            <section>
              <article>
                <img src={education} alt="school debt" />
                <p>
                  The average undergraduate student loan debt by the end of 2022
                  was around <b>$37,787</b>.{" "}
                  <a
                    href="https://www.bankrate.com/loans/student-loans/student-loan-debt-statistics/#key-statistics"
                    target="_blank"
                  >
                    ?
                  </a>
                </p>
              </article>
              <article>
                <img src={mortgage} alt="mortgage" />
                <p>
                  The average mortgage debt in America in 2022 was{" "}
                  <b>$236,443</b>.{" "}
                  <a
                    href="https://www.fool.com/the-ascent/research/average-household-debt/"
                    target="_blank"
                  >
                    ?
                  </a>
                </p>
              </article>
              <article>
                <img src={creditCard} alt="consumer debt" />
                <p>
                  The average american in Q1 of 2023 has <b>$5,733</b> in credit
                  card debt.{" "}
                  <a
                    href="https://www.cnbc.com/2023/06/09/how-much-credit-card-debt-americans-hold-by-age.html"
                    target="_blank"
                  >
                    ?
                  </a>
                </p>
              </article>
            </section>
          </section>

          <Break />

          {/* EDUCATION INFOGRAPHICS */}
          <section className="education">
            <img
              src={trajectoryEducation}
              alt="education about personal finance"
            />
            <h4>EDUCATION</h4>
            <p>
              To manage money better requires an understanding of how it
              actually works. The average American was only able to correctly
              answer about <b>48%</b> of the 2023 P-Fin Index financial literacy
              survey. This survey measures knowledge relating to financial
              situations encountered in the normal course of life.{" "}
              <a
                href="https://gflec.org/wp-content/uploads/2023/04/2023-P-Fin-Index-report-TIAA-Inst-and-GFLEC-Apr-2023.pdf"
                target="_blank"
              >
                ?
              </a>
            </p>
          </section>
        </section>

        {/* TAKE ACTION */}
        <section className="takeAction">
          <p>Educate yourself and take control of your finances!</p>
          <Button
            backgroundColor="#47586A"
            children="Learn More"
            color="white"
            fontSize="1.5rem"
            height="80px"
            width="200px"
            onClick={() => navigate("/learn")}
          />
        </section>
      </section>
    </>
  );
}
